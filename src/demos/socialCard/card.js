import React from 'react';
import './styles.css';

class Card extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <div className="container">
                {post.user} - {post.header}
                <img src={post.image} />
                {post.text}
            </div>
        );
    }
}

class Feed extends React.Component {
    render() {
        return (
            <Card post={POSTS[0]} />
        );
    }
}

const POSTS = [
    {user: 'Fastturtle4', header: 'First post', text: 'Testing the first post', image: './turtpic.jpeg'},
    {user: 'Paul.barrett21', header: 'Second post', text: 'second', image: null},
    {user: 'Yeetbro', header: 'YEET', text: 'y33t', image: null},
    {user: 'Stonks', header: 'ACB to the MOON', text: 'Invest in ACB and get rich!', image: null}
];

export default Feed;
