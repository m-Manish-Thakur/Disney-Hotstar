import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserAccount = () => {
  const { user, token } = useSelector((store) => store.user);

  return user ? (
    <div>
      <h1 className="text-white">User Account: {user.username}</h1>
    </div>
  ) : (
    <div className="w-full height-full flex justify-center items-center">
      <img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
    </div>
  );
};

export default UserAccount;
