import React, { useState } from 'react';
import RangeSlider from './RangeSlider';
import CheckBoxes from './CheckBoxes';
import Arrow from '../assets/arrow.svg';
import GreenArrow from '../assets/arrow-green.svg';
import Strength from './Strength';

const PasswordGenerator = ({ onPasswdChange, onShowMessageBox }) => {
    const [length, setLength] = useState(10);
    const [atLeastOneTicked, setAtLeastOneTicked] = useState(true);

    const [checkBoxes, setCheckBoxes] = useState({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: false,
    });

    const handleBoxesChange = (newObj) => {
        setCheckBoxes(newObj);
    };

    const handleIsCheckedChange = (checked) => {
        setAtLeastOneTicked(checked);
    };

    const [showFirstArrow, setShowFirstArrow] = useState(true);
    const handleHover = () => {
        setShowFirstArrow(false);
    };
    const handleMouseLeave = () => {
        setShowFirstArrow(true);
    };

    const generate = () => {
        if (!atLeastOneTicked) messageBox();
        else {
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
        }
    };

    const messageBox = () => {
        onShowMessageBox(true);
        setTimeout(() => {
            onShowMessageBox(false);
        }, 2000);
    };

    return (
        <div className="bg-[#24232C] w-full">
            <div className="flex flex-col justify-between p-[16px] md:p-[32px]">
                <div className="flex justify-between">
                    <p className="text-[16px] md:text-[18px] text-[#E6E5EA]">
                        Character Length
                    </p>
                    <p className="text-[24px] md:text-[32px] text-[#A4FFAF]">
                        {length}
                    </p>
                </div>
                <div className="relative w-full mt-[13px] flex flex-col gap-[32px]">
                    <RangeSlider value={length} setValue={setLength} />
                    <CheckBoxes
                        onObjectChange={handleBoxesChange}
                        onAtLeastOneTicked={handleIsCheckedChange}
                    />
                </div>
                <div className="mt-[32px] ">
                    <Strength length={length} checkBoxes={checkBoxes} />
                </div>
                <div className="mt-[32px] w-[311px] md:w-[476px] h-[56px] md:h-[65px] bg-[#A4FFAF] text-[#24232C] text-[16px] relative mx-auto">
                    <button
                        onClick={generate}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        className="w-full h-full flex justify-center items-center gap-[16px] text-[16px] md:text-[18px] hover:bg-[#24232C] hover:border-[#A4FFAF] hover:border-2 hover:text-[#A4FFAF] duration-[0.3s] relative"
                    >
                        GENERATE{' '}
                        <img
                            src={Arrow}
                            alt="arrow"
                            className={`${showFirstArrow ? 'block' : 'hidden'}`}
                        />
                        <img
                            src={GreenArrow}
                            alt="arrow"
                            className={`${
                                !showFirstArrow ? 'block' : 'hidden'
                            }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
