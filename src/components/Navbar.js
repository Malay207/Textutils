import React from 'react'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg  bg-${props.color}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand fw-bold text-${props.color === "white" ? "black" : "white"}`} href="#">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.color === "white" ? "black" : "white"}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.color === "white" ? "black" : "white"}`} href="#">About</a>
                            </li>
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.mode} />
                            <label className={`form-check-label text-${props.color === "white" ? "black" : "white"}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar