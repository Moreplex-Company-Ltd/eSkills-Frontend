import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://eskill-api.herokuapp.com/api'
  });

//   check if there is a valid token in the localstorage
const token = localStorage.getItem('userToken');

if(token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else{
    delete instance.defaults.headers.common['Authorization'];
}
// that's all,so if there's no token we not adding any auth to the headers


  export default instance;
