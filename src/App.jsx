import React from 'react';

// import Header from './components/Header'
// import Meme from './components/Meme';


// export default function App() {
//     return (
//         <div>
//             <Header/>
//             <Meme/>
//         </div>
//     )
// }



// function Count(props) {
//     return (
//         <div className="counter--count">
//             <h1>{props.number}</h1>
//         </div>
//     )
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// export default function App() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    

//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <Count number={count}/>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//components///////////////////////////////////////////

// function Star(props) {
//     let starIcon = props.flag ? "star-filled.png" : "star-empty.png"

//     return (
//         <img 
//             src={`../src/assets/${starIcon}`} 
//             className="card--favorite"
//             onClick={props.changeStar}
//         />
//     )
// }



// /////////////////////////////////////////////////////////






// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false,
//     })


//     function toggleFavorite() {
//         setContact(prevContact => ({
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }))
//     }
    
    
    
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./src/assets/user.png" className="card--image" />
//                 <div className="card--info">
//                     <Star flag={contact.isFavorite} changeStar={toggleFavorite}/>
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//components////////////////////////////////////////////////////

// function Header(props) {
    
    
    
    
//     return (
//         <header>
//             <p>Current user: {props.name}</p>
//         </header>
//     )
// }



// function Body(props) {
//     return (
//         <section>
//             <h1>Welcome back, {props.name}!</h1>
//         </section>
//     )
// }



/////////////////////////////////////////////////////////////////




// export default function App() {

//     const [user, setUser] = React.useState("Joe");

//     return (
//         <main>
//             <Header name={user}/>
//             <Body name={user}/>
//         </main>
//     )
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//components////////////////////////////////////////
const arrayBoxes = [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]



///////////////////////////////////////////////////






export default function App(props) {

    const [boxes, setBoxes] = React.useState(arrayBoxes);
    const styles = {
        backgroundColor: props.darkMode ? '#222222' : '#cccccc',
    }
    const boxesHtml = boxes.map((box)=> <div style={styles} key={box.id} className='box'></div>)
    
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxesHtml}
        </main>
    )
}