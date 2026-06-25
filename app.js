// State
let state = {
    format: 'video',
    tool: '',
    userInput: '',
    duration: 15,
    variants: 1,
    mood: '',
    colors: '',
    generatedPrompt: ''
};

// Tool-spezifische Konfigurationen
const toolConfigs = {
    // Video Tools
    sora2: {
        name: 'Sora 2',
        type: 'video',
        instruction: 'Prompts müssen extrem detailliert sein. Definiere Beleuchtung präzise. Keine physikalische Perfektion.',
        defaultDuration: 10,
        constraints: 'Natürliche Bewegung, keine verzerrten Gesichter, kein Text'
    },
    runway: {
        name: 'Runway Gen-3',
        type: 'video',
        instruction: 'Ideal für fotorealistische Clips. Versteht Lichtanweisungen sehr gut (Volumetric Fog, Rim Lighting).',
        defaultDuration: 8,
        constraints: 'Stabile Lichtverhältnisse, konsistente Objektposition, keine Flicker'
    },
    kling: {
        name: 'Kling 3.0',
        type: 'video',
        instruction: 'Herausragend bei Physik-Simulationen. Nutze Motion Intensity Parameter.',
        defaultDuration: 6,
        constraints: 'Natürliche Beschleunigung, stabiler Hintergrund, konsistente räumliche Tiefe'
    },
    luma: {
        name: 'Luma Dream Machine',
        type: 'video',
        instruction: 'Perfekt für "Szene in Bewegung". Kurze prägnante Prompts (3-5 Sätze).',
        defaultDuration: 8,
        constraints: 'Sanfte Wasserbewegung, subtile Texturen, keine extreme Details-Änderungen'
    },
    pika: {
        name: 'Pika Labs',
        type: 'video',
        instruction: 'Ideal für schnelle 3-sekündige Clips. Sehr benutzerfreundlich.',
        defaultDuration: 3,
        constraints: 'Moderate Bewegungsgeschwindigkeit, große Objekte fokussieren'
    },
    'google-flow': {
        name: 'Google Flow',
        type: 'video',
        instruction: 'Hochflexible Multimodal-API. Ideal für längere Videos und experimentelle Formate.',
        defaultDuration: 20,
        constraints: 'Clear narrative structure, consistent scene lighting, realistic physics'
    },
    'google-omni': {
        name: 'Google Omni',
        type: 'video',
        instruction: 'State-of-the-art für physikalische Simulationen. Besonders stark bei Wasser, Feuer, Stoff.',
        defaultDuration: 15,
        constraints: 'Smooth temporal consistency, natural physics-based movement, realistic material properties'
    },
    // Image Tools
    midjourney: {
        name: 'Midjourney',
        type: 'image',
        instruction: 'Nutze das 7-Dimensionen-Framework. Style-Werte für Realismus wichtig.',
        constraints: 'Anatomisch korrekt, symmetrische Gesichter, kein lesbarer Text, scharfer Fokus'
    },
    flux: {
        name: 'Flux',
        type: 'image',
        instruction: 'Modern und flexibel. Versteht detaillierte Beschreibungen gut.',
        constraints: 'Realistische Proportionen, konsistente Beleuchtung'
    },
    stable: {
        name: 'Stable Diffusion',
        type: 'image',
        instruction: 'Klassisch und zuverlässig. Nutze präzise technische Parameter.',
        constraints: 'Scharfer Fokus, hohe Detailtiefe, konsistente Beleuchtung'
    },
    dalle3: {
        name: 'DALL-E 3',
        type: 'image',
        instruction: 'Versteht natürliche Sprache sehr gut. Prompts können narrativer sein.',
        constraints: 'Klare räumliche Trennung der Elemente, großer Fokus auf Hauptmotiv'
    }
};

