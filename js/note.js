const synth = new Tone.Synth().toDestination();

const notesKeys = {'s':'c4', 'd':'d4', 'f':'e4', 'g':'f4', 'h':'g4', 'j':'a4', 'k':'b4', 'l':'c5', 'e':'c#4', 'r':'d#4', 'y':'f#4','u':'g#4','i':'a#4'}

export function playNote(event) {
    synth.triggerAttackRelease(notesKeys[event.key], "8n")
}

export function playNoteOnMousedown(note) {
    synth.triggerAttackRelease(note, "8n")
}