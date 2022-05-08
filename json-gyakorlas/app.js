let field = document.querySelector("#demo");
let text = localStorage.getItem("data.json");
let obj = JSON.parse(text);


field.innerHTML = obj.employee.name;