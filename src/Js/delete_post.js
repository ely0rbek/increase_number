import React, { Component } from "react";

export default class Deleted extends React.Component {
state = {
    posts: [
    { id: 1, name: "js" },
    { id: 2, name: "c#" },
    { id: 3, name: "c++" },
    ],
};
removepost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
};
render() {
    return (
    <div className="App">
        {this.state.posts.map((post) => (
        <p key={post.id}>
            {post.name}
            <button className="danger" onClick={() => this.removepost(post.id)}>
            Delete
            </button>
        </p>
        ))}
    </div>
    );
}
}
