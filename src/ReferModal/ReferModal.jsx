// src/ReferModal/ReferModal.jsx
import React from "react";
import "./ReferModal.css";

import heroImage from "../assets/bwiti-bg.jpg.jpeg";
import giftIcon from "../assets/icon-gift.png.png";
import megaphoneIcon from "../assets/icon-megaphone.png.png";
import chatIcon from "../assets/icon-chat.png.png";
import trophyIcon from "../assets/icon-trophy.png.png";

const ReferModal = ({ onClose }) => {
  return (
    <div className="refer-modal-overlay">
      <div className="refer-modal">
        <div className="refer-modal-header">
          <div className="refer-header-left">
            <div className="refer-header-icon">
              <img src={giftIcon} alt="" />
            </div>
            <span className="refer-header-text">Refer and earn</span>
          </div>

          <button className="refer-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="refer-body-card">
          <div
            className="refer-hero"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="refer-hero-overlay">
              <div className="refer-hero-content">
                <div className="refer-logo-text">BWITI HOUSE</div>

                <h2 className="refer-title">Refer Bwiti House</h2>

                <p className="refer-subtitle">
                  Get 5% of your referal basket and he get $100 discount for him
                </p>

                <button className="refer-cta-btn">Refer Bwiti House</button>
              </div>
            </div>
          </div>
          <div className="refer-how">
            <h3 className="refer-how-title">How it works ?</h3>
            <div className="refer-step">
              <div className="refer-step-icon-wrapper">
                <img src={megaphoneIcon} alt="" className="refer-step-icon-img" />
              </div>
              <div className="refer-step-text">
                <p className="refer-step-title">You refer someone Bwiti</p>
                <p className="refer-step-sub">Explain the benefits of Bwiti</p>
              </div>
            </div>
            <div className="refer-step">
              <div className="refer-step-icon-wrapper">
                <img src={chatIcon} alt="" className="refer-step-icon-img" />
              </div>
              <div className="refer-step-text">
                <p className="refer-step-title">
                  This person mention that you refer her
                </p>
                <p className="refer-step-sub">
                  When purchasing online a Bwiti service
                </p>
              </div>
            </div>
            <div className="refer-step">
              <div className="refer-step-icon-wrapper">
                <img src={trophyIcon} alt="" className="refer-step-icon-img" />
              </div>
              <div className="refer-step-text">
                <p className="refer-step-title">
                  He get $100 discount and you get 5% of the total of his basket in your balance
                </p>
                <p className="refer-step-sub">
                  When purchasing online a Bwiti service
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ReferModal;
