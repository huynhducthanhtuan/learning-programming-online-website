import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignoutModal from "../SignoutModal";
import "./ProfileModal.css";

function ProfileModal({ setOpenProfileModal }) {
  const [openSignoutModal, setOpenSignoutModal] = useState(false);

  return (
    <div className="modal-container">
      <div className="modal-body-part">
        <Link to="/profile" className="modal-body-item">
          Profile
        </Link>
        <Link to="/change-password" className="modal-body-item">
          Change Password
        </Link>
        <div
          className="modal-body-item"
          onClick={(e) => setOpenSignoutModal(!openSignoutModal)}
        >
          Sign out
        </div>
      </div>

      {openSignoutModal && (
        <SignoutModal
          body="Are you sure you want to sign out?"
          setOpenSignoutModal={setOpenSignoutModal}
          setOpenProfileModal={setOpenProfileModal}
        />
      )}
    </div>
  );
}

export default ProfileModal;
