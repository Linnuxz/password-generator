import React, { useEffect, useState } from 'react';
import tick from '../assets/tick.svg';

const CheckBoxes = () => {
    const [checkBoxes, setCheckBoxes] = useState({
        upperCase: false,
        lowerCase: false,
        numbers: false,
        symbols: false,
    });

    const handleCheckBoxChange = (e) => {
        const { name, checked } = e.target;
        setCheckBoxes({
            ...checkBoxes,
            [name]: checked,
        });
    };

    // useEffect(() => {
    //     console.log('Updated CheckBoxes state:', checkBoxes);
    // }, [checkBoxes]);

    return (
        <div className="flex flex-col gap-[17px]">
            <label className="flex gap-[20px]">
                <input
                    type="checkbox"
                    name="upperCase"
                    checked={checkBoxes.upperCase}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative"
                />
                {checkBoxes.upperCase && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] leading-normal text-[#E6E5EA]">
                    Include Uppercase Letters
                </p>
            </label>

            <label className="flex gap-[20px]">
                <input
                    type="checkbox"
                    name="lowerCase"
                    checked={checkBoxes.lowerCase}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative"
                />
                {checkBoxes.lowerCase && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] leading-normal text-[#E6E5EA]">
                    Include Lowercase Letters
                </p>
            </label>
            <label className="flex gap-[20px]">
                <input
                    type="checkbox"
                    name="numbers"
                    checked={checkBoxes.numbers}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative"
                />
                {checkBoxes.numbers && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] leading-normal text-[#E6E5EA]">
                    Include Numbers
                </p>
            </label>
            <label className="flex gap-[20px]">
                <input
                    type="checkbox"
                    name="symbols"
                    checked={checkBoxes.symbols}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative"
                />
                {checkBoxes.symbols && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] leading-normal text-[#E6E5EA]">
                    Include Symbols
                </p>
            </label>
        </div>
    );
};

export default CheckBoxes;
