const fs = require('fs');

let db = "texts";
let setDefaultDb = false;
let defaultDb = {
    "posts": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "some comment",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    }
  };

let list = Array(10000).fill().map((val, idx) => {
    return {
      id: idx, 
      name: `John Doe ${idx}`,
      image: 'http://via.placeholder.com/40',
      text: `Lorem Ipsum ${idx}`
    }
});

fs.readFile('db.json', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj[`${db}`] = list; //add some data
    obj = setDefaultDb ? defaultDb : obj;
    json = JSON.stringify(obj, null, 4); //convert it back to json
    fs.writeFile('db.json', json, function(err) {
        if (err) throw err;
        console.log('complete');
    }); // write it back 
}});

