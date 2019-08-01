import React from 'react';
import Image from "../image";
import './style.css';


// Stateless function
const Car = ({model, make, trim, colors, year, fuelType, key, image}) => {
    return(
        <div className="card-container">
            <Image src={image} />
            <div className="card-description">
                <p> <span className="bold-text">Model:</span>  {model} </p>
                <p> <span className="bold-text">Make:</span>  {make} </p>
                <p> <span className="bold-text">Trim:</span>  {trim} </p>
                <p> <span className="bold-text">Colors:</span>  {colors} </p>
                <p> <span className="bold-text">Year:</span>  {year} </p>
                <p> <span className="bold-text">Fuel Type:</span>  {fuelType} </p>
            </div>
        </div>
    )
}
export default Car;