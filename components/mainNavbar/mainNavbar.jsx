"use client";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch } from 'react-redux';
import { loginOut } from '@/redux/action/api';
import { signOut } from 'next-auth/react';
import { FaCanadianMapleLeaf } from 'react-icons/fa6';


const MainNavbar = ({ pageHandler }) => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(loginOut())
    signOut("google")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top position-relative">
      <a className="navbar-brand" href="/">
        <FaCanadianMapleLeaf/> <span className="ml-1 fw-bold">Blogs</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {localStorage.getItem("token") ? 
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hubRoot/addTopic">
              ToDo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hubRoot/feedback">
            Feedback
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex ml-auto">
          <input className="form-control mr-sm-2 mx-lg-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 py-1 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <button className="btn btn-outline-secondary my-2 py-1 ml-2 my-sm-0" onClick={() => logouthandler()}>
          logOut
        </button>
      </div>
        :
        <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
         <ul className="navbar-nav">
          <li>
            <button className="nav-link" onClick={() => pageHandler("Login")}>
              <span className="btn btn-outline-secondary my-2 py-1 ml-2 my-sm-0">LogIn</span>
            </button>
          </li>
          <li>
            <button className="nav-link" href="/hubRoot/addTopic" onClick={() => pageHandler("Signup")}>
              <span className="btn btn-outline-secondary my-2 py-1 ml-2 my-sm-0">SignUp</span>
            </button>
          </li>

        </ul>
       
      </div>
       }
    </nav>
  );
};

export default MainNavbar;
