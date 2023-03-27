import React from 'react';

import Header from './components/Header'
import Meme from './components/Meme';


export default function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const things = thingsArray.map((item)=> <p key={item}>{item}</p>)
    
    
    function addThings() {
        const newThing = `Thing ${thingsArray.length + 1}`;
            thingsArray.push(newThing);
            console.log(thingsArray);
    }

    
    
    return (
        <div>
            <Header/>
            <Meme/>
            <button onClick={addThings} className="form--button">
                    Get a new meme image 🖼
            </button>
            {things}
        </div>
    )
}