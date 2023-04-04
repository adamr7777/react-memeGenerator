import React from 'react';
// import data from '../data'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        url: 'http://i.imgflip.com/1bij.jpg',
        topText: '',
        bottomText: '',
    });


    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=> {
        (async function(){
            const response = await fetch('https://api.imgflip.com/get_memes');
            const data = await response.json();
            setAllMemes(data);
        })();
    }, []);

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

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme((prevState)=> (
            {...prevState, [name]: value }
        ))
    }

    return (
        <main>
            <div className="form">
                <input
                    name="topText" 
                    type="text"
                    placeholder="Top text"
                    value={meme.topText}
                    className="form--input"
                    onChange={handleChange}
                />  
                <input
                    name="bottomText" 
                    type="text"
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    className="form--input"
                    onChange={handleChange}
                />
                <button onClick={getImg} className="form--button">
                        Get a new meme image 🖼
                </button>
            </div>
            
            <div className="meme">
            <img src={meme.url} className='meme--img'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}