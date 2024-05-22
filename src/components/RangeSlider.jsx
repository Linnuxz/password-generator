import React from 'react';

const RangeSlider = ({ value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const progressBarWidth = `${(value / 20) * 100}%`;

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
            <div
                style={{ width: progressBarWidth }}
                className="h-[8px] absolute top-[10px] left-0 bg-[#A4FFAF]"
                id="ProgressBar"
            ></div>
        </div>
    );
};

export default RangeSlider;
