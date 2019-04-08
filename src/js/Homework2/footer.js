import fbimg from '../img/fb-footer-icon.svg';
import instimg from '../img/instagram-logo.svg';
import ballimg from '../img/ball-icon.svg';

export default function(){
    const footer = document.createElement('footer');
    const sayhello  = document.createElement('div');
    const sayhellolabel = document.createElement('label');
    const email = document.createElement('div');
    const followus  = document.createElement('div');
    const followuslabel = document.createElement('label');
    const fb  = document.createElement('a');
    const instagram  = document.createElement('a');
    const ball  = document.createElement('a');
    const fbicon  = document.createElement('img');
    const instagramicon  = document.createElement('img');
    const ballicon  = document.createElement('img');
    
    footer.className = 'main-footer';
    sayhello.className = 'sayhello';   
    followus.className = 'followus';
    fb.className = 'followus__icon';
    instagram.className = 'followus__icon';
    ball.className = 'followus__icon';
    fbicon.className = 'followus__icon--fb';
    instagramicon.className = 'followus__icon--instagram';
    ballicon.className = 'followus__icon--ball';
    fbicon.src = fbimg;
    instagramicon.src = instimg;
    ballicon.src = ballimg;

    sayhellolabel.innerHTML = 'Say hello! - ';

    email.className = 'sayhellow__mail';
    email.innerHTML = 'hi@dinks.com';

    followuslabel.innerHTML = 'Follow us';
    

    sayhello.appendChild(sayhellolabel);
    sayhello.appendChild(email);
    followus.appendChild(followuslabel);
    ball.appendChild(ballicon);
    fb.appendChild(fbicon);
    instagram.appendChild(instagramicon);
    followus.appendChild(ball);
    followus.appendChild(instagram);
    followus.appendChild(fb);
    footer.appendChild(sayhello);
    footer.appendChild(followus);   
    return footer;
}