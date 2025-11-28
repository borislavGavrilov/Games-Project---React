import Catalog from "./components/catalog/Catalog";
import { Routes, Route, Link, Navigate } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import AddGame from "./components/addGame/AddGame";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import { useState } from "react";

function App() {
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  function onRegister(params) {
    const emailExists = registerUsers.some(
      (user) => user.email === params.email
    );

    if (emailExists) {
      alert("Email is already registered.");
      return;
    }
    setRegisterUsers((state) => [...state, params]);
  }

  function onLogin(params) {
    const user = registerUsers.find(
      (user) => user.email === params.email && user.password === params.password
    );

    if (!user) {
      alert("Invalid email or password.");
      return;
    }
    setLoggedUser(user);
  }

  function onLogout() {
    setLoggedUser(null);
  }

  return (
    <>
      <>
        <Header user={loggedUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:gameId/details" element={<Details />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route
            path="/register"
            element={<Register onRegister={onRegister} />}
          />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
        </Routes>

        <Footer />
      </>
    </>
  );
}

export default App;
