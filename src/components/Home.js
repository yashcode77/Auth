import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Routes, Route } from "react-router-dom";

// import Navbar from 'src\components\Navbar.js';
// import Hero from 'src\components\Hero.js\Hero';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      {/* <Navbar /> */}
      {/* <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Hero />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
      </Routes> */}
      
    </>
  );
};

export default Home;
