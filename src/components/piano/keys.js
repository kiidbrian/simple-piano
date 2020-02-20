import React from 'react';
import PianoKey from './key';

const PianoKeys = ({ onStart, onStop, selectedNote }) => (
    <>
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='C' octave={2} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Db' octave={2} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='D' octave={2} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Eb' octave={2} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='E' octave={2} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='F' octave={2} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Gb' octave={2} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='G' octave={2} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Ab' octave={2} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='A' octave={2} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Bb' octave={2} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='B' octave={2} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='C' octave={3} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Db' octave={3} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='D' octave={3} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Eb' octave={3} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='E' octave={3} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='F' octave={3} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Gb' octave={3} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='G' octave={3} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Ab' octave={3} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='A' octave={3} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Bb' octave={3} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='B' octave={3} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='C' octave={4} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Db' octave={4} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='D' octave={4} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Eb' octave={4} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='E' octave={4} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='F' octave={4} isHalfStep />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Gb' octave={4} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='G' octave={4} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Ab' octave={4} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='A' octave={4} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='Bb' octave={4} isFlat />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='B' octave={4} />
        <PianoKey onStart={onStart} onStop={onStop} selectedNote={selectedNote} note='C' octave={5} isHalfStep />
    </>
);

export default PianoKeys;
