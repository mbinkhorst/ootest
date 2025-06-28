import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Chat App
            </h1>
            <p className="text-gray-600">
              Powered by Gemini AI
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}