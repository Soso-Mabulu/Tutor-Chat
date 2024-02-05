import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import Image from 'next/image';
import logoImage  from "Images/site-logo-bg.jpg"; // Import the logo image

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="logo">
        <Image src={logoImage} alt="Your Logo" width={400} height={200}  style={{ borderRadius: '20px', boxShadow: '0 7px 8px rgba(0, 0, 0, 0.1)'}}/>
      </div>
      <br />
      <div className="textHead">Welcome tutor Chat</div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Log in with your account to continue
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button>{" "}
      <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}
