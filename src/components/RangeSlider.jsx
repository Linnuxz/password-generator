import React from 'react';

const RangeSlider = ({value, setValue}) => {

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input
                type="range"
                min={1}
                max={20}
                value={value}
                onChange={handleChange}
                className="appearance-none w-full h-[8px]"
            />
        </div>
    );
};

export default RangeSlider;
