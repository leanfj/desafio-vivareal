import axios from 'axios';


const api = axios.create({
  baseURL: 'http://spotippos.vivareal.com'
});

export const listAll = () => {
  axios
    .get('http://spotippos.vivareal.com/properties')
    .then(function(response) {
      console.log(response.data);
    });
};

export const listLimit = (argPage, argLimit) => api.get(`properties?page=${argPage}&limit=${argLimit}`);


export const listOne = argId => api.get('properties/' + argId);

const apis = {
  listAll,
  listOne,
  listLimit
};

export default apis;
