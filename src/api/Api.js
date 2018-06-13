import axios from 'axios';

export const listAll = () => {
  axios
    .get('http://spotippos.vivareal.com/properties')
    .then(function(response) {
      console.log(response.data);
    });
};
export const listLimit = (argPage, argLimit) => {
  axios
    .get(
      `http://spotippos.vivareal.com/properties?page=${argPage}&limit=${argLimit}`
    )
    .then(function(response) {
      console.log(response.data);
    });
};

export const listOne = argId => {
  axios
    .get('http://spotippos.vivareal.com/properties/' + argId)
    .then(function(response) {
      console.log(response.data);
    });
};

const apis = {
  listAll,
  listOne
};

export default apis;
