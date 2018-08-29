import React, { Component } from 'react';
import App from './App';
// import FormIntroNew from './FormIntroNew';


class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {nameTitle: "", ageTitle:"",feelingTitle: ""};
        var changeAll =  


    }

    nameChange = (event) => {
        this.setState({nameTitle: event.target.value});
    };

    ageChange = (event) => {
        this.setState({ageTitle: event.target.value});
    };

    feelingChange = (event) => {
        this.setState({feelingTitle: event.target.value});
    };

    submitFunction = (event) => {
        console.log("Submitted Form.");

        //This prevents the form from reloading
        event.preventDefault();
    };


    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>

                    <label htmlFor="nameTitle">Name: </label>
                    <input type="text" id="nameTitle" value={this.state.nameTitle} onChange={this.nameChange}/>

                    <label htmlFor="ageTitle">Age: </label>
                    <input type="text" id="ageTitle" value={this.state.ageTitle} onChange={this.ageChange}/>

                    <label htmlFor="feelingTitle">Feelings: </label>
                    <input type="text" id="feelingTitle" value={this.state.feelingTitle} onChange={this.feelingChange}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default PersonStats;