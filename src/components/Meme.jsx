import React from 'react';
import data from '../data'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        url: 'http://i.imgflip.com/1bij.jpg',
        topText: '',
        bottomText: '',
    });

    const [allMemes, setAllMemes] = React.useState(data);

    function getImg() {
        const memesArray = allMemes.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length);

        setMeme((prevMeme)=> {
            return {
                ...prevMeme,
                url: memesArray[randomNum].url,
            }
        })
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
                <button onClick={getImg} className="form--button">
                        Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.url} className='meme--img'/>
        </main>
    )
}