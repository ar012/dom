import '../styles/index.scss';

// let h1 = document.getElementById('my-h1');

// h1.innerHTML = 'Selftics';

// console.log(h1);


// let headers = document.getElementsByTagName('p');

// let btn = document.getElementById('click-me');

// let colors = ['red', 'green', 'yellow', 'blue'];
// let i = 0;

// btn.addEventListener('click', function(){
//   let headText = document.getElementById('my-h1');
//   headText.innerText = 'Selftics';

//   headText.style.background = colors[i];
//   if(i >= colors.length){
//     i=0;
//   }else{
//     i++;
//   }
// });


function $(selector){
  return document.querySelector(selector);
}

// let btn = document.querySelector('#click-me');
let btn = $('#click-me');

let colors = ['red', 'green', 'yellow', 'blue'];
let i = 0;

btn.addEventListener('click', function(){
  // let headText = document.querySelector('#my-h1');
  let headText = $('#my-h1');

  headText.innerText = 'Selftics';

  headText.style.background = colors[i];
  if(i >= colors.length){
    i=0;
  }else{
    i++;
  }
});


// let container = document.querySelectorAll('.container');
// let container = document.querySelector('.container');

// console.log(container);


// console.dir(btn);



let myh1 = $('#my-h1');

// myh1.style.background = 'salmon';
// myh1.style.padding = '20px';
// myh1.style.color = '#ddd';
// myh1.style.fontSize = '50px';
// myh1.style.fontFamilly ='arial';

let h1Styles = {
  background: 'salmon',
  padding: '20px',
  color: '#ddd',
  fontSize: '50px',
  fontFamilly:'arial',
  textAlign: 'center'
};


Object.assign(myh1.style, h1Styles);


let pStyle = {
  color: '#0000ff',
  padding: '10px',
  lineHeight: '1.3',
  fontSize: '20px'
};

// let myPara = $('#my-para');

Object.assign($('#my-para').style, pStyle);




let btn2 = document.querySelector('#btn');
let para = document.querySelector('#para');

let isShow = true;

btn2.addEventListener('click', function(){
  if(isShow){
    para.style.visibility = 'hidden';
    isShow = false;
    btn2.innerText = "Show";
  } else {
    para.style.visibility = 'visible';
    isShow = true;
    btn2.innerHTML = "Hide";
  }
});




let root = document.querySelector('#root');

let jumbotronDiv = document.createElement("div");

// console.dir(jumbotronDiv);

// jumbotronDiv.classList.push('jumbotron');
jumbotronDiv.className = 'jumbotron';
jumbotronDiv.setAttribute('id', 'my-jmb');

root.appendChild(jumbotronDiv);

// console.log(root.children);

let h1 = document.createElement('h1');
h1.className = 'display-2 py-2';
h1.innerText = 'Self-study';
jumbotronDiv.appendChild(h1);


let nameField = $('#nameField');
let ul = $('#nameList');

nameField.addEventListener('keypress', function(event){
  // console.log(event);
  if(event.keyCode === 13){
    let name = event.target.value;
    // console.log(name)
    // ul.appendChild(createLi(name));
    createLi(ul, name);
    event.target.value = '';
  }
});

function createLi(ul, name) {
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex';
  li.innerHTML = name;

  let span = document.createElement('span');
  span.innerHTML = 'x';
  span.className = 'ml-auto';
  span.style.color = 'red';
  span.style.cursor = 'pointer';
  span.addEventListener('click', function(){
    ul.removeChild(li);
  });

  li.appendChild(span);

  // return li;
  ul.appendChild(li);
}