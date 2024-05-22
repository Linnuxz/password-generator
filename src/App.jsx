import React, { useState } from 'react';
import PasswordField from './components/PasswordField';
import PasswordGenerator from './components/PasswordGenerator';
import MessageBox from './components/MessageBox';

const App = () => {
    const [password, setPassword] = useState('');
    const [showMessageBox, setShowMessageBox] = useState(false);

    const handleMessageBoxChange = (message) => {
        setShowMessageBox(message);
    };

    const handlePasswordChange = (passwd) => {
        setPassword(passwd);
    };

    return (
        <div className="bg-gradient-to-b from-[#14131B] to-[#08070B] min-h-screen text-[#E6E5EA] flex items-center">
            <MessageBox showMessageBox={showMessageBox}/>
            <div className={`flex flex-col gap-[16px] items-center w-[343px] md:w-[540px] mx-auto ${showMessageBox ? 'opacity-50': ''}`}>
                <p className="text-[#817D92] text-[16px] md:text-[24px] md:mb-[15px]">Password Generator</p>
                <PasswordField passwd={password} />
                <PasswordGenerator
                    onPasswdChange={handlePasswordChange}
                    onShowMessageBox={handleMessageBoxChange}
                />
            </div>
        </div>
    );
};

export default App;
