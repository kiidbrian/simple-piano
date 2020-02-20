import React, { useState } from 'react';

// Component imports
import PianoBrand from './brand';
import PianoScale from './scale';
import PianoKeys from './keys';

// styles
import './style.css';

const Piano = () => {
    const [playedNote, setPlayedNote] = useState('');

    const onStart = ({ note, octave }) => setPlayedNote(`${note}${octave}`)

    const onStop = () => {};

    return (
        <>
            <div className='piano'>
                <PianoBrand />
                <PianoScale>
                    <PianoKeys onStart={onStart} onStop={onStop} />
                </PianoScale>
            </div>

            <div className="piano__logger">
                {playedNote}
            </div>

            <div className='piano__play__container'>
                <input
                    type='text'
                    className='piano__play__input'
                    placeholder='Type notes to play'
                />
                <button type='button' className='piano__play__btn'>
                    Play
                </button>
            </div>
        </>
    );
};

export default Piano;
