const text = document.getElementById('demo');

const addBtn = document.getElementById('add');

let todoArray = [];
let todo = localStorage.getItem("data.json");

todoArray = JSON.parse(todo);

console.log(todoArray);