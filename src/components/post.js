import React, { Component } from 'react';
import axios from 'axios';
import Blue from '../blue.jpg'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount () {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post:res.data
                })
            })
        
    }
    render () {
        const post = this.state.post ? (
            <div 
                className="post" 
                >
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Wczytywanie...</div>
        )
        return (
            <div className="container" style={{
                    height:'90vh',
                    backgroundImage: "url(" + Blue + ")",
                    backgroundSize: "cover"
                }}>
                {post}
            </div>
        )
    }
}
export default Post