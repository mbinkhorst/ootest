# Simple Chat App

Een eenvoudige chat applicatie gebouwd met Next.js en Gemini AI.

## Features

- 💬 Real-time chat interface
- 🤖 Powered by Gemini AI
- ⚙️ Configureerbare system prompt
- 🎨 Clean, responsive design

## Setup

1. **Clone het project**
```bash
git clone <your-repo>
cd <project-name>
```

2. **Installeer dependencies**
```bash
npm install
```

3. **Environment variabelen**
Maak een `.env.local` bestand aan:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Verkrijg een Gemini API Key**
- Ga naar [Google AI Studio](https://makersuite.google.com/app/apikey)
- Maak een gratis API key aan

5. **Start de development server**
```bash
npm run dev
```

6. **Open de app**
Ga naar [http://localhost:3000](http://localhost:3000)

## Configuratie

### System Prompt aanpassen

Je kunt de AI's gedrag aanpassen door de system prompt te bewerken in `src/config/prompt.ts`:

```typescript
export const systemPrompt = `Je bent een behulpzame AI-assistent...`
```

Hier kun je een hele lange prompt neerzetten die bepaalt hoe de AI zich gedraagt, welke rol het speelt, en hoe het moet reageren.

### Voorbeelden van system prompts:

**Customer Service Bot:**
```typescript
export const systemPrompt = `Je bent een vriendelijke klantenservice medewerker voor een online winkel. Je helpt klanten met vragen over producten, bestellingen, retouren en algemene ondersteuning. Wees altijd beleefd, geduldig en probeer praktische oplossingen te bieden.`
```

**Coding Assistant:**
```typescript
export const systemPrompt = `Je bent een ervaren programmeur die helpt met code vragen. Je geeft duidelijke uitleg, voorbeelden en best practices. Je kunt helpen met debugging, code review en het leren van nieuwe technologieën.`
```

**Educational Tutor:**
```typescript
export const systemPrompt = `Je bent een geduldige leraar die complexe onderwerpen op een begrijpelijke manier uitlegt. Gebruik voorbeelden, analogieën en stap-voor-stap uitleg. Moedig vragen aan en controleer of de student het begrijpt.`
```

## Deployment

### Netlify
1. Push je code naar GitHub
2. Verbind je repository met Netlify
3. Voeg `GEMINI_API_KEY` toe aan Environment Variables
4. Deploy!

### Vercel
1. Push je code naar GitHub
2. Import project in Vercel
3. Voeg `GEMINI_API_KEY` toe aan Environment Variables
4. Deploy!

## Project Structuur

```
src/
├── app/
│   ├── api/chat/route.ts    # Chat API endpoint
│   ├── layout.tsx           # App layout
│   └── page.tsx            # Homepage
├── components/
│   └── ChatInterface.tsx   # Main chat component
└── config/
    └── prompt.ts           # System prompt configuratie
```

## Tech Stack

- **Framework:** Next.js 15
- **AI:** Google Gemini API
- **Styling:** Tailwind CSS
- **Language:** TypeScript

---

**Gemaakt door Tom Naberink**