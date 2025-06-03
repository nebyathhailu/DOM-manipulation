//1. Change the background color to silver
document.body.style.backgroundColor = 'silver';

//2. Change the font color for h1 title tag to green
const title = document.getElementById('title');
title.style.color = 'green';

//3. Change the font case for h3 title tags touppercase
const heading = document.querySelectorAll('h3');
heading.forEach(
    title => {title.style.textTransform = 'uppercase';
});
heading[1].style.marginTop = '30px';

//4. Add one more fruit to the fruits list
const fruit = document.createElement('li');
fruit.textContent = 'Oranges';
document.getElementById('fruList').appendChild(fruit);

const fruitImg = document.createElement('img');
fruitImg.src = 'https://i.pinimg.com/736x/56/33/6c/56336c2142c1fd9786328e8d8f7cf7d4.jpg';
fruit.append(fruitImg);

fruitImg.addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/0b/21/4a/0b214a10df9b1dab8dc18829d24bd68e.jpg';
});

fruitImg.addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/56/33/6c/56336c2142c1fd9786328e8d8f7cf7d4.jpg'
});

//5. Add one more vegetable to the vegetables list
const veg = document.createElement('li');
veg.textContent = 'Potatoes';
document.getElementById('vegList').appendChild(veg);

const vegImg = document.createElement('img');
vegImg.src = 'https://i.pinimg.com/736x/23/c3/f4/23c3f4ddf10f07fea7c7e84821e96dfb.jpg';
veg.append(vegImg);

vegImg.addEventListener('mouseover', function(e){
    e.currentTarget.src = 'https://i.pinimg.com/736x/70/63/37/7063374b02ff6c64505cd6a18b66d7e4.jpg'
})
vegImg.addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/23/c3/f4/23c3f4ddf10f07fea7c7e84821e96dfb.jpg'
});

//Additional styling
document.getElementById('text').style.fontWeight = 'bold';
document.body.style.justifyItems = 'center';
document.body.style.lineHeight = 2.5;
const list = document.getElementsByClassName('list');
for (i of list){
    i.style.listStyleType = 'none';
}

document.querySelectorAll('li').forEach(
    list => list.style.textAlign = 'center'
);

document.getElementById('mangoes').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/52/72/10/5272101724ba0a25c745d118652fd757.jpg';
});

document.getElementById('mangoes').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/9d/d4/cc/9dd4ccd44328ea8b74b597e235bae046.jpg'
});

document.getElementById('bananas').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/ab/4c/60/ab4c602747a61b111ef0724cec46391e.jpg';
});

document.getElementById('bananas').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://trilogyflavors.com/wp-content/uploads/2024/10/AdobeStock_308965604-800x800.jpeg'
});

document.getElementById('watermelons').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/bd/34/88/bd348859df3e8895b75812a2b66c324b.jpg';
});

document.getElementById('watermelons').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQlJnr1Oi8QArKjMXdoJRI8RXPTYOBAvj0donSDtkYtwyRJyz-'
});

document.getElementById('onions').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/d0/82/10/d08210a070514e5ba891da7b1962bdea.jpg';
});

document.getElementById('onions').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/26/63/96/266396671091cf9e6ae643e441bb7196.jpg';
});

document.getElementById('tomatoes').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/b4/19/99/b41999166a046f3991c99d90e00d05f9.jpg';
});

document.getElementById('tomatoes').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/3c/2c/39/3c2c393f3d81b3f6c7e10d82d9e5529c.jpg';
});

document.getElementById('kales').addEventListener('mouseover', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/70/e3/9c/70e39c9c3a70d39089af106f2c1e64de.jpg';
});

document.getElementById('kales').addEventListener('mouseleave', function(e) {
    e.currentTarget.src = 'https://i.pinimg.com/736x/36/ff/bc/36ffbc25fe8168e37e7e7bd237516856.jpg';
});
