let user;

const getData = () => {
   fetch('db.json')
      .then((response) => response.json())
      .then((data) => user = data)
      .then((user) => console.log(user))
      .catch("Ошибка");
};

// const getData = (url) => {
//    return fetch(url, {
//       method: 'GET',
//       headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//       },
//    }).then(response => response.json());
// };

const sendData = (url, data) => {
   return fetch(url, {
      method: 'POST',
      body: data,
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   }).then(response => response.json());
};


// getData('db.json')
//    .then(data => console.log(data))
//    .catch(error => console.log(error));
getData();

sendData('https://jsonplaceholder.typicode.com/posts')
   .then(data => console.log(data))
   .catch(error => console.log(error));