import axios from 'axios';
import React, { Component, Fragment } from 'react';
import "./login.css"
import { useHistory } from "react-router"


const HomeButton = () => {
    let history = useHistory()
}

class Signup extends React.Component {

    state = {
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = () => {
        axios
            .post("http://localhost:8000/api/register/", {
                email: this.state.email,
                name: this.state.user,
                password: this.state.password,
            }).catch((err) => { });
        this.props.history.push("/login")
        alert('You have signed up successfully');
    };



    render() {
        return (
            <div className="container mt-2" id="mainform">

                <form className="formitems" id="formitems" onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <label for="email" className="visually-hidden">Email</label>
                        <input type="email" className="mt-2 form-control" placeholder="Enter Your Email" value={this.state.email} name="email" onChange={this.handleInput} required />
                    </div>
                    <div className="input-group mb-3">
                        <label for="username" className="visually-hidden">Username</label>
                        <input type="text" className="mt-2 form-control" placeholder="Username" value={this.state.user} name="user" onChange={this.handleInput} required />
                    </div>
                    <div className="input-group mb-3">
                        <label for="password" className="visually-hidden">Password</label>
                        <input type="password" className="mt-2 form-control" placeholder="Enter desired Password" value={this.state.password} name="password" onChange={this.handleInput} required />
                    </div>
                    <button className="mt-2  w-100 btn btn-lg btn-success">Submit</button>
                </form>

            </div>
        );
    }
}


export default Signup;