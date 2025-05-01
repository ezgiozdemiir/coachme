import React from "react";
import profilePicture from "../../assets/profile.jpg";
import BottomSheet from "../../components/bottom-sheet/BottomSheet";
import "./Profile.scss";

export default function Profile() {
  const userName = "Ezgi Özdemir";
  const role = "Sınav Koçu";
  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__info--picture">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="profile__info--summary">
          <p>Merhaba {userName}!</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}
