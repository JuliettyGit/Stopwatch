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

    render()
    {
        if (this.state.active)
        {
            return (
                <button type="button" className="btn btn-danger"
                        onClick={this.handleClick}>
                    Stop{this.state.active}
                </button>
            );
        }

        else {
            return (
                <button type="button" className="btn btn-danger"
                        onClick={this.handleClick}>
                        Start{this.state.active}
                </button>
            );
        }
    }

}

export default BtnStartComponent;