// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    handleClick = (event) => {
        const delayedFunction = this.props.onDelayedClick 
        event.persist()
        setTimeout(function () { delayedFunction(event) }, this.props.delay)
    }


    render() {
        return (
            <div className='delayed-button'>
                <button onClick = {this.handleClick.bind(this)}>
                    Waiting...
                </button>
            </div>
        );
    }
}

export default DelayedButton;