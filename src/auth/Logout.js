import React from "react";
import { GoogleLogout } from "react-google-login";
import { toast } from "react-toastify";

const Logout = () => {
  const ClientId =
    "529553037805-e1bgigerv4b54jl07ldm18egh8q36t17.apps.googleusercontent.com";

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
