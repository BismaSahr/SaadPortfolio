import React from 'react';
import './CircularBadge.css';
import logo from '../../assets/favicon.svg';

const CircularBadge = () => {
    // 32 characters exactly for nice spacing:
    const text = "PROJECT  HIRE ME FOR YOUR NEXT  ";
    const chars = text.split("");


    const handleTalkClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div onClick={handleTalkClick} className="circular-badge-container d-none d-lg-flex ">
            <div className="circular-badge">
                <div className="badge-text-wrapper">
                    {chars.map((char, i) => (
                        <span
                            key={i}
                            style={{
                                transform: `translate(-50%, -50%) rotate(${i * (360 / chars.length)}deg) translateY(-60px)`
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>

                <div className="badge-center-icon">
                    <img src={logo} alt="logo" className="w-100 h-100 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default CircularBadge;
