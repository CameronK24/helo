import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './nav.css';
import home from '../../logo/home.png';
import post from '../../logo/post.png';
import logout from '../../logo/logout.png';

class Nav extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='nav-bar'>
                <section className='profile-container'>
                    <div className='profile-pic' style={{backgroundImage: `url(${this.props.profilePic})`}} ></div>
                    <p>{this.props.username}</p>
                </section>
                <section className='nav-buttons'>
                    <Link to='/dashboard'><img src={home} alt='dashboard' /></Link>
                    <Link to='/new'><img src={post} alt='new post' /></Link>
                </section>
                <section className='logout-section'>
                    <Link to='/'><img src={logout} alt='logout' /></Link>
                </section>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user_id,
        username: state.username,
        profilePic: state.profile_pic
    };
}

export default connect(mapStateToProps)(Nav);