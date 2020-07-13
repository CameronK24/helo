import React, {Component} from 'react';
import {connect} from 'react-redux';
import search from '../../logo/search.png';
import './dashboard.css';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            checkBox: true,
            posts: []
        }
    }
    
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const {userId} = this.props;
        const {checkBox, search} = this.state;
        axios.get(`/api/posts/${userId}/?userposts=${checkBox}&search=${search}`)
            .then(res => {
                this.setState({posts: res.data});
                console.log(this.state.posts);
            })
            .catch(err => console.log(err));
    }

    searchInput = (val) => {
        this.setState({search: val});
    }

    resetSearch = () => {
        this.setState({search: ''});
        this.getPosts();
    }

    changeCheckBox = () => {
        this.setState({checkBox: !this.state.checkBox})
    }

    render() {
        const mappedPosts = this.state.posts.map((post, index) => (
            <div className='mapped-post' key={index} >
                <h2>{post.title} </h2>
                <div className='author-box'>
                    <p>by {post.username}</p>
                    <img src={post.profile_pic} alt='profile picture' />
                </div>
            </div>
        ))
        console.log(mappedPosts);
        return (
            <div className='dashboard-view'>
                <section className='search-box'>
                    <div className='search-bar'>
                        <input placeholder='Search by Title' value={this.state.search} onChange={e => this.searchInput(e.target.value)} />
                        <img src={search} onClick={this.getPosts} />
                        <button className='dark-btn' onClick={this.resetSearch} >Reset</button>
                    </div>
                    <div className='check-box'>
                        <p>My Posts</p>
                        <input type='checkbox' defaultChecked onChange={this.changeCheckBox}/>
                    </div>
                </section>
                <section className='dashboard-posts'>
                    {mappedPosts}
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user_id
    };
}

export default connect(mapStateToProps)(Dashboard);