import React, { Component, Fragment } from 'react';
import { useHistory } from "react-router"
const HomeButton = () => {
    let history = useHistory()
}


class Logoutbtn extends React.Component {
    logout() {
        localStorage.clear();
        this.props.history.push("/");
    }

    state = {
        user: localStorage.user
    }

    render() {
        return (
            <div>
            <button className="btn btn-outline-success mx-2">{this.state.user}</button>
            <button className="btn btn-outline-success" onClick={this.logout}>Logout</button>
            </div>
        )
    }

}


export default Logoutbtn