

export const usePlayAudio = (audio:string | undefined) => {
    const playAudio = () => {
        const audioElement = new Audio(audio)
        audioElement.play()
    }

    return { playAudio }
}
