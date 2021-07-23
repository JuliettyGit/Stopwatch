import React, {Component} from 'react';
import BtnStartComponent from "./BtnStartComponent";

class StopwatchComponent extends Component
{
    render()
    {
            return (
                <div className={'container bg-dark mt-5 p-3'}>
                    <div className={'text-white h3 mb-3'}>
                        00:00:00
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                        <BtnStartComponent/>

                        <button type="button" className="btn btn-warning">Wait</button>
                        <button type="button" className="btn btn-success">Reset</button>
                    </div>
                </div>
            );
    }
}

export default StopwatchComponent;