import React, {Component} from 'react';
import BtnStartComponent from "./BtnStartComponent";

class StopwatchComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            seconds: 71
        };

        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
    }

    getSeconds(){
        return ('0' + this.state.seconds % 60).slice(-2);
    }

    getMinutes(){
        return Math.floor(this.state.seconds / 60);
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