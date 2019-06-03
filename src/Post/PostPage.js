import React, { Component } from 'react'
import Comment from './Comment'
import profileImage from '../img/profile.png'


class PostPage extends Component {
    constructor() {
        super()

        this.state = { 
            post: {
                title: 'Mon post',
                description: 'Ma description'
            }, 
            comments: [
                {
                    email: 'florent.nicolas@ynov.com',
                    content: 'Mon commentaire'
                },
                {
                    email: 'florent.nicolas@ynov.com',
                    content: 'Mon commentaire'
                },
                {
                    email: 'florent.nicolas@ynov.com',
                    content: 'Mon commentaire'
                }
            ]
        }
    }
    render() {
        let comment = this.state.comments.map((element, key) =>
            <Comment key={key} email={element.email} comment={element.content} src={profileImage}/>
        )

        return (
        <div className="container post-container">
            <div className="post">
                <h2>{ this.state.post.title }</h2>
                <p>{ this.state.post.description }</p>
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