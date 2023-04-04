import React from 'react';

import Header from './components/Header'
import Meme from './components/Meme';


export default function App() {
    return (
        <div>
            <Header/>
            <Meme/>
        </div>
    )
}














///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


                //boxes(unified state)


//components////////////////////////////////////////
// const arrayBoxes = [
//     {
//         id: 1,
//         on: true
//     },   
//     {
//         id: 2,
//         on: false
//     },   
//     {
//         id: 3,
//         on: true
//     },   
//     {
//         id: 4,
//         on: true
//     },   
//     {
//         id: 5,
//         on: false
//     },   
//     {
//         id: 6,
//         on: false
//     },   
// ]


// function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? '#222222' : 'transparent',
//     };

//     return (
//         <div 
//         className='box' onClick={()=> props.toggle(props.id)} style={styles}></div>
//     )
// };





///////////////////////////////////////////////////






// export default function App(props) {

//     const [boxes, setBoxes] = React.useState(arrayBoxes);
    
//     function toggle(id) { 
//         setBoxes((prevState)=> {
//             return prevState.map((element)=> element.id === id ? {...element, on: !element.on} : element);
//         }) 
//     }
//     const boxesHtml = boxes.map((item)=> {
//         return <Box toggle={toggle} key={item.id} id={item.id}  on={item.on}/>
//     });
    
    
//     return (
//         <main>
//             <h1>Boxes will go here</h1>
//             {boxesHtml}
//         </main>
//     )
// }






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                //boxes(local state)


//components////////////////////////////////////////
// const arrayBoxes = [
//     {
//         id: 1,
//         on: true
//     },   
//     {
//         id: 2,
//         on: false
//     },   
//     {
//         id: 3,
//         on: true
//     },   
//     {
//         id: 4,
//         on: true
//     },   
//     {
//         id: 5,
//         on: false
//     },   
//     {
//         id: 6,
//         on: false
//     },   
// ]


// function Box(props) {
    
//     const [on, setOn] = React.useState(props.on);
    
//     const styles = {
//         backgroundColor: on ? '#222222' : 'transparent',
//     };

//     function flickIt() {
//         setOn((prevState)=> !prevState);
//     }

//     return (
//         <div 
//         className='box' onClick={flickIt} style={styles}></div>
//     )
// };





///////////////////////////////////////////////////






// export default function App(props) {

//     const [boxes, setBoxes] = React.useState(arrayBoxes);
    
//     const boxesHtml = boxes.map((item)=> {
//         return <Box key={item.id} on={item.on}/>
//     });
    
    
//     return (
//         <main>
//             <h1>Boxes will go here</h1>
//             {boxesHtml}
//         </main>
//     )
// }