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

    render() {
        return (
            <button className="btn btn-outline-success" onClick={this.logout}>Logout</button>
        )
    }

}


export default Logoutbtn