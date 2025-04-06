"use client"
import React from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import axios from "axios"

export default function RegistrationForm() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()


    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('',{name,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        
    }


  

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} >      
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
               
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-3">
              Register
            </button>
            </form>
            <div className="text-center mb-3">Already Have an Account</div>
            <Link to="/login" className="btn btn-outline-secondary w-100">
              Login
            </Link>
          
        </div>
      </div>
    </div>
  )
}

