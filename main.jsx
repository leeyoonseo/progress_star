import React, { Component } from 'react';
import Progress from './Progress';

class main extends Component {
    state = {
        maxValue : 70,
        value : 0
    }

    inputRef;

    onInputRef = (c) => {
        this.inputRef = c;
    };

    componentDidMount(){
        this.inputRef.focus();
    }

    onChange = (e) => {
        let value = e.target.value;

        if(value < 0){
            value = Math.abs(value);

        }else if(value > this.state.maxValue){
            value = value.slice(0, -1);
        }

        this.setState({
            value : value
        });
    };

    onClick = () => {
        this.setState({
            value : 0
        });
    }

    render() {
        const { value, maxValue } = this.state;

        return (
            <div>
                <div>
                    <Progress value={value} maxValue={maxValue}/>
                </div>
                <input 
                    type="number" 
                    ref={this.onInputRef}
                    value={this.state.value} 
                    onChange={this.onChange} 
                />
                <button 
                    type="button" 
                    onClick={this.onClick}
                >reset</button>
            </div>
        );
    }
}

export default main;