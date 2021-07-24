import React, {Component} from 'react';
// import BtnStartComponent from "./BtnStartComponent";
import {timer} from 'rxjs';

class StopwatchComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            seconds: 0,
            active: false,
            timeSub: ''
        };

        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
        // this.startTime = this.startTime.bind(this);
        // this.stopTime = this.stopTime.bind(this);
        this.setTime = this.setTime.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.wait = this.wait.bind(this);
        this.resetTime = this.resetTime.bind(this);
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

    handleClick(){
        this.setState(state => ({
            active: !state.active
        }));
    }

    setTime(){
        if(!this.state.active)
        {
            this.startTime();
        }

        else
        {
            this.stopTime();
        }
    }

    startTime()
    {
            this.state.timeSub = timer(0, 1000).subscribe(
                () => this.setState({seconds: (this.state.seconds+1)})
            )

        return this.state.seconds;
    }

    stopTime(){
        this.state.timeSub.unsubscribe(() =>
                this.setState({seconds: (this.state.seconds)})
        );
        this.resetTime();
        console.log(this.state.timeSub);
        this.handleClick();
        return this.state.seconds;
    }

    wait(){
        this.state.timeSub.unsubscribe(() =>
            this.setState({seconds: (this.state.seconds)})
        );
        if(this.state.active)
        {
            this.handleClick();
        }
    }

    resetTime(){
        this.state.timeSub.unsubscribe(() =>
            this.setState({seconds: (this.state.seconds)})
        );
        this.setState({seconds: 0})
        if(this.state.active)
        {
            this.handleClick();
        }
    }

    render()
    {
            return (
                <div className={'container bg-dark mt-5 p-3'}>
                    <div className={'text-white h3 mb-3'}>
                        {this.getMinutes()}:{this.getSeconds()}
                    </div>
                    <div className="btn-group" role="group">

                        {/*<BtnStartComponent/>*/}

                        <button type="button" className="btn btn-danger"
                                onClick={function(){this.handleClick(); this.setTime();}.bind(this)}>
                            {!this.state.active ? 'Start' : 'Stop'}
                        </button>

                        <button type="button" className="btn btn-warning" onClick={this.wait}>Wait</button>
                        <button type="button" className="btn btn-success" onClick={this.resetTime}>Reset</button>
                    </div>
                </div>
            );
    }
}

export default StopwatchComponent;