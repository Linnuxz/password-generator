import React, { useEffect, useState } from 'react';
import RangeSlider from './RangeSlider';
import CheckBoxes from './CheckBoxes';
import Arrow from '../assets/arrow.svg';

const PasswordGenerator = ({ onPasswdChange }) => {
    const [length, setLength] = useState(10);

    const [checkBoxes, setCheckBoxes] = useState({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: false,
    });

    const handleBoxesChange = (newObj) => {
        setCheckBoxes(newObj);
    };

    const generate = () => {
        const chars = {
            upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowerCase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+{}[]|:;<>,.?/~',
        };

        let allowedCharacters = '';

        for (const [key, value] of Object.entries(checkBoxes)) {
            if (value) {
                allowedCharacters += chars[key];
            }
        }
        let passwd = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(
                Math.random() * allowedCharacters.length
            );
            passwd += allowedCharacters[randomIndex];
        }
        onPasswdChange(passwd);
    };

    return (
        <div className="bg-[#24232C] w-full">
            <div className="flex flex-col justify-between p-[20px]">
                <div className="flex justify-between">
                    <p className="text-[16px]">Character Length</p>
                    <p className="text-[24px] text-[#A4FFAF]">{length}</p>
                </div>
                <div className="relative w-full mt-[13px] flex flex-col gap-[32px]">
                    <RangeSlider value={length} setValue={setLength} />
                    <CheckBoxes onObjectChange={handleBoxesChange} />
                </div>
                <div>
                    <p>STRENGTH</p>
                </div>
                <div className="mt-[40px] w-[311px] h-[56px] bg-[#A4FFAF] text-[#24232C] text-[16px] relative">
                    <button
                        onClick={generate}
                        className="w-full h-full flex justify-center items-center gap-[16px]"
                    >
                        GENERATE <img src={Arrow} alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
