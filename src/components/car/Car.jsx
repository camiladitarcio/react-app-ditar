import React from 'react';
import Image from "../image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './style.css';
// Stateless function
const Car = ({model, make, trim, colors, year, fuelType, id, image, handleDeleteModal, handleEditModal}) => {
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
            <div className="card-footer">
                <button className="icon" onClick={() => handleEditModal(make, year, model, fuelType, trim, colors, id)}>
                    <FontAwesomeIcon icon={faEdit} size={'lg'} className="icon-container" />
                </button>
                <button className="icon"  onClick={() => handleDeleteModal(id)}>
                    <FontAwesomeIcon icon={faTrash} size={'lg'} className="icon-container"/>
                </button>
            </div>
        </div>
    )
}
export default Car;