import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../components/Nav";
import PlansPage from "../pages/PlansPage";

import "../css/ProfilePage.css";

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profilepage">
      <Nav />
      <div className="profilepage__body">
        <h1>Edit Profile</h1>
        <div className="profilepage__info">
          <img
            className="profilpage__avatar"
            src="https://img.pngio.com/no-avatar-png-transparent-png-download-for-free-3856300-trzcacak-png-avatar-920_954.png"
            alt=""
          />
          <div className="profilepage__details">
            <h2>{user.email}</h2>
            <div className="profilepage__plans">
              <h3>Plans</h3>
              <PlansPage />

              <button
                onClick={() => auth.signOut()}
                className="profilepage__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
