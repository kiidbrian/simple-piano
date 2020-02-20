import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

const PianoKey = ({ note, isFlat, isHalfStep, octave, onStart, onStop, selectedNote }) => {
    let cx = classNames.bind();
    
    const retrieveNote = () => `${note}${octave}`;

    const onPlay = () => {
        onStart({
            note,
            octave,
            time: new Date().getTime()
        })
    }

    useEffect(() => {
        if (selectedNote === note) {
            onPlay();
            setTimeout(() => {
                onStop();
            },500)
        }
    }, [selectedNote])

    return (
        <li
            id={note + octave}
            onMouseDown={onPlay}
            onMouseUp={onStop}
            className={cx({
                flat: isFlat,
                half: isHalfStep
            })}
        >
            {retrieveNote}
        </li>
    )
}

PianoKey.defaultProps = {
    note: 'A', 
    isFlat: false, 
    isHalfStep: false, 
    octave: 1,
    onStart: () => {},
    onStop: () => {}
}

export default PianoKey;
