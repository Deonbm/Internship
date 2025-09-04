import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Index() {
  const [username, setUsername] = useState("");

    const navigate = useNavigate();
  useEffect(() => {
    // get user object from sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const User = JSON.parse(storedUser);
      setUsername(User.username); // ✅ store username
    }
  }, []);

  const Logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/"); // redirect to login/registration page
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hand-draw-orange-splash-watercolor-background_1035-19854.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}

      className="relative"
    >
                <button onClick={Logout} class="absolute right-0 rounded-lg p-3 m-4 shadow-2xl bg-amber-300 ml-auto" style={{"fontFamily":"Anton"}} >Logout</button>

      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Welcome {username || "Guest"} 👋
        </h1>
      </div>
    </div>
  );
}

export default Index;
