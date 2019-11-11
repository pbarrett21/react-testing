import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles.css';
import turt from './../../images/turtpic.jpg';
import banana from './../../images/banana.jpg';
import yeet from './../../images/yeet.jpg';
import acb from './../../images/acb.jpg';

// https://reacttraining.com/react-router/web/example/basic

class Card extends React.Component {
    render() {
        const post = this.props.post;
        const link = "/" + post.user;
        return (
            <Router>
                <div className="container">
                    <b><Link to={link}>{post.user}</Link> - {post.header}</b>
                    <img src={post.image} alt={post.header} />
                    <p>{post.text}</p>
                    <hr></hr>
                </div>

                <Switch>
                    <Route path={link}>
                        <Test />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

function Test() {
    return <h2>Test</h2>;
}

class Feed extends React.Component {
    render() {
        const posts = [];
        POSTS.forEach(post => {
            posts.push(
                <Card post={post} key={post.text} />
            );
        });
        return (
            <div className="background">
                {posts}
            </div>
        );
    }
}

const POSTS = [
    { user: 'Fastturtle4', header: 'First post', text: 'Testing the first post caption', image: turt },
    { user: 'Paul.barrett21', header: 'Second post', text: 'second caption', image: banana },
    { user: 'Yeetbro', header: 'YEET', text: 'y33t', image: yeet },
    { user: 'Stonks', header: 'ACB to the MOON', text: 'Invest in ACB and get rich!', image: acb }
];

export default Feed;
