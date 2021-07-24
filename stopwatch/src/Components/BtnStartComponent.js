import React, {Component} from 'react';

class BtnStartComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            active: !state.active
        }));
    }

    stopTime(){
        alert('Time stopped');
    }

    startTime(){
        alert("Time started");
    }

    render()
    {
        if (this.state.active)
        {
            return (
                <button type="button" className="btn btn-danger"
                        onClick={function(){this.handleClick(); this.stopTime();}.bind(this)}>
                    Stop{this.state.active}
                </button>
            );
        }

        else {
            return (
                <button type="button" className="btn btn-danger"
                        onClick={function(){this.handleClick(); this.startTime();}.bind(this)}>
                    Start{this.state.active}
                </button>
            );
        }
    }

}

export default BtnStartComponent;