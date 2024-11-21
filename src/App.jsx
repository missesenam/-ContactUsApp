import React from "react";
import NavBar from "./components/NavBar";
import ContactHeader from "./components/ContactHeader";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <ContactHeader />
        <Contact />
      </div>
    </>
  );
};

export default App;
