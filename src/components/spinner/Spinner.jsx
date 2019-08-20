import React from 'react';
import { MoonLoader } from 'react-spinners';
import "./style.css";

const Spinner = () => {
    return(
        <div className="spinner-container">
            <div className={"spinner"}>
                <MoonLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading
                />
            </div>
        </div>
    )
}

export default Spinner;