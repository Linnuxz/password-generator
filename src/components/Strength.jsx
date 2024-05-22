import React, { useEffect, useState } from 'react';

const Strength = ({ length, checkBoxes }) => {
    const [passwordStrength, setPasswordStrength] = useState(3);
    const [color, setColor] = useState('#F8CD65');
    const [strWord, setStrWord] = useState('MEDIUM');

    useEffect(() => {
        if (passwordStrength === 1) {
            setColor('bg-[#F64A4A]');
            setStrWord('TOO WEAK!');
        } else if (passwordStrength === 2) {
            setColor('bg-[#FB7C58]');
            setStrWord('WEAK');
        } else if (passwordStrength === 3) {
            setColor('bg-[#F8CD65]');
            setStrWord('MEDIUM');
        } else {
            setColor('bg-[#A4FFAF]');
            setStrWord('STRONG');
        }
    }, [passwordStrength]);

    const getPasswordStrength = () => {
        let strength = 0;
        if (length < 8) {
            setPasswordStrength(1);
            return;
        } else if (length >= 10 && length <= 12) strength += 1;
        else if (length > 12) strength += 2;

        if (checkBoxes.upperCase) strength += 2;
        if (checkBoxes.lowerCase) strength += 1;
        if (checkBoxes.numbers) strength += 1;
        if (checkBoxes.symbols) strength += 1;

        if (strength <= 2) setPasswordStrength(1);
        else if (strength <= 4) setPasswordStrength(2);
        else if (strength <= 6) setPasswordStrength(3);
        else setPasswordStrength(4);
    };

    useEffect(() => {
        getPasswordStrength();
    }, [length, checkBoxes]);

    return (
        <div className="bg-[#18171F] w-[311px] md:w-[476px] md:h-[72px] mx-auto h-[56px] flex justify-between items-center px-[16px]">
            <p className="text-[#817D92] text-[16px] md:text-[18px]">
                STRENGTH
            </p>
            <div className="flex gap-[15px] items-center">
                <p className="text-[18px] md:text-[24px] text-[#E6E5EA]">
                    {strWord}
                </p>
                <div className="flex gap-[7.5px]">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-[10px] h-[28px] ${
                                passwordStrength > index
                                    ? color
                                    : 'border-[#E6E5EA] border-2'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Strength;
