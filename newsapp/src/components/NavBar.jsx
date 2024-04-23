import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#home">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">General</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Science</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sport</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Technology</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
            </>
        );
    }
}

export default NavBar;