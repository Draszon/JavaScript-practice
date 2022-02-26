document.getElementById("button").addEventListener("click", function() {
    const element = document.getElementById("lname").value;
    if (element === "") {
        alert("Üresen hagytad a mezőt!");
    } else {
        console.log(element);
        document.getElementById("text-id").innerHTML = element;
    }
});

let num = 0;
document.getElementById("second-btn").addEventListener("click", function() {
    
    if (num < 1) {
        const para = document.createElement("p");
        para.innerHTML = "This is a paragraph";
        document.getElementById("myDiv").appendChild(para);
        num++;
        console.log(num);
    } else {
        alert("Többször nem tudod hozzáadni!");
    }
});