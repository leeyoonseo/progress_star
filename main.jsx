import React, { Component } from 'react';
import Progress from './Progress';

class main extends Component {
    state = {
        standardValue : 70,
        maxValue : 50,
        value : 0,
        showNotiText : false
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

            // this.setState({
            //     showNotiText : true
            // });

            // setTimeout(() => {
            //     this.setState({
            //         showNotiText : false
            //     });
            // }, 2000);
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
        const { value, standardValue, maxValue } = this.state;

        return (
            <div>
                <div>
                    <Progress value={value} standardValue={standardValue} maxValue={maxValue} />
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
                {
                    (this.state.showNotiText) ? (
                        <div className="noti">
                            입력 값을 초과했습니다.<br/>
                            0 ~ {this.state.maxValue}
                        </div>

                    ) : null
                }
                
            </div>
        );
    }
}

export default main;