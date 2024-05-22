import React from 'react';

const MessageBox = ({ showMessageBox }) => {
    return (
        <div
            className={`${
                showMessageBox ? 'block' : 'hidden'
            } fixed top-1/2 left-1/2  -translate-x-1/2 z-10 bg-[#24232C] border-[#A4FFAF] border-2 text-white p-4 shadow-lg rounded-lg`}
        >
            <h2>Tick at least one of the boxes!</h2>
        </div>
    );
};

export default MessageBox;
