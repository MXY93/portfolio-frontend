import React from 'react';
import profilePic from '../assets/profile-pic.webp';
import profile3DPic from '../assets/profile-3D.webp';
import '../styles/presentation.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-flip">
        <img src={profilePic} alt="Profile" loading="lazy" className="profile-pic front" />
        <img src={profile3DPic} alt="AI generated profile" loading="lazy" className="profile-pic back" />
      </div>
    </div>
  );
};

export default Profile;
