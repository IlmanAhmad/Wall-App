import axios from 'axios';
import React, { Component, Fragment } from 'react';
import "./home.css";
import Post from "./post";

function Postbox(props) {
  const isLoggedIn = localStorage.isLoggedIn;
  if (isLoggedIn) {
    return <Post />;
  }
  return <h1>Login to Post Your Comment</h1>;
}


class Home extends React.Component {
  state = {
    details: []
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/postread/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => { });
  }

  renderSwitch = (param) => {
    switch (param + 1) {
      case 1:
        return "primary ";
      case 2:
        return "secondary";
      case 3:
        return "success";
      case 4:
        return "danger";
      case 5:
        return "warning";
      case 6:
        return "info";
      default:
        return "yellow";
    }
  };

  render() {
    return (
      <div className="container mt-2 jumbotron posts" id="mainform">
        <Postbox isLoggedIn={false} />
        {this.state.details.map((detail, id) => (
          <div key={id}>
            <div className="card shadow-lg">
              <div className={"bg-" + this.renderSwitch(id % 6) +
                " card-header"}>post {id + 1}</div>
              <div className="card-body">
                <blockquote className={"text-" + this.renderSwitch(id % 6) +
                  " blockquote mb-0"}>
                  <h1> {detail.post_desc} </h1>
                  <footer className="blockquote-footer">
                    {" "}
                    <cite title="Source Title">{detail.user_name} {detail.time_stamp}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <span className="border border-primary "></span>
          </div>
        ))}
      </div>
    );
  }
}



export default Home;