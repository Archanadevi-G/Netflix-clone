import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Navbar from "../../components/Navbar/Navbar";
import avatar from "../../assets/avatar.png";

const Profile = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-body">
        <h1>Profile Details</h1>
        <div className="profile-info">
          <img src={avatar} alt="" />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <button onClick={logout} className="profile-signOut">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
