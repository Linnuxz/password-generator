import React, { useState } from 'react';
import copyLogo from '../assets/copyLogo.svg';
import whiteCopyLogo from '../assets/whiteCopyLogo.svg';

const PasswordField = ({ passwd }) => {
    const [showCopied, setShowCopied] = useState(false);
    const [showGreenLogo, setShowGreenLogo] = useState(true);

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(passwd ? passwd : 'PTx1f5DaFX');
        setShowCopied(true);
        setShowGreenLogo(false);
        setTimeout(() => {
            setShowCopied(false);
            setShowGreenLogo(true);
        }, 2000);
    };

    return (
        <div className="w-full h-[64px] md:h-[80px] bg-[#24232C] flex items-center justify-between p-[16px] md:p-[32px]">
            <p className={`text-[24px] md:text-[32px] ${passwd === '' ? 'opacity-25' : ''}`}>
                {passwd ? passwd : 'PTx1f5DaFX'}
            </p>
            <button className="relative">
                {showCopied && (
                    <div className="absolute z-40 rounded-md top-[-2px] left-[-80px] text-[18px] flex justify-center  w-[70px]">
                        <p className="text-[#A4FFAF]">COPIED</p>
                    </div>
                )}
                <img
                    src={copyLogo}
                    alt="copyToClipboard"
                    onClick={() => copyToClipBoard()}
                    className={`w-[17px] h-[20px] md:w-[21px] md:h-[24px] ${
                        showGreenLogo ? 'block' : 'hidden'
                    }`}
                />
                <img
                    src={whiteCopyLogo}
                    alt="copyLogo"
                    className={`w-[17px] h-[20px] md:w-[21px] md:h-[24px] ${
                        !showGreenLogo ? 'block' : 'hidden'
                    }`}
                />
            </button>
        </div>
    );
};

export default PasswordField;
