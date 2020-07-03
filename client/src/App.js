import React, { Component } from 'react';
import CommentForm from './components/commentForm';
import CommentList from './components/CommentList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  
  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment)
      };
    });
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <CommentForm handleAddComment={this.handleAddComment} />
              <CommentList comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;