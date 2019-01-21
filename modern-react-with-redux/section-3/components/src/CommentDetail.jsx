import React from 'react';

const CommentDetail = (props) => {
  return(
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail
