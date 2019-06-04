import React, { Component } from 'react'
import Comment from './Comment'
import profileImage from '../img/profile.png'


class PostPage extends Component {
    constructor() {
        super()

        this.state = { 
            post: {}, 
            comments: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response) => response.json())
            .then((response) => this.setState({
                post : response
            }))

        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments?_limit=5')
        .then((response) => response.json())
            .then((response) => this.setState({                    
                comments : response
            }))

    }

    render() {
        let comment = this.state.comments.map((element, key) =>
            <Comment key={key} email={element.email} comment={element.body} src={profileImage}/>
        )

        console.log(comment)
        return (
        <div className="container post-container">
            <div className="post">
                <h2>{ this.state.post.title }</h2>
                <p>{ this.state.post.body }</p>
            </div>
            <div className="comments-container">
                <h2 className="comments-title">Commentaires</h2>
                { comment }
            </div>
        </div>
        )
    }
}

export default PostPage