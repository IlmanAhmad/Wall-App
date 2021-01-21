import React, { Component } from 'react'
import { useHistory } from "react-router"
import axios from 'axios';
import "./login.css";


const HomeButton = () => {
    let history = useHistory()
}


class Loginform extends Component {
    state = {
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = () => {

        axios
            .post("http://localhost:8000/token/obtain/", {
                email: this.state.email,
                password: this.state.password,
            })
            .then((res) => {
                
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                localStorage.setItem('user', res.data.user);
                localStorage.setItem('isLoggedIn', true);
                axios.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
            }).catch((err) => { });

        // this.props.history.push("/")
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
                        <label for="password" className="visually-hidden">Password</label>
                        <input type="password" className="mt-2 form-control" placeholder="Enter desired Password" value={this.state.password} name="password" onChange={this.handleInput} required />
                    </div>
                    <button className="mt-2  w-100 btn btn-lg btn-success">Login</button>
                </form>

            </div>
        )
    }
}

export default Loginform;