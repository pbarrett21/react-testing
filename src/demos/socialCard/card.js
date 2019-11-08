import React from 'react';
import './styles.css';
import turt from './../turtpic.jpg';

class Card extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <div className="container">
                {post.user} - {post.header}
                <img src={post.image} alt={post.header} />
                {post.text}
            </div>
        );
    }
}

class Feed extends React.Component {
    render() {
        const posts = [];
        POSTS.forEach(post => {
            posts.push(
                <Card key={post.name} post={post} />
            );
        });
        return (
            <div>
                {posts}
            </div>
        );
    }
}

const POSTS = [
    {user: 'Fastturtle4', header: 'First post', text: 'Testing the first post', image: turt},
    {user: 'Paul.barrett21', header: 'Second post', text: 'second', image: turt},
    {user: 'Yeetbro', header: 'YEET', text: 'y33t', image: turt},
    {user: 'Stonks', header: 'ACB to the MOON', text: 'Invest in ACB and get rich!', image: turt}
];

export default Feed;
