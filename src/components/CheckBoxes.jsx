import React, { useEffect, useState } from 'react';
import tick from '../assets/tick.svg';

const CheckBoxes = ({ onObjectChange, onAtLeastOneTicked }) => {
    const [checkBoxes, setCheckBoxes] = useState({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: false,
    });

    const handleCheckBoxChange = (e) => {
        const { name, checked } = e.target;
        const updatedObj = {
            ...checkBoxes,
            [name]: checked,
        };
        setCheckBoxes(updatedObj);
        onObjectChange(updatedObj);
    };

    useEffect(() => {
        const isChecked = Object.values(checkBoxes).some((value) => value);
        onAtLeastOneTicked(isChecked);
    }, [checkBoxes]);

    return (
        <div className="flex flex-col gap-[17px]">
            <label className="flex gap-[20px] items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="upperCase"
                    checked={checkBoxes.upperCase}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative cursor-pointer hover:border-[#A4FFAF]"
                />
                {checkBoxes.upperCase && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] md:text-[18px] leading-normal text-[#E6E5EA]">
                    Include Uppercase Letters
                </p>
            </label>

            <label className="flex gap-[20px] items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="lowerCase"
                    checked={checkBoxes.lowerCase}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative cursor-pointer hover:border-[#A4FFAF]"
                />
                {checkBoxes.lowerCase && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] md:text-[18px] leading-normal text-[#E6E5EA]">
                    Include Lowercase Letters
                </p>
            </label>
            <label className="flex gap-[20px] items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="numbers"
                    checked={checkBoxes.numbers}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative cursor-pointer hover:border-[#A4FFAF]"
                />
                {checkBoxes.numbers && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] md:text-[18px] leading-normal text-[#E6E5EA]">
                    Include Numbers
                </p>
            </label>
            <label className="flex gap-[20px] items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="symbols"
                    checked={checkBoxes.symbols}
                    onChange={handleCheckBoxChange}
                    className="w-[20px] h-[20px] appearance-none border-2 relative cursor-pointer hover:border-[#A4FFAF]"
                />
                {checkBoxes.symbols && (
                    <img src={tick} className="w-[20px] h-[20px] absolute" />
                )}
                <p className="text-[16px] md:text-[18px] leading-normal text-[#E6E5EA]">
                    Include Symbols
                </p>
            </label>
        </div>
    );
};

export default CheckBoxes;
