import React from "react";
import { GoogleLogout } from "react-google-login";
import { toast } from "react-toastify";

const Logout = () => {
  const ClientId = "";

  const onSuccess = () => {
    localStorage.removeItem("login");
    toast.success("Logout success!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });

    window.location.reload(false);
  };

  return (
    <>
      <GoogleLogout
        clientId={ClientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </>
  );
};

export default Logout;
