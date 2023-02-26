// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'

function App() {
  const [toggle, settoggle] = useState("white")
  const [alert, setalert] = useState(null)
  const setalrt = (type, message) => {
    setalert({ type: type, message: message })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const togglemode = () => {
    if (toggle === "white") {
      settoggle("black")
      document.body.style.backgroundColor = "rgb(23 44 87)"
      document.body.style.color = "white"
      setalrt("success", "Dark Mode Enable")
    }
    else {
      settoggle("white")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setalrt("success", "Light Mode Enable")
    }
  }

  return (
    <>
      <Navbar title={"TextUtils"} color={toggle} mode={togglemode} />
      <Alert alert={alert} />
      <Textarea alrt={setalrt} />
    </>
  );
}

export default App;
