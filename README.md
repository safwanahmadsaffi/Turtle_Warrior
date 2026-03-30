# 🐢 Turtle Warrior — Tattle Turtle

**Turtle Warrior** is an AI-powered, voice-enabled emotional support application designed for elementary-school students (ages 6–10). It lets children speak freely about how they're feeling, and uses Google's Gemini Live API to listen empathetically, ask gentle follow-up questions, and — when necessary — automatically alert a teacher or generate a parent summary.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎙️ **Voice Chat** | Real-time, two-way voice conversation powered by Gemini Live |
| 🤗 **Empathetic AI** | "Tattle Turtle" responds with active listening, short replies, and age-appropriate language |
| 🔍 **Socratic Mode** | Gently guides students to reflect on feelings using categorization and conceptualization |
| 🚨 **Safety Evaluator** | A parallel AI worker evaluates every utterance for self-harm or serious safety concerns and flags them immediately |
| 👩‍🏫 **Teacher Dashboard** | Escalated alerts are surfaced in a real-time teacher dashboard |
| 📧 **Parent Summary** | Generates a personalised parent report with activities, reading materials, and growth moments |
| 🔒 **Pattern Tracking** | Detects recurring concern patterns (peer conflict, academic stress, etc.) across sessions |

---

## 🗂️ Repository Structure

```
Turtle_Warrior/
├── Tattle-Turtle/          # Main React + TypeScript application
│   ├── App.tsx             # Root component — voice session & UI orchestration
│   ├── constants.tsx       # School guidelines & shared UI constants
│   ├── types.ts            # Shared TypeScript interfaces & enums
│   ├── services/
│   │   ├── geminiService.ts              # Gemini API wrappers
│   │   ├── socraticPrompter.ts           # System-instruction builder
│   │   ├── evaluatorClient.ts            # Safety evaluator Web Worker client
│   │   ├── evaluatorPolicy.ts            # Evaluator prompts & response schema
│   │   ├── criticalSafetyDetector.ts     # Regex-based critical-phrase detector
│   │   ├── conversationEventEmitter.ts   # Conversation event bus
│   │   ├── conversationSummaryService.ts # End-of-session summary generator
│   │   └── parentSummaryGenerator.ts     # Parent report generator
│   ├── utils/
│   │   └── patternTracking.ts            # Cross-session concern-pattern tracker
│   ├── workers/            # Web Workers for off-thread AI evaluation
│   ├── index.html
│   ├── index.tsx
│   ├── App.css
│   ├── vite.config.ts
│   └── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [Google AI Studio](https://ai.google.dev/) account with a **Gemini API key**

### Installation

```bash
# Clone the repository
git clone https://github.com/safwanahmadsaffi/Turtle_Warrior.git
cd Turtle_Warrior/Tattle-Turtle

# Install dependencies
npm install
```

### Configuration

Create a `.env.local` file in the `Tattle-Turtle/` directory and add your API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The compiled output will be in `Tattle-Turtle/dist/`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| AI / Voice | Google Gemini Live API (`@google/genai`) |
| Safety Eval | Gemini 2.5 Flash (parallel Web Worker) |
| Styling | CSS (App.css) |

---

## 🔐 Safety Architecture

Turtle Warrior uses a **two-layer safety system**:

1. **Critical Phrase Detector** (`criticalSafetyDetector.ts`) — regex patterns that instantly flag self-harm intent or serious illegal-harm statements *before* the AI evaluator runs.
2. **AI Evaluator** (`evaluatorClient.ts` / `evaluatorPolicy.ts`) — a Gemini 2.5 Flash model running in a Web Worker that evaluates the full rolling conversation transcript and returns a structured `SafetyDecision` (`GREEN` or `TEACHER_REQUIRED`).

When a `TEACHER_REQUIRED` outcome is detected, the teacher dashboard is updated in real time and the student is shown an age-appropriate message directing them to a trusted adult.

---

## 📋 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

---

## 📄 License

This project was created for educational and research purposes.
