import React, { useState, useRef, useEffect } from 'react';

// Component imports
import PianoBrand from './brand';
import PianoScale from './scale';
import PianoKeys from './keys';

// styles
import './style.css';

const Piano = () => {
    const [playedNote, setPlayedNote] = useState('');
    const [isSelected, setIsSelected] = useState('');
    const inputEl = useRef();

    const onStart = ({ note, octave }) => setPlayedNote(`${note}${octave}`)

    const onStop = () => setPlayedNote(null);

    const onButtonPress = () => {
        const notes = inputEl.current.value.split(',');

        for (let index = 0; index <= notes.length; index++) {
            const element = notes[index];
            setTimeout(() => {
                setIsSelected(element);
            }, index+1*1000)
        }
    }

    useEffect(() => {
        if (isSelected) {

        }
    },[isSelected])

    return (
        <>
            <div className='piano'>
                <PianoBrand />
                <PianoScale>
                    <PianoKeys onStart={onStart} onStop={onStop} selectedNote={isSelected} />
                </PianoScale>
            </div>

            <div className="piano__logger">
                {playedNote}
            </div>

            <div className='piano__play__container'>
                <input
                    type='text'
                    className='piano__play__input'
                    ref={inputEl}
                    placeholder='Type notes to play'
                />
                <button type='button' className='piano__play__btn' onClick={onButtonPress}>
                    Play
                </button>
            </div>
        </>
    );
};

export default Piano;
