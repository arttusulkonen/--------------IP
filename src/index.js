import axios from 'axios';
import { validateIp } from './helpers';

const searchButton = document.querySelector('.search-bar__btn');
const searchInput = document.querySelector('.search-bar__input');

searchButton.addEventListener('click', getData);
searchInput.addEventListener('keydown', handleKey);

function getData() {
  const ipAddress = searchInput.value;
  const url = `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}`;
  if (validateIp(ipAddress)) {
    axios.get(url).then(function (response) {
      console.log(response);
    });
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}
