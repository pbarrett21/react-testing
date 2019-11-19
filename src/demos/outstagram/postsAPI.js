import turt from './../../images/turtpic.jpg';
import banana from './../../images/banana.jpg';
import yeet from './../../images/yeet.jpg';
import acb from './../../images/acb.jpg';
import image1 from './../../images/image1.jpeg';
import image2 from './../../images/image2.png';
import image3 from './../../images/image3.jpeg';
import image4 from './../../images/image4.jpeg';

const POSTS = [
    { user: 'User1', header: 'User1 post header', text: 'This is the caption for image 1', image: image1 },
    { user: 'User2', header: 'User2 post header', text: 'Caption for image 2', image: image2 },
    { user: 'User3', header: 'User3 post header', text: 'Yet another caption', image: image3 },
    { user: 'User4', header: 'User4 post header', text: 'This is an extra long caption for image 4 to text caption wrapping', image: image4 },
    { user: 'User5', header: 'User5 post header', text: 'Caption caption', image: turt },
    { user: 'User6', header: 'User6 post header', text: 'User6 caption', image: banana },
    { user: 'User7', header: 'User7 post header', text: 'User7 caption', image: yeet },
    { user: 'User8', header: 'User8 post header', text: 'User8 caption', image: acb }
];

export default POSTS;
