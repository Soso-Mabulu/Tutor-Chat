import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import logoImage  from "Images/site-logo.png"; // Import the logo image
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
    // Define a style object for default screens
    const defaultStyle = {
      height: "100%", // Default height for larger screens
    };
  
    // Define a style object for screens with a maximum width of 768 pixels
    const smallerScreenStyle = {
      height: "80%", // Adjust the height for smaller screens
    };

  // Determine the appropriate style based on the screen width
  const style = window.innerWidth <= 768 ? smallerScreenStyle : defaultStyle;

  
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="Index.html">
              {/* Logo image */}
              <Image src={logoImage} alt="Your Logo" width={100} height={50} />
            </a>
          </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Add your Signup and Login links here */}
            <li className="nav-item">
              <a className="nav-link" href="Index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Auth.html">
                Chat
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Chat Section */}
    <div style={{ height: "100vh" }}>

    <button
      style={{
        position: "fixed",
        bottom: "1%",
        left: "1%",
        fontWeight: "bold",
        fontSize: "1em",
        transform: "translateY(-50%)",
        marginLeft: "1%",
        background: "linear-gradient(45deg, #FF0000, #87CEEB)", // Initial gradient
        color: "#fff",
        padding: "10px 5%",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      onClick={() => signOut(auth)}
      onMouseOver={(e) => (e.currentTarget.style.background = "linear-gradient(45deg, #FF6347, #00BFFF)")} // Gradient on hover
      onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(45deg, #FF0000, #87CEEB)")} // Initial gradient on mouse out
    >
      Sign Out
    </button>

      <PrettyChatWindow
        projectId={process.env.NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID || ""}
        username={props.user.email || ""}
        secret={props.user.uid}
        style={style}
      />
    </div>
  </>
  );
}
