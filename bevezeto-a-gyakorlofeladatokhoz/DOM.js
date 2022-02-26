document.getElementById("button").addEventListener("click", function() {
    const element = document.getElementById("lname").value;
    console.log(element);
    document.getElementById("text-id").innerHTML = element;
});


