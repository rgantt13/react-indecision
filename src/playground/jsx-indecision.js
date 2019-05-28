console.log('App.js is running!');


const appInfo = {
    title: "React Indecision Application",
    subtitle: "Udemy Course Tutorial",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderFunc();
    }
};



const removeOptions = () => {
    appInfo.options = [];
    renderFunc();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const chosenOption = appInfo.options[randomNum];
    alert(chosenOption);
}


const appRoot =  document.getElementById('app');

const numbers = [55, 101, 1000];

const renderFunc = () => {

// JSX - Javascript XML
const template = (
    <div>
        <h1>{appInfo.title}</h1>
        {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
        {appInfo.options.length > 0 ? "Here are your options..." : "Sorry. There are no options at this time."}

        <button disabled={appInfo.options.length === 0} onClick={makeDecision}>What should I do today?</button>
        <button onClick={removeOptions}>Reset Options</button>

        <ol>
        {
            appInfo.options.map((opt) => <li key={opt}>{opt}</li>)
        }
        </ol>

        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add an Option</button>
        </form>
    </div>
    );


    ReactDOM.render(template,appRoot);
}
renderFunc();