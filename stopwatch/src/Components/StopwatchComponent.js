import React, {Component} from 'react';
import {timer} from 'rxjs';

class StopwatchComponent extends Component
{
    constructor(props)
    {

        super(props);

        this.state = {
            seconds: 0,
            active: false,
            timeSub: false,
        };

        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);

        this.handleClick = this.handleClick.bind(this);

        this.setTime = this.setTime.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);

        this.wait = this.wait.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    subscription;

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
        this.subscription = timer(0, 1000).subscribe(
            () => this.setState({seconds: (this.state.seconds+1)})
        )

        return this.state.seconds;
    }

    stopTime(){
        this.subscription.unsubscribe(() =>
            this.setState({seconds: (this.state.seconds)})
        );
        this.resetTime();
        this.handleClick();

        return this.state.seconds;
    }

    wait(){
        this.subscription.unsubscribe(() =>
            this.setState({seconds: (this.state.seconds)})
        );
        if(this.state.active)
        {
            this.handleClick();
        }
    }

    resetTime(){
        this.subscription.unsubscribe(() =>
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
            <div  className={'neo container mt-5 p-3 rounded'}>
                <div className={'neo-color h1 mb-3'}>
                    {this.getMinutes()}:{this.getSeconds()}
                </div>
                    <button type="button" className="btn btn-lg btn-violet border-0 neo-sm mx-3"
                            onClick={function(){this.handleClick(); this.setTime();}.bind(this)}>
                        {!this.state.active ? 'Start' : 'Stop'}
                    </button>

                    <button type="button" className="btn btn-lg btn-purple border-0 neo-sm mx-3" onDoubleClick={this.wait}>Wait</button>
                    <button type="button" className="btn btn-lg btn-pink border-0 neo-sm mx-3" onClick={this.resetTime}>Reset</button>
                </div>
        );
    }
}

export default StopwatchComponent;