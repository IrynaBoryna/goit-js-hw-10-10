import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


// Notify.failure("Oops, there is no country with that name");
// Notify.info("Too many matches found. Please enter a more specific name.");

// name.official
// capital 
// population 
// flags.svg 
// languages 

const refs = {
 input: document.querySelector('input#search-box'),
};
refs.input.addEventListener("input", debounce((e) => {
e.preventDefault();
const inputValue = Number(refs.input.currentTarget.value);

    fetchCountries()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
}, DEBOUNCE_DELAY));

// https://restcountries.com/v3.1/capital/{capital}
// https://restcountries.com/v3.1/lang/{currency}
// https://restcountries.com/v3.1/name/{name}?fullText=true
// function fetchCountries() {
//   return fetch("https://restcountries.com/v3.1/name/{name}").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   ).then(cantry => {
//     console.log(cantry);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

