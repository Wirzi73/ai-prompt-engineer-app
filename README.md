# 🎬 AI Prompt Engineer - Web App

Eine moderne, benutzerfreundliche Web-Anwendung zur Generierung professioneller cineastischer Prompts für KI-Video- und Bildgeneratoren.

## ✨ Features

- **Unterstützte Video-Tools:** Sora 2, Runway Gen-3, Kling 3.0, Luma Dream Machine, Pika Labs, Google Flow, Google Omni
- **Unterstützte Bild-Tools:** Midjourney, Flux, Stable Diffusion, DALL-E 3
- **Frameworks:** 5-Teile-Framework für Videos, 7-Dimensionen-Framework für Bilder
- **Advanced Settings:** Dauer, Varianten, Stimmung, Farbpalette
- **Ein-Klick-Kopieren:** Prompt direkt in die Zwischenablage kopieren
- **Responsive Design:** Funktioniert auf Desktop, Tablet und Mobilgeräten
- **100% Lokal:** Keine API-Anfragen, alles läuft im Browser

## 🚀 Schnellstart

### Lokal testen
1. Lade die Datei `index.html` herunter
2. Öffne sie im Browser (einfach doppelklick)
3. Fertig!

### Auf Netlify deployen

#### Option A: Mit Git
```bash
# 1. Repository klonen/forken
git clone https://github.com/dein-user/ai-prompt-engineer-app.git
cd ai-prompt-engineer-app

# 2. Auf Netlify.com anmelden und verbinden
# New site from Git → dein GitHub-Repo → Deploy
```

#### Option B: Direktes Deployment (einfacher)
1. Gehe zu [netlify.com](https://netlify.com)
2. Melde dich an
3. Drag & Drop den Ordner `ai-prompt-engineer-app` in die Seite
4. Fertig! Deine App hat eine öffentliche URL

## 📖 Wie man's nutzt

1. **Wähle das Format:** Video oder Bild
2. **Wähle dein Tool:** Sora, Runway, Midjourney, etc.
3. **Beschreibe deine Idee:** "Ein Surfer paddelt bei Sonnenaufgang..."
4. **(Optional) Advanced Settings:**
   - Dauer für Videos
   - Varianten (1-2 alternative Versionen)
   - Stimmung/Mood (cineastisch, dramatisch, etc.)
   - Farbpalette
5. **Klicke "Prompt Generieren"**
6. **Kopiere den Prompt** mit der Copy-Taste
7. **Paste in dein KI-Tool** und generiere!

## 🎯 Best Practices

- **Beschreibungen sind wichtig:** Je detaillierter deine Idee, desto besser der Prompt
- **Tool-Spezifika:** Die App optimiert automatisch für dein gewähltes Tool
- **Varianten testen:** Generiere 1-2 Varianten und vergleiche die Ergebnisse
- **Advanced Settings nutzen:** Spiele mit Mood/Farbe für unterschiedliche Ästhetiken

## 🔧 Technologie

- **Frontend:** HTML5, CSS3 (Tailwind), Vanilla JavaScript
- **Deployment:** Netlify
- **Keine Dependencies:** Läuft 100% im Browser
- **Responsive:** Mobile-first Design

## 📝 Prompting Framework

### Für Videos (5-Teile):
1. **Kamerabewegung** (Objektiv, Tracking Shot, etc.)
2. **Motiv & Aktion** (Wer macht was?)
3. **Umgebung** (Ort, Atmosphäre)
4. **Beleuchtung & Stil** (Lichttechnik, Ästhetik)
5. **Constraints** (Was vermeiden?)

### Für Bilder (7-Dimensionen):
1. **Motiv** (Hauptfokus)
2. **Umgebung** (Hintergrund)
3. **Beleuchtung** (Lichttechnik)
4. **Farbe** (Farbpalette)
5. **Komposition** (Winkel, Schärfentiefe)
6. **Stil** (Künstlerischer Ansatz)
7. **Bildqualität** (Technische Specs)

## 🎨 Customization

Wenn du die App anpassen möchtest:

- **Farben ändern:** Bearbeite die Gradient/Tailwind-Klassen in `index.html`
- **Tools hinzufügen:** Füge neue Einträge in `toolConfigs` in `app.js` hinzu
- **Prompt-Template ändern:** Bearbeite `generateVideoPrompt()` und `generateImagePrompt()`

## 📚 Weitere Ressourcen

- [AI Prompt Engineer Skill](https://github.com/frank/ai-prompt-engineer-skill) — Der zugrunde liegende Skill
- [Midjourney Prompt Guide](https://docs.midjourney.com)
- [Runway Gen-3 Docs](https://docs.runwayml.com)

## 💡 Support & Feedback

Gefällt dir die App? Gib mir Feedback oder fork den Code!

---

**Gebaut mit ❤️ für cineastische KI-Generierung**

Jetzt schnell auf **Netlify deployen und mit der Welt teilen!** 🚀
