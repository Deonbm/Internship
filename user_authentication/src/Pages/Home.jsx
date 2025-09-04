import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="h-screen grid grid-cols-2 relative">
        {/* Left side (white with yellow accent on right edge) */}
        <div className="bg-white relative">
          <div className="absolute top-0 right-0 h-full w-2 bg-yellow-400"></div>
        </div>

        {/* Right side (yellow with white accent on bottom) */}
        <div className="bg-yellow-400 relative">
          <div className="absolute bottom-0 left-0 h-1/3 w-full bg-white rounded-tl-3xl"></div>
        </div>

        {/* ✅ Centered Div with Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-2xl px-8 py-6 text-center w-96 h-80">
          <div className="flex">
          <h1 className=" font-bold text-gray-800" style={{"fontFamily":"Raleway"}}>Welcome to My</h1><span className="ps-2" style={{"fontFamily":"Pacifico"}}>App</span>
          </div>
            
            <div className="flex items-center justify-center h-full">
                <div>
                    <h2 style={{"fontFamily":"Bebas Neue","padding":"20px"}}>Please login OR Register to continue</h2>
                    <Link to={'/login'}><button class="rounded-full p-3 shadow-2xl bg-amber-300" style={{"fontFamily":"Anton"}} >Sign In/Register</button></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
