//Using this code:

const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]


// Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.

Promise.all( urls.map(e=>fetch(e))).then(responses => responses.forEach((response,index) => console.log(index,response)));

// Change one of the urls in the array provided above. This should cause an error. 
//Make sure your catch block works.

const url2 = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/5'
  ]
Promise.all( url2.map(e=>fetch(e)))
    .then(responses => responses.forEach((response,index) => console.error(index,response)))
    .catch(e=>{error.log(e)});
