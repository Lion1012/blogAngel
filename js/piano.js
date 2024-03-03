import { playNote, playNoteOnMousedown } from "./note.js";

let notes = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5', 'c#4', 'd#4', 'f#4', 'g#4', 'a#4']

notes.forEach(note => document.getElementById(note)
    .addEventListener('mousedown', () => playNoteOnMousedown(note) ));
    
document.getElementById("body").addEventListener('keypress', playNote)