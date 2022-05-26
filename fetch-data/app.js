import fetch from 'node-fetch';
import request from 'request';
import fs from 'fs';


//Ex1
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
// const arg = process.argv[2];
// let type = "";

// if (arg.indexOf("--year") === 0) {
//   // console.log('ok year');
//   type = "year";
// } else if (arg.indexOf("--math") === 0) {
//   // console.log('ok math');
//   type = "math";
// } else if (arg.indexOf("--trivia") === 0) {
//   // console.log('ok trivia');
//   type = "trivia";
// }

// const equalSign = arg.search('=');
// // console.log(equalSign);
// if (equalSign === -1) console.log('no number');

// const number = arg.slice(equalSign + 1);

// // if (number === '' || isNaN(Number(number))) {
// //   console.log('not a number');
// //   process.exit();
// // };

// fetch(`http://numbersapi.com/${number}/${type}?json`)
//   .then(response => {
//     // console.log(response.status);
//     // console.log(response.ok);
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error('something is wrong!: ' + response.status)
//     }
//   })
//   .then(data => console.log(data.text))
//   .catch(error => console.log('Error', error))



// Ex3 - NBP API - REQUEST
// http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/
// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(isValid);

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, {
  json: true
}, (error, response, body) => {
  if (error) {
    return console.log('Error', error);
  };
  if (response.statusCode !== 200) {
    return console.log('something is wrong, check url');
  };
  const message = `price for ${body.currency} in ${body.rates[0].effectiveDate} is ${body.rates[0].mid} zl.`;

  fs.appendFile('currencies.txt', message + '\n', (error) => {
    console.log('data added to file');
  })

  console.log(message);
})