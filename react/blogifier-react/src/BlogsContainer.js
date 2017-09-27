import React, { Component } from 'react';

export default class BlogsContainer extends Component {
  constructor(props) {
    super(props)

    this.api = 'http://localhost:8228'

    this.state = {
      posts: null,
      error: null
    }
  }

  componentDidMount() {
    fetch(this.api + "/blogifier/api/public/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err })
      })
  }

  render() {
    return (
      <div>
        {this.state.posts
          ? // render post lists page - todo extract
          <div>
            <h2> {this.state.posts.pageTitle} </h2>
          </div>

          : <p>Loading blogs...</p>}
      </div>
    )
  }
}