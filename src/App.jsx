import React from 'react';
import PasswordField from './components/PasswordField';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
    return (
        <div className="bg-gradient-to-b from-[#14131B] to-[#08070B] min-h-screen text-[#E6E5EA] flex items-center">
            <div className="flex flex-col gap-[16px] items-center w-[343px] mx-auto">
                <p className="text-[#817D92] text-[16px]">Password Generator</p>
                <PasswordField />
                <PasswordGenerator />
            </div>
        </div>
    );
};

export default App;
