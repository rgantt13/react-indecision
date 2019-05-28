class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';
        const options = ["thing1", "thing2", "thing4"];

        return(
            <div>
            <Header title={title} subtitle={subtitle}></Header>
            <Action></Action>
            <Options numOptions = {options.length}></Options>
            <AddOption></AddOption>
        </div>
        );
    }
}


class Header extends React.Component{
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
            <p>Options Component Here!</p>
            <Option></Option>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            Option Here!
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
            <p>AddOption Component Here!</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));