import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const posts = data.map(postData => 
          new Post(postData.userId, postData.id, postData.title, postData.body)
        );
        this.setState({ posts: posts });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        alert('Error loading posts: ' + error.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by componentDidCatch:', error, errorInfo);
    alert('An error occurred: ' + error.message);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
