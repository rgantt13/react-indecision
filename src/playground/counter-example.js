
//Counter
let count = 0;
const addOne = () => {
    console.log('addOne',count);
    count++;
    renderCounter();
}
const subOne = () => {
    console.log('subOne');
    count--;
    renderCounter();
}

const resetClick = () => {
    console.log('RESET!');
    count = 0;
    renderCounter();
}


// const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={ addOne }>+1</button>

    
//     <button onClick={ subOne }>-1</button>
//     <button onClick={ resetClick }>Reset</button>
//     </div>
// );
// console.log(templateTwo);
// ReactDOM.render(templateTwo, appRoot);




const renderCounter = () =>{
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={ addOne }>+1</button>
    
        
        <button onClick={ subOne }>-1</button>
        <button onClick={ resetClick }>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();