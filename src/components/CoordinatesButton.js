// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY
        let coords = [x, y]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <div className='coordinates-button'>
                <button onClick={this.handleClick}>Get Mouse Coordinates</button>
            </div>
        );
    }
}

export default CoordinatesButton;