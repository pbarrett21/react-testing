import React from 'react';
import turt from './../../images/turtpic.jpg';

class SocialCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'post'};
    }

    goToProfile = () => {
        this.props.profileOrPostView(this.props.keyVal);
        this.setState({view: 'profile'});
    }

    goToPosts = () => {
        this.props.profileOrPostView('feed');
        this.setState({view: 'post'});
    }

    render() {
        const view = this.state.view;
        const text = this.props.post.text;
        const user = this.props.post.user;
        if (view === 'post') {
            return (
                <div>
                    <button onClick={this.goToProfile}>{user}</button>
                    <div>
                        <img src={turt} alt="blah" style={{maxWidth: 250}} />
                        <p>{text}</p>
                    </div>
                </div>
            );
        } else if (view === 'profile') {
            return (
                <div>
                    <h1>{user}'s Profile</h1>
                    <button onClick={this.goToPosts}>Go back to posts</button>
                </div>
            );
        }
    }
}

class SocialCardFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'feed'};
    }

    profileOrPostView = data => {
        this.setState({view: data});
    }

    render() {
        const posts = [];
        POSTS.forEach(post => {
            if (this.state.view === 'feed') {
                posts.push(
                    <SocialCard post={post} profileOrPostView={this.profileOrPostView} key={post.text} keyVal={post.text} />
                );
            } else {
                if (this.state.view === post.text) {
                    posts.push(
                        <SocialCard post={post} profileOrPostView={this.profileOrPostView} key={post.text} keyVal={post.text} />
                    );
                }
            }
        });
        return (
            <div>
                {posts}
            </div>
        );
    }
}

const POSTS = [
    { user: 'Fastturtle4', text: 'Testing the first post caption', image: turt },
    { user: 'Paul.barrett21', text: 'second caption', image: turt },
    { user: 'Yeetbro', text: 'y33t', image: turt },
    { user: 'Stonks', text: 'Invest in ACB and get rich!', image: turt }
];

export default SocialCardFeed;