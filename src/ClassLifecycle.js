import React from 'react';

export default class ClassLifecycle extends React.Component {
    
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {};
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        console.log(this.props);
        return <div>
            <h1>Used Custom Hook</h1>
            <div>{this.props.url}</div>
        </div>
    }

}