import React, { Component } from 'react';

class Progress extends Component {

    setValue = () => {
        const { value, maxValue } = this.props;

        return maxValue - value + 'px'
    }

    render() {
        const progressHeight = {
            height : this.setValue()
        }
        return (
            <>
                <div className="progress__image">
                    <span className="progress" style={progressHeight} ></span>

                    <span className="empty">
                        <img src="./assets/img/@exam.png" alt=""/>
                    </span>

                    <span className="full">
                        <img src="./assets/img/@exam_active.png" alt=""/>
                    </span>
                </div>

                <span className="progress__text">
                    최대 값 : {this.props.maxValue}<br />   
                    입력 값 : {this.props.value}
                </span>
            </>
        );
    }
}

export default Progress;