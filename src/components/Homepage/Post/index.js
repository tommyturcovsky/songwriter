import React, { Component } from "react";
import "./Post.css";
import CreatePost from "./CreatePost";

class Post extends React.Component {
    render() {
      return (
        <article className="post-framework">
            <CreatePost/>
          <div>
            {/* This will be the feed section */}
          </div>
        </article>
      );
    }
}
export default Post;