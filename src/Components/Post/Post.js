import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './post.css';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            content: '',
            username: '',
            profilePic: '',
            user_id: null
        }
    }

    componentDidMount() {
        this.getPostInfo();
    }

    getPostInfo = () => {
        const {postid} = this.props.match.params;
        axios.get(`/api/post/${postid}`)
            .then(res => {
                const {username, profile_pic, title, image, content, user_id} = res.data[0];
                console.log(res.data);
                this.setState({title: title, image: image, content: content, username: username, profilePic: profile_pic, user_id: user_id});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='single-post'>
                <section className='title-author'>
                    <h3>{this.state.title}</h3>
                    <div className='post-author'>
                        <p>by {this.state.username}</p>
                        <img src={this.state.profilePic} alt='author' />
                    </div>
                </section>
                <section className='post-content'>
                    <img src={this.state.image} alt='content' />
                    <p>{this.state.content}</p>
                </section>
                {this.state.user_id === this.props.userId
                ? <button className='dark-btn'>Delete Post</button>
                : null
                }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user_id
    };
}

export default connect(mapStateToProps)(Post);