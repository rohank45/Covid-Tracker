import React from "react";
import { GoogleLogin } from "react-google-login";
import { toast } from "react-toastify";

const Login = () => {
  const ClientId =
    "166263569789-u63944dvat68f91p8d3rtrsn8tvh0cp9.apps.googleusercontent.com";

  const onSuccess = (res) => {
    // console.log(res.accessToken);
    // console.log("Profile", res.profileObj);

    localStorage.setItem("login", "true");

    toast.success("Login success!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });

    window.location.reload(false);
  };

  const onFailure = () => {
    return toast.error("Login failed!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <>
      <GoogleLogin
        clientId={ClientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default Login;
