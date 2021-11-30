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


    //1. feladat
    // context.beginPath();
    // context.moveTo(0,300);
    // context.lineTo(450,0);
    // context.strokeStyle = 'red';
    // context.stroke();

    //2. feladat
    // var contextWidth = canvas.width;
    // var contextHeight = canvas.height;
    // context.fillRect(contextWidth / 2, contextHeight / 2, contextWidth / 2, contextHeight / 2);

    //3. feladat
    // var contextWidth = canvas.width;
    // var contextHeight = canvas.height;
    // var size = 100;
    // var padding = 10;
    // context.fillStyle = 'green';
    // context.fillRect(contextWidth - size - padding, contextHeight - size - padding, size, size);

    //4. feladat
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

    //5. feladat
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

    //6. feladat
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

    //7. feladat
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

    //8. feladat
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

    //9. feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var size = 45;
    // var padding = 20;
    // context.fillStyle = 'rgba(255,165,0,.5)';
    // for(var squerCounter = 0; squerCounter < 10; squerCounter++){
    //     context.fillRect(padding, padding, size, size);
    //     padding += size / 2;
    // }

    //10. feladat
    // var size = 50;
    // var padding = 5;
    // for (rowCounter = 0; rowCounter < 5; rowCounter++) {
    //     var positionX = 15;
    //     var positionY = 15;
    //     for (var squareCounter = 0; squareCounter <= rowCounter; squareCounter++) {
    //         context.fillStyle = 'rgba(255,165,0,.5)';
    //         context.fillRect(positionX + squareCounter * (size + padding), positionY + rowCounter * (size + padding), size, size);
    //     }
    // }

    //11.feladat
    // var size = 30;
    // var padding = 5;
    // var positionY = 50;
    // var red = 255;
    // var green = 79;
    // var blue = 120;
    // for (var rowCounter = 0; rowCounter < 6; rowCounter++) {
    //     var positionX = 125;
    //     for(var squareCounter = 0; squareCounter < 6; squareCounter++) {
    //         context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
    //         context.fillRect(positionX, positionY, size, size);
    //         red -= 7;
    //         positionX += size + padding;
    //     }
    //     blue += 15;
    //     positionY += size + padding;
    // }
    
    //12.feladat
    // var size = 100;
    // var padding = 120;
    // var move = 5;
    // for (var triangleCounter = 0; triangleCounter < 30; triangleCounter++ ) {
    //     context.beginPath();
    //     context.moveTo(padding, padding);
    //     context.lineTo(padding + (size / 2), padding - size);
    //     context.lineTo(padding + size, padding);
    //     context.lineTo(padding, padding);
    //     context.strokeStyle = 'grey';
    //     context.stroke();
    //     padding += move;
    // }

    //13.feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var padding = 10;
    // var positionX = 0;
    // var positionY = 0;
    // var hue = 360;
    // var saturation = 60;
    // var lightness = 45;
    // for (var rectangleCounter = 0; rectangleCounter < 17; rectangleCounter++) {
    //     context.fillStyle = 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
    //     context.fillRect(positionX, positionY, canvasWidth, canvasHeight);
    //     hue -= 360 / 17;
    //     positionX += padding;
    //     positionY += padding;
    //     canvasWidth -= 20;
    //     canvasHeight -= 20;
    // }

    //14.feladat
    // var size = 50;
    // var positionX = 20;
    // var positionY = 15;
    // for (var rectCounter = 0; rectCounter < 15; rectCounter++) {
    //     if (rectCounter % 3 === 0) {
    //         context.fillStyle = 'rgba(0,0,255,.5)';
    //     } else if (rectCounter % 5 === 0) {
    //         context.fillStyle = 'rgba(255,255,0,.5)';
    //     } else if (rectCounter % 3 === 0 && rectCounter % 5 === 0) {
    //         context.fillStyle = 'rgba(0,255,0,.5)';
    //     } else if (rectCounter % 3 !== 0 && rectCounter % 5 !== 0) {
    //         context.fillStyle = 'rgba(0,0,0,.5)';
    //     } else {
    //         alert('Valami hiba történt!');
    //     }
    // }

    //15.feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // for (var counter = 0; counter <= canvasWidth; counter++) {
    //     if (counter % 3 === 0) {
    //         context.beginPath();
    //         context.moveTo(counter, canvasHeight / 2);
    //         if (counter % 2 === 0) {
    //             context.lineTo(canvasWidth / 2, canvasHeight - canvasHeight);
    //         } else {
    //             context.lineTo(canvasWidth / 2, canvasHeight);
    //         }
    //         context.strokeStyle = 'rgba(255,0,0,.5)';
    //         context.stroke();
    //     }
    // }

    //16.feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // for (counter = 0; counter <= canvas.width; counter++) {
    //     context.beginPath();
    //     context.moveTo(counter, canvasHeight / 2);
    //     if (counter % 4 === 0) {
    //         context.lineTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
    //     } else if (counter % 4 === 1) {
    //         context.lineTo(canvasWidth, canvasHeight - canvasHeight);
    //     } else if (counter % 4 === 2) {
    //         context.lineTo(canvasWidth - canvasWidth, canvasHeight);
    //     } else if (counter % 4 === 3) {
    //         context.lineTo(canvasWidth, canvasHeight);
    //     } else {
    //         alert('Valami hiba történt!');
    //     }
    //     context.strokeStyle = 'rgba(0,0,255,.5)';
    //     context.stroke();
    // }

    //17.feladat
    
    
}