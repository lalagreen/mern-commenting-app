import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {
  render() {
    return (
      <section className="section">
        {
          this.props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
          })
        }
      </section>
    );
  }
}

export default CommentList;