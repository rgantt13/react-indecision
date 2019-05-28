

const appDetails = {
    details: ["Detail1", "Detail2","Detail3"],
    detailsHidden: true
};

const detailToggle_click = () => {

    appDetails.detailsHidden = !appDetails.detailsHidden;
    render();
}

const appRoot =  document.getElementById('app');


const render = () => {

const template = (
    <div>
        <h1>Visibility Toggle Buildit Challenge</h1>

        <button id='detailToggle' onClick = {detailToggle_click}>{appDetails.detailsHidden ? 'Show Details' : 'Hide Details'}</button>

        <ol hidden = {appDetails.detailsHidden} id='detailDisplay'>
        {
            appDetails.details.map((det) => <li key={det}>{det}</li>)
        }
        </ol>
    </div>
    );

    ReactDOM.render(template,appRoot);
}
render();