import React, { Component, Fragment } from 'react'
import axios from "axios";
class Post extends Component {
    state = {
        details: [],
        user: "",
        post: "",
        time_stamp: "",
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = () => {


        axios
            .post("http://localhost:8000/posts/", {
                user_name: this.state.user,
                post_desc: this.state.post,
            })
            .then((res) => {
                this.setState({
                    user: "",
                    post: "",
                });
            })
            .catch((err) => { });
    };
    render() {
        return (
            <Fragment>

                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                id="basic-addon1">
                                {" "}
								Your Name{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control"
                            placeholder="Enter your Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.user} name="user"
                            onChange={this.handleInput} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Your Message
							</span>
                        </div>
                        <textarea className="form-control "
                            aria-label="With textarea"
                            placeholder="Tell us what you think of ....."
                            value={this.state.post} name="post"
                            onChange={this.handleInput}>
                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-success">
                        Submit
					</button>
                </form>

                <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                    }}
                />
            </Fragment>
        )
    }
}

export default Post
