import React, {Component} from 'react';
import BtnStartComponent from "./BtnStartComponent";
import {timer} from 'rxjs';

class StopwatchComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            seconds: 71
        };

        this.getSeconds = this.getSeconds.bind(this);
        this.startTime = this.startTime.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
    }

    getSeconds(){
        return ('0' + this.state.seconds % 60).slice(-2);
    }

    getMinutes(){
        return Math.floor(this.state.seconds / 60);
    }

    // getHours(){
    //     return Math.floor(this.state.seconds / 3600);
    // }

    startTime()
    {
        timer(0, 1000).subscribe(
            seconds => this.setState({seconds: this.state.seconds+1})
        )
        return this.state.seconds;
    }

    render()
    {
        return (
            <div className={'container bg-dark mt-5 p-3'}>
                <div className={'text-white h3 mb-3'}>
                    {this.getMinutes()}:{this.getSeconds()}
                </div>
                <div className="btn-group" role="group">

                    <BtnStartComponent/>

                    <button type="button" className="btn btn-warning">Wait</button>
                    <button type="button" className="btn btn-success">Reset</button>
                </div>
            </div>
        );
    }
}

export default StopwatchComponent;