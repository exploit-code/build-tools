import './main.scss';

import img1 from './media/images/1.jpg';
import img2 from './media/images/2.jpg';
import img3 from './media/images/3.jpg';
import img4 from './media/images/4.gif';

import sound1 from './media/audio/1.mp3';
import sound2 from './media/audio/2.mp3';
import sound3 from './media/audio/3.mp3';

import movie1 from './media/video/1.mp4';
import movie2 from './media/video/2.mp4';

const blockWidth = '400px';
const divList = document.querySelectorAll('.gallery > div');

const imageList = [img1, img2, img3, img4];
imageList.forEach((item, ind) => {
    const elem = document.createElement('img');
    elem.src = item;
    elem.style.width = blockWidth;
    divList[ind].prepend(elem);
});

const soundList = [sound1, sound2, sound3];
soundList.forEach((item, ind) => {
    const elem = document.createElement('audio');
    elem.setAttribute('controls', true);
    elem.src = item;
    elem.style.width = blockWidth;
    divList[ind + 4].prepend(elem);
});

const movieList = [movie1, movie2];
movieList.forEach((item, ind) => {
    const elem = document.createElement('video');
    elem.setAttribute('controls', true);
    elem.src = item;
    elem.style.width = blockWidth;
    divList[ind + 7].prepend(elem);
});