import turt from './../../images/turtpic.jpg';
import banana from './../../images/banana.jpg';
import yeet from './../../images/yeet.jpg';
import acb from './../../images/acb.jpg';
import image1 from './../../images/image1.jpeg';
import image2 from './../../images/image2.png';
import image3 from './../../images/image3.jpeg';
import image4 from './../../images/image4.jpeg';

const POSTS = [
    {
        user: 'User1', header: 'User1 post header', text: 'This is the caption for image 1', image: image1,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    },
    {
        user: 'User2', header: 'User2 post header', text: 'Caption for image 2', image: image2,
        profile: {
            posts: 3, followers: 14, following: 23, bio: 'This is a bio too.'
        }
    },
    {
        user: 'User3', header: 'User3 post header', text: 'Yet another caption', image: image3,
        profile: {
            posts: 122, followers: 1033, following: 231, bio: 'Another bio'
        }
    },
    {
        user: 'User4', header: 'User4 post header', text: 'This is an extra long caption for image 4 to text caption wrapping', image: image4,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    },
    {
        user: 'User5', header: 'User5 post header', text: 'Caption caption', image: turt,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    },
    {
        user: 'User6', header: 'User6 post header', text: 'User6 caption', image: banana,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    },
    {
        user: 'User7', header: 'User7 post header', text: 'User7 caption', image: yeet,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    },
    {
        user: 'User8', header: 'User8 post header', text: 'User8 caption', image: acb,
        profile: {
            posts: 12, followers: 103, following: 62, bio: 'Simple bio for user1'
        }
    }
];

export default POSTS;
