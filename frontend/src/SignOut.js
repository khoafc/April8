// Import the functions you need from the SDKs you need
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function SignOut() {
  const history = useNavigate();

  const signOutGoogle = () => {
    auth.signOut().then((result) => {
      console.log(result);
      console.log("khoa dang pham");
      localStorage.clear();
      history("/");
    });
  };

  return (
    <div>
      <button onClick={signOutGoogle}>Sign Out</button>
      {/* <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <h1>{localStorage.getItem("profilePic")}</h1> */}
    </div>
  );
}

export default SignOut;
