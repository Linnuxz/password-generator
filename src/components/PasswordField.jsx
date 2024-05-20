import React, { useState } from 'react';
import copyLogo from '../assets/copyLogo.svg';

const PasswordField = ({ passwd }) => {
    const [showCopied, setShowCopied] = useState(false);

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(passwd ? passwd : 'PTx1f5DaFX');
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false);
        }, 2000);
    };

    return (
        <div className="w-[343px] h-[64px] bg-[#24232C] flex items-center justify-between p-[16px]">
            <p className="text-[24px]">{passwd ? passwd : 'PTx1f5DaFX'}</p>
            <button className="relative">
                {showCopied && (
                    <div className="absolute top-[-35px] right-[-24px] bg-[#A4FFAF] rounded-md text-[15px] flex justify-center text-black w-[70px]">
                        Copied!
                    </div>
                )}
                <img
                    src={copyLogo}
                    alt="copyToClipboard"
                    onClick={() => copyToClipBoard()}
                />
            </button>
        </div>
    );
};

export default PasswordField;
