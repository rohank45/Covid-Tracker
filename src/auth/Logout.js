import React from "react";
import { GoogleLogout } from "react-google-login";
import { toast } from "react-toastify";

const Logout = () => {
  const ClientId =
    "166263569789-u63944dvat68f91p8d3rtrsn8tvh0cp9.apps.googleusercontent.com";

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
