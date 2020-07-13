import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>
            </div>
        )
    }
}

export default Nav;