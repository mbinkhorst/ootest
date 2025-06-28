import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'
import { systemPrompt } from '@/config/systemPrompt'

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    // Check API key
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables')
      return NextResponse.json(
        { 
          error: 'API configuratie ontbreekt. Check Environment Variables.',
          hint: 'Voeg GEMINI_API_KEY toe aan je environment variables'
        }, 
        { status: 500 }
      )
    }

    // Parse request data
    const body = await request.json()
    const { message, history } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Bericht is vereist' },
        { status: 400 }
      )
    }

    // Input validation
    if (typeof message !== 'string' || message.length > 10000) {
      return NextResponse.json(
        { error: 'Bericht moet een string zijn van maximaal 10.000 karakters' },
        { status: 400 }
      )
    }

    // Use Gemini 2.5 Flash for good balance of speed and quality
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    // Build conversation context
    let conversationContext = systemPrompt + '\n\n'
    
    // Add conversation history if available
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        if (msg.role === 'user') {
          conversationContext += `Gebruiker: ${msg.content}\n`
        } else if (msg.role === 'assistant') {
          conversationContext += `Assistent: ${msg.content}\n`
        }
      })
    }
    
    // Add current message
    conversationContext += `Gebruiker: ${message}\nAssistent:`

    const result = await model.generateContent(conversationContext)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ 
      response: text,
      success: true
    })

  } catch (error) {
    console.error('Chat API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het verwerken van je bericht',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}