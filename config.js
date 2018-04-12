export default {
    app: {
        token: "ceaf6b97fe074b359dabdc6e8fcc0428", // <- enter your token here
        muted: false, // <- mute microphone by default
        watermark: false // <- show watermark
    },
    locale: {
        strings: {
            welcomeTitle: "Hello, ask something to get started",
            welcomeDescription: `You can type "Hello" for example. Or just press on the microphone to talk`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "es", // <- output language
            recognitionLang: "es" // <- input(recognition) language
        }
    }
}