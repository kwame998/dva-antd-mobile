import request from '../utils/request';

export async function fetch({key}) {
  console.log("fetch +"+key);
  return request('/api/'+key);
}


export async function fetchCommon(key) {
  return request(key,{credentials: 'include'});
}

export async function fetchPost(url,data) {
  var option ={
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
  };
  return request(url,option);
}
export async function fetchStr(data) {
  //console.log("fetch +"+key);
  var option ={
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
      body: JSON.stringify(data)
  };
  return request('/api/user',option);
}
