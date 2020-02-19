import React from 'react';

// Component imports
import PianoBrand from './brand';
import PianoScale from './scale';
import PianoKeys from './keys';

// styles
import './style.css';

const Piano = () => {
    const onStart = ({ note, octave }) => {
        console.log(`Note ${note}${octave} was played!`);
    };

    const onStop = () => {};

    return (
        <>
            <div className='piano'>
                <PianoBrand />
                <PianoScale>
                    <PianoKeys onStart={onStart} onStop={onStop} />
                </PianoScale>
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
