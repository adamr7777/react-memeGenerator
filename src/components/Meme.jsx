import React from 'react';
import data from '../data'

export default function Meme() {
    function handleClick() {
        const randomNum = Math.floor(Math.random() * data.data.memes.length);
        console.log(data.data.memes[randomNum]);
    };

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            </div>
        </main>
    )
}