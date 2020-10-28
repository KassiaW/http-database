import React, { Component } from 'react';

import Posts from './Post/Posts';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AysncPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/posts/' 
                                         exact 
                                         activeClassName="my-active" 
                                         activeStyle={{
                                            color: 'blue',
                                            textDecoration: 'underline'
                                        }} > Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{ pathname: '/new-post' }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* quick and dirty inline safety gaurd check */}
                    { this.state.auth ? <Route path="/new-post" component={AysncPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;


