import React, { useEffect, useState } from 'react';
import RangeSlider from './RangeSlider';
import CheckBoxes from './CheckBoxes';

const PasswordGenerator = () => {
    const [length, setLength] = useState(10);

    return (
        <div className="bg-[#24232C] w-full">
            <div className="flex flex-col justify-between p-[20px]">
                <div className="flex justify-between">
                    <p className="text-[16px]">Character Length</p>
                    <p className="text-[24px] text-[#A4FFAF]">{length}</p>
                </div>
                <div className="relative w-full mt-[13px] flex flex-col gap-[32px]">
                    <RangeSlider value={length} setValue={setLength} />
                    <CheckBoxes />
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