// Prompt Generator
function generatePrompt() {
    const userInput = document.getElementById('user-input').value.trim();
    const tool = document.getElementById('tool-select').value;
    const duration = document.getElementById('duration').value || state.duration;
    const mood = document.getElementById('mood').value || '';
    const colors = document.getElementById('colors').value || '';

    if (!userInput || !tool) {
        alert('Bitte fülle alle Pflichtfelder aus!');
        return;
    }

    const config = toolConfigs[tool];
    const isVideo = state.format === 'video';

    // Erstelle Hauptprompt
    let mainPrompt = '';

    if (isVideo) {
        mainPrompt = generateVideoPrompt(userInput, config, duration, mood, colors);
    } else {
        mainPrompt = generateImagePrompt(userInput, config, mood, colors);
    }

    // Speichere den generierten Prompt
    state.generatedPrompt = mainPrompt;
    state.tool = tool;

    // Render Output
    renderOutput(mainPrompt, config);
}

function generateVideoPrompt(input, config, duration, mood, colors) {
    const moodText = mood ? `, ${mood}` : '';
    const colorText = colors ? `, Farben: ${colors}` : '';
    const durationText = duration ? `${duration} Sekunden` : 'optimal';

    let prompt = `## 🎬 VIDEO PROMPT FÜR ${config.name.toUpperCase()} (${durationText})\n\n`;
    prompt += `### 📋 HAUPT-PROMPT:\n\n`;
    prompt += `\`\`\`\n`;

    // 5-Teile Framework für Videos
    prompt += `KAMERABEWEGUNG & OBJEKTIV:\n`;
    prompt += `35mm oder 50mm Linse, dynamische Kamerabewegung (Tracking Shot, Dolly, oder Crane), nicht statisch.\n\n`;

    prompt += `MOTIV & AKTION:\n`;
    prompt += `${input}\n`;
    prompt += `Bewegung ist flüssig, detailliert und visuell interessant.\n\n`;

    prompt += `UMGEBUNG & ATMOSPHÄRE:\n`;
    prompt += `Detaillierter Hintergrund, klare räumliche Verhältnisse, cinematische Tiefe.\n`;
    if (mood) prompt += `Stimmung: ${mood}\n`;
    prompt += `\n`;

    prompt += `BELEUCHTUNG & STIL:\n`;
    prompt += `Professionelle Beleuchtung (Rim Light, Key Light, oder Volumetric Effects).\n`;
    if (colors) prompt += `Farbpalette: ${colors}\n`;
    prompt += `Cineastischer Realismus, hochwertige Produktion.\n\n`;

    prompt += `CONSTRAINTS & REALISM:\n`;
    prompt += `${config.constraints}\n`;
    prompt += `Keine Morphing-Artefakte, natürliche Physik, konsistente Beleuchtung.\n`;

    prompt += `\`\`\`\n`;

    return prompt;
}

function generateImagePrompt(input, config, mood, colors) {
    let prompt = `## 🖼️ BILD PROMPT FÜR ${config.name.toUpperCase()}\n\n`;
    prompt += `### 📋 HAUPT-PROMPT:\n\n`;
    prompt += `\`\`\`\n`;

    // 7-Dimensionen Framework für Bilder
    prompt += `MOTIV (SUBJECT):\n`;
    prompt += `${input}\n\n`;

    prompt += `UMGEBUNG (ENVIRONMENT):\n`;
    prompt += `Detaillierter Hintergrund mit klarer Komposition.\n\n`;

    prompt += `BELEUCHTUNG (LIGHTING):\n`;
    prompt += `Professionelle Beleuchtung (Natural, Studio, Golden Hour, oder Cinematic).\n`;
    if (colors) prompt += `Lichtrichtung & Farbtemperatur: ${colors}\n`;
    prompt += `\n`;

    prompt += `KOMPOSITION & WINKEL:\n`;
    prompt += `Kamerawinkel optimiert für maximale Wirkung. Schärfentiefe: shallow DOF.\n\n`;

    prompt += `STIL:\n`;
    prompt += `Cinematic Photography, hochwertige Produktion.\n`;
    if (mood) prompt += `Stimmung: ${mood}\n`;
    prompt += `\n`;

    prompt += `BILDQUALITÄT:\n`;
    prompt += `8K Ultra HD, Sharp Focus, Intricate Details, Professional Quality.\n`;
    prompt += `Keine Artefakte, perfekte Anatomie, scharfe Details.\n\n`;

    prompt += `CONSTRAINTS:\n`;
    prompt += `${config.constraints}\n`;

    prompt += `\`\`\`\n`;

    return prompt;
}

