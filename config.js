export default {
    app: {
        token: "ceaf6b97fe074b359dabdc6e8fcc0428", // <- enter your token here
        muted: false, // <- mute microphone by default
        watermark: false // <- show watermark
    },
    locale: {
        strings: {
            welcomeTitle: "Smart Aleck",
            welcomeSubTitle: "Tu asistente virtual para compras online",
            welcomeDescription: `Puedes escribir "Hola" por ejemplo. O simplemente presionar el micrófono y comenzar a hablar`,
            offlineTitle: "Oh, no!",
            offlineDescription: "Parece que no estás conectado a Internet, este asistente virtual necesita conexión a Internet para poder atender tus consultas",
            queryTitle: "Pregúntame algo...",
            voiceTitle: "Adelante, estoy escuchando..."
        },
        settings: {
            speechLang: "es", // <- output language
            recognitionLang: "es" // <- input(recognition) language
        }
    }
}