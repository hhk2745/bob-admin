import axios from "axios";

export const sample = (url, method, data={} )=>{
  return axios(url, {
    method: method,
    headers: {},
    data: data,
  });
}


