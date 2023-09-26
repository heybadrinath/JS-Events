// Challenge-1

const h1 = document.querySelector('#user');
function writeName() {
  h1.innerHTML = 'Badri';
}
window.addEventListener('load', writeName);

// challenge-2
document.querySelector('#btn-click').onclick = btnColor;
function btnColor() {
  document.querySelector('#btn-click').style.background = 'red';
  console.log('hello');
}

// challenge-3

const div = document.querySelector('#statement');

document.querySelector('#build-button').addEventListener('click', makeSentence);
function makeSentence() {
  let noun = document.getElementById('noun').value;
  let verb = document.getElementById('verb').value;
  let adverb = document.getElementById('adverb').value;
  let sentence = noun + ' ' + verb + ' ' + adverb;
  div.innerHTML = sentence;
}

// challeng-4.1
document.querySelector('#grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});
document.querySelector('#parent').addEventListener('click', () => {
  console.log('parent clicked');
});
document.querySelector('#child').addEventListener('click', () => {
  console.log('child clicked');
});

// challenge-4.2

document.querySelector('#grandparent').addEventListener(
  'click',
  () => {
    console.log('Grandparent clicked');
  },
  true
);
document.querySelector('#parent').addEventListener(
  'click',
  () => {
    console.log('parent clicked');
  },
  true
);
document.querySelector('#child').addEventListener(
  'click',
  () => {
    console.log('child clicked');
  },
  true
);

// challenge-5

document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e.target.innerHTML);
});
