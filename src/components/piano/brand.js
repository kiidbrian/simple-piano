import React from 'react';

const PianoBrand = ({ brand = 'Roland' }) => (
    <h2 className='piano__brand'>{brand}</h2>
);

export default PianoBrand;
