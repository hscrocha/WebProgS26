// Lecture 14 - JSON

const jsObj = {id: 1, name:'Jon Snow'};
const jsonObj = {"id": 1, "name":'Jon Snow'};

let strJsObj = JSON.stringify( jsObj );

console.log( JSON.stringify(jsonObj) );
//window.alert( jsonObj  ); // Object objet

let newobj = JSON.parse( strJsObj );

// window.alert( newobj.id ); // 1

const users = [{"id":1,"name":"Henrique Rocha", "email":"hsrocha@loyola.edu","major":"CS"}, 
    {"id":2,"name":"John Doe","email":"jd@jd.com","major":null},
{"id":3,"name":"Jane Doe","email":"jd@jd.net","major":null}];


