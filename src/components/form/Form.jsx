import React from "react";
import Input from "../input";
import "./style.css";

const Form = ({make, year, model, fuelType, trim, colors, onChange}) => {
  return (
    <div>
      <div className="flex-input">
        <span className="text-input">Make:</span>
        <Input placeholder={"Please enter the make"} name="make" value={make} onChange={onChange}/>
      </div>
      <div className="flex-input">
        <span className="text-input">Year:</span>
        <Input placeholder={"Please enter the year"} name="year" value={year} onChange={onChange}/>
      </div>
      <div className="flex-input">
        <span className="text-input">Model:</span>
        <Input placeholder={"Please enter the model"} name="model" value={model} onChange={onChange}/>
      </div>
      <div className="flex-input">
        <span className="text-input">FuelType:</span>
        <Input placeholder={"Please enter the FuelType"} name="fuelType" value={fuelType} onChange={onChange}/>
      </div>
      <div className="flex-input">
        <span className="text-input">Trim:</span>
        <Input placeholder={"Please enter the Trim"} name="trim" value={trim} onChange={onChange}/>
      </div>
      <div className="flex-input">
        <span className="text-input">Colors:</span>
        <Input placeholder={"Please enter the colors"} name="colors" value={colors} onChange={onChange}/>
      </div>
    </div>
  );
};

export default Form;
