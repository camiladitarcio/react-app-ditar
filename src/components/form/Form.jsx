import React from 'react';
import Input from '../input';
import './style.css';

export default ({model, colors, fueltype, trim, year, make, onChange, onBlur}) => {
    return (
        <form>
            <Input label="Model" placeholder="Enter model" value={model}  onChange={onChange} name={'model'} onBlur={onBlur}/>
            <Input label="Trim" placeholder="Enter trim" value={trim} onChange={onChange} name={'trim'} onBlur={onBlur}/>
            <Input label="Colors" placeholder="Enter car color" value={colors} onChange={onChange} name={'colors'} onBlur={onBlur}/>
            <Input label="Year" placeholder="Enter year" value={year} onChange={onChange} name={'year'} onBlur={onBlur} />
            <Input label="Make" placeholder="Enter make" value={make} onChange={onChange} name={'make'} onBlur={onBlur}/>
            <Input label="Fueltype" placeholder="Enter fueltype" value={fueltype} onChange={onChange} name={'fueltype'} onBlur={onBlur}/>
        </form>
    )
};