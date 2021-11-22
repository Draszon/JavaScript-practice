function loaded() {

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    //context.fillStyle = 'black';
    
    // context.fillRect(125,50,200,200);

    // context.beginPath(); //a láthatatlan vonalat tiszta lappal indítom
    // context.moveTo(55,70); //a tollat erre a koordinátára mozgatom
    // context.lineTo(150,100); // és vonalat húzok ebbe a koordinátába
    // context.strokeStyle = 'orange'; //ilyen színnel lesz kitöltve
    // context.stroke(); //megrajzolom a vonalat ("tinta metódus")

    // context.beginPath();
    // context.moveTo(0,300);
    // context.lineTo(450,0);
    // context.strokeStyle = 'red';
    // context.stroke();

    // var contextWidth = canvas.width;
    // var contextHeight = canvas.height;
    // context.fillRect(contextWidth / 2, contextHeight / 2, contextWidth / 2, contextHeight / 2);

    // var contextWidth = canvas.width;
    // var contextHeight = canvas.height;
    // var size = 100;
    // var padding = 10;
    // context.fillStyle = 'green';
    // context.fillRect(contextWidth - size - padding, contextHeight - size - padding, size, size);

    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var size = 100;
    // var positionX = canvasWidth / 2 - size * 0.75;
    // var positionY = canvasHeight / 2 - size * 0.75;
    // context.fillStyle = 'rgba(255,0,0,.5)';
    // context.fillRect(positionX, positionY, size, size);
    // positionX += size / 2;
    // positionY += size / 2;
    // context.fillStyle = 'rgba(0,0,255,.5)';
    // context.fillRect(positionX, positionY, size, size);

    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var rectWidth = 250;
    // var rectHeight = 50;
    // var positionX = (canvasWidth - rectWidth) / 2;
    // var positionY = (canvasHeight - rectHeight) / 2;
    // context.fillStyle = 'red';
    // context.fillRect(positionX, positionY - rectHeight, rectWidth, rectHeight);
    // context.fillStyle = 'white';
    // context.fillRect(positionX, positionY, rectWidth, rectHeight);
    // context.fillStyle = 'green';
    // context.fillRect(positionX, positionY + rectHeight, rectWidth, rectHeight);

    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // context.beginPath();
    // context.moveTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
    // context.lineTo(canvasWidth, canvasHeight);
    // context.strokeStyle = 'red';
    // context.stroke();
    // context.beginPath();
    // context.moveTo(canvasWidth - canvasWidth, canvasHeight);
    // context.lineTo(canvasWidth, canvasHeight - canvasHeight);
    // context.strokeStyle = 'red';
    // context.stroke();

    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var size = 150;
    // var positionX = 150;
    // var positionY = 225;
    // context.beginPath();
    // context.moveTo(canvasWidth / 2, positionY - positionX);
    // context.lineTo((canvasWidth - canvasWidth) + positionX, positionY);
    // context.lineTo(canvasWidth - positionX, positionY);
    // context.lineTo(canvasWidth / 2, positionY - positionX);
    // context.strokeStyle = 'rgba(128,128,128,.5)';
    // context.stroke();
    // context.fillStyle = 'rgba(255,165,0,.5)';
    // context.fill();

    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // context.beginPath();
    // context.moveTo(canvasWidth / 2, canvasHeight - canvasHeight);
    // context.lineTo(canvasWidth / 2, canvasHeight);
    // context.strokeStyle = 'green';
    // context.stroke();
    // context.beginPath();
    // context.moveTo(canvasWidth - canvasWidth, canvasHeight / 2);
    // context.lineTo(canvasWidth, canvasHeight / 2);
    // context.strokeStyle = 'red';
    // context.stroke();

    
}