function generateVariant(mainPrompt, variantNumber) {
    // Einfache Varianten durch Mood/Style-Variationen
    const moods = [
        'dramatisch & hochkontrast',
        'soft & cineastisch',
        'experimentell & bold',
        'minimalistisch & elegant',
        'energetisch & action-reich'
    ];

    const selectedMood = moods[variantNumber % moods.length];

    return mainPrompt.replace(
        /cineastisch|Stimmung: [^,\n]+/g,
        selectedMood
    ).replace(
        /### 📋 HAUPT-PROMPT/,
        `### 💡 VARIANTE ${variantNumber}: ${selectedMood}`
    );
}

function renderOutput(prompt, config) {
    const container = document.getElementById('output-container');
    const emptyState = document.getElementById('empty-state');
    const promptMain = document.getElementById('prompt-main');
    const variantContainer = document.getElementById('variant-output-container');
    const promptVariants = document.getElementById('prompt-variants');
    const outputTool = document.getElementById('output-tool');
    const outputFormat = document.getElementById('output-format');

    // Set Info
    outputTool.textContent = config.name;
    outputFormat.textContent = state.format === 'video' ? 'Video' : 'Bild';

    // Main Prompt
    promptMain.textContent = prompt;

    // Variants
    const variantCount = state.variants;
    if (variantCount > 0) {
        promptVariants.innerHTML = '';
        for (let i = 1; i <= variantCount; i++) {
            const variant = generateVariant(prompt, i);
            const div = document.createElement('div');
            div.className = 'prompt-output';
            div.textContent = variant;
            promptVariants.appendChild(div);
        }
        variantContainer.classList.remove('hidden');
    } else {
        variantContainer.classList.add('hidden');
    }

    // Show output, hide empty state
    container.classList.remove('hidden');
    emptyState.classList.add('hidden');
}

// Event Listeners
document.getElementById('format-video').addEventListener('click', function() {
    state.format = 'video';
    document.getElementById('format-video').classList.add('selected');
    document.getElementById('format-image').classList.remove('selected');
});

document.getElementById('format-image').addEventListener('click', function() {
    state.format = 'image';
    document.getElementById('format-image').classList.add('selected');
    document.getElementById('format-video').classList.remove('selected');
});

document.getElementById('tool-select').addEventListener('change', function() {
    state.tool = this.value;
    if (toolConfigs[this.value]) {
        document.getElementById('duration').placeholder =
            `z.B. ${toolConfigs[this.value].defaultDuration} Sekunden`;
    }
});

document.getElementById('toggle-advanced').addEventListener('click', function() {
    const section = document.getElementById('advanced-section');
    const icon = document.getElementById('toggle-icon');

    section.classList.toggle('hidden');
    icon.textContent = section.classList.contains('hidden') ? '▶' : '▼';
});

document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        state.variants = parseInt(this.dataset.variants);
    });
});

document.getElementById('generate-btn').addEventListener('click', generatePrompt);

document.getElementById('copy-btn').addEventListener('click', function() {
    const mainPrompt = document.getElementById('prompt-main').textContent;
    const allVariants = Array.from(document.querySelectorAll('#prompt-variants .prompt-output'))
        .map(el => el.textContent)
        .join('\n\n---\n\n');

    const fullText = allVariants ? mainPrompt + '\n\n---\n\n' + allVariants : mainPrompt;

    navigator.clipboard.writeText(fullText).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Kopiert!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        alert('Fehler beim Kopieren. Bitte manuell kopieren.');
    });
});

// Keyboard Shortcut: Enter to Generate
document.getElementById('user-input').addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        generatePrompt();
    }
});
