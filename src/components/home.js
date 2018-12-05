import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Blue from '../blue.jpg'

class Home extends Component {
    state = {
        posts:[]
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                   posts:res.data.slice(0,20) 
                })
            })
    }
    render () {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(e => {
                return (
                    <div className="post card" key={e.id}>
                        <img  src={Blue} alt="Blue-background"/>
                        <div className="card-content">
                            <Link to={'/'+ e.id}>
                                <span className="card-title">{e.title}</span>
                            </Link>
                            <p>{e.body}</p>
                        </div>
                    </div>  
                )
            })
        ) : (
            <div className="center">Brak postów</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home