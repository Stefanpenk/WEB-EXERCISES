import fetch from 'node-fetch';

// const year = process.argv[2] || Math.floor(Math.random() * 2020);

// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then(response => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
//   })
//   .then(data => console.log(data.text))
//   .catch(error => console.log('Error', err))


//Ex2
const arg = process.argv[2];
let type = "";

if (arg.indexOf("--year") === 0) {
  // console.log('ok year');
  type = "year";
} else if (arg.indexOf("--math") === 0) {
  // console.log('ok math');
  type = "math";
} else if (arg.indexOf("--trivia") === 0) {
  // console.log('ok trivia');
  type = "trivia";
}

const equalSign = arg.search('=');
// console.log(equalSign);
if (equalSign === -1) console.log('no number');

const number = arg.slice(equalSign + 1);

// if (number === '' || isNaN(Number(number))) {
//   console.log('not a number');
//   process.exit();
// };

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then(response => {
    // console.log(response.status);
    // console.log(response.ok);
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('something is wrong!: ' + response.status)
    }
  })
  .then(data => console.log(data.text))
  .catch(error => console.log('Error', error))