import axios from 'axios';

const baseUrl = 'https://dummyjson.com';

const one = `${baseUrl}/users?limit=100`;
const two = `${baseUrl}/products?limit=100`;
const three = `${baseUrl}/products?limit=100`;

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

export const getData = async () => {
  axios
    .all([requestOne, requestTwo, requestThree])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responesThree = responses[2];

        console.log(responseOne, responseTwo, responesThree);
      })
    )
    .catch((errors) => {
      console.error(errors);
    });
};
