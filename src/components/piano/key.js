import React from 'react';
import classNames from 'classnames/bind';

const PianoKey = ({ note, isFlat, isHalfStep, octave, onStart, onStop }) => {
    let cx = classNames.bind();
    
    const retrieveNote = () => `${note}${octave}`;

    const onPlay = () => {
        onStart({
            note,
            octave,
            time: new Date().getTime()
        })
    }

    return (
        <li
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
