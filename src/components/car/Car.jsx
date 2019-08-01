import React from 'react';

class Car extends React.Component {
    render() {
        if(!this.props.car){ 
            return null
        } else {
            return(
                <h1> {this.props.car.id} </h1>
            )
        }

    }
};

export default Car;