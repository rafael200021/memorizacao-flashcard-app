import Navbar from "components/Navbar";
import { challenge, detail, home, profile, signin, signup } from "Helpers/constants";
import Challenge from "pages/Challenge";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Profile from "pages/Profile";
import SignUp from "pages/SignUp";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={signin} element={<SignIn />} />
        <Route path={signup} element={<SignUp />} />
        <Route path={home} element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path={profile} element={<Profile />} />
          <Route path={detail} element={<Detail />} />
          <Route path={`:id/${challenge}`} element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
