function loaded() {

    // var canvas = document.getElementById('myCanvas');
    // var context = canvas.getContext('2d');

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

    //17.feladat (függvények gyakorlása)
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // function triangle (positionX, positionY, size) {
    //     context.beginPath();
    //     context.moveTo(positionX, positionY);
    //     context.lineTo(positionX - size / 2, positionY + size);
    //     context.lineTo(positionX + size / 2, positionY + size);
    //     context.lineTo(positionX, positionY);
    //     context.strokeStyle = 'rgba(0,0,0,.5)';
    //     context.fillStyle = 'rgba(255,165,0,.5)';
    //     context.stroke();
    //     context.fill();
    // }
    // triangle(230, 160, 50);
    // triangle(270, 100, 50);
    // triangle(200, 50, 150);

    //18.feladat
    // function star (positionX, positionY, size) {
    //     context.beginPath();
    //     context.moveTo(positionX, positionY);
    //     context.lineTo(positionX + size, positionY);
    //     context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
    //     context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
    //     context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
    //     context.lineTo(positionX, positionY);
    //     context.strokeStyle = 'rgb(233,159,184)';
    //     context.fillStyle = 'rgb(233,159,184)';
    //     context.fill();
    //     context.stroke();
    // }
    // star(40, 50, 75);
    // star(130, 120, 100);
    // star(250, 220, 150);

    //19.feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // function lineToCenter(positionX, positionY, color) {
    //     context.beginPath();
    //     context.moveTo(positionX, positionY);
    //     context.lineTo(canvasWidth / 2, canvasHeight / 2);
    //     context.strokeStyle = color;
    //     context.stroke();
    // }
    // function random(max, min) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }
    // for (var lineCounter = 0; lineCounter <= 1000; lineCounter++) {
    //     lineToCenter(random(canvasWidth, 0), random(canvasHeight, 0), 'teal');
    // }

    //20.feladat
    // canvasWidth = canvas.width;
    // canvasHeight = canvas.height;
    // hexaHeight = 98;
    // hexaWidth = 113;
    // function drawHexagon(positionX, positionY) {
    //     context.beginPath();
    //     context.moveTo(positionX, positionY);
    //     context.lineTo(positionX + hexaWidth / 2 * 0.5, positionY - hexaHeight / 2);
    //     context.lineTo(positionX + hexaWidth / 2 * 1.5, positionY - hexaHeight / 2);
    //     context.lineTo(positionX + hexaWidth, positionY);
    //     context.lineTo(positionX + hexaWidth / 2 * 1.5, positionY + hexaHeight / 2);
    //     context.lineTo(positionX + hexaWidth / 2 * 0.5, positionY + hexaHeight / 2);
    //     context.lineTo(positionX, positionY);
    //     context.strokeStyle = 'orange';
    //     context.stroke();
    // }
    // drawHexagon(76, 120);
    // drawHexagon(76, 230);
    // drawHexagon(168.5, 65);
    // drawHexagon(168.5, 175);
    // drawHexagon(168.5, 285);
    // drawHexagon(261, 120);
    // drawHexagon(261, 230);
    // context.fillStyle = 'orange';
    // context.fill();

    //21.feladat
    // var canvasWidth = canvas.width;
    // var canvasHeight = canvas.height;
    // var sizeWidth = canvasWidth / 8;
    // var sizeHeight = canvasHeight / 8;
    // function drawCheckeredPattern(row, col) {
    //     var positionY = 0;
    //     for (var rowCounter = 1; rowCounter <= row; rowCounter++) {
    //         var positionX = 0;
    //         if (rowCounter % 2 ===  1) {
    //             for (var squareCounter = 1; squareCounter <= col; squareCounter++) {
    //                 if (squareCounter % 2 === 1) {
    //                     context.fillStyle = 'white';
    //                 } else {
    //                     context.fillStyle = 'black';
    //                 }
    //                 context.fillRect(positionX, positionY, sizeWidth, sizeHeight);
    //                 positionX += sizeWidth;
    //             }
    //         } else {
    //             for (var squareCounter = 1; squareCounter <= col; squareCounter++) {
    //                 if (squareCounter % 2 === 1) {
    //                     context.fillStyle = 'black';
    //                 } else {
    //                     context.fillStyle = 'white';
    //                 }
    //                 context.fillRect(positionX, positionY, sizeWidth, sizeHeight);
    //                 positionX += sizeWidth;
    //             }
    //         }
    //         positionY += sizeHeight;
    //     }
    // }
    // drawCheckeredPattern(8,8);

    //22.feladat
    // var base = 100;
    // var altitude = 86.6;
    // function drawTriangle(positionX, positionY) {
    //     for (var rowCounter = 0; rowCounter < 3; rowCounter++) {
    //         for (var triangleCounter = 0; triangleCounter <= rowCounter; triangleCounter++) {
    //             context.beginPath();
    //             context.moveTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
    //             context.lineTo(positionX - (rowCounter + 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
    //             context.lineTo(positionX - (rowCounter - 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
    //             context.lineTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
    //             if (rowCounter === 0) {
    //                 context.strokeStyle = 'rgb(227,98,102)';
    //                 context.fillStyle = 'rgb(227,98,102)';
    //             } else if (rowCounter === 1) {
    //                 context.strokeStyle = 'rgb(38,172,73)';
    //                 context.fillStyle = 'rgb(38,172,73)';
    //             } else {
    //                 context.strokeStyle = 'rgb(34,128,128)';
    //                 context.fillStyle = 'rgb(34,128,128)';
    //             }
    //             context.stroke();
    //             context.fill();
    //         }
    //     }
    // }
    // drawTriangle(225, 33);
}

//CLOSURE
// (function () {
//     var greeting = "Hello ";
//     function greetWithExcitement (name) {
//         var excitement = "!!!";
//         console.log(greeting + name + excitement);
//     }
//     greetWithExcitement("Berry");
// })();

//ha valamit később is akarunk használni a becsomagolt
//kódból azt adjuk vissza a csomagolófüggvény visszatérési, return értékeként
// var greet = (function (){
//     var greeting = 'Hello ';
//     function greetWithExcitement (name) {
//         var excitement = "!!!";
//         console.log(greeting + name + excitement);
//     }
//     return greetWithExcitement;
// })();
// greet("Berry");

// var converter = (function () {
//     var a;
//     function logAbsoluteUrl (url) {
//         if (!a) {
//             a = document.createElement('a');
//         }
//         a.href = url;
//         console.log(a.href);
//     };
//     return logAbsoluteUrl;
// })();
// converter("valami");


//köszönő modulba csomagolt köszönő függvények
// var moduleName = (function () {
//     var greeting = "Hello ";

//     return {
//         greetWithExcitement (name) {
//             var excitement = "!!!";
//             console.log(greeting + name + excitement);
//         },
//         greetWithASmile (name) {
//             var smile = " :)";
//             console.log(greeting + name + smile);
//         }
//     }
// })();

// moduleName.greetWithExcitement("Berry");
// moduleName.greetWithASmile("Berry");

// const person = {
//   'name': "Berry",
//   'hobbies': ["Discgolf", "Mantrailing"],
//   'introduce': function () {
//     console.log("Hi, I'm " + this.name);
//   },
//   'isInterestedIn': function (hobby) {
//     if (this.hobbies.includes(hobby)) {
//         console.log("Why yes, I love " + hobby);
//     } else {
//         console.log("Well, I have " + this.hobbies.length + " but " + hobby + " is not one of them");
//     }
//   }
//   // TODO Ide írd a metódusod.
// };
// person.introduce();                       // kiírja, hogy “Hi, I’m Berry”
// person.isInterestedIn("Longform Improv"); // azt kellene kiírnia, hogy "Well, I have 2 hobbies, but Longform Improv is not one of them"
// person.isInterestedIn("Discgolf");        // azt kellene kiírnia, hogy "Why yes, I love Discgolf"


// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//       return this._name;
//     }
//   };
//   var stoleSecretIdentity = hero.getSecretIdentity;
//   console.log(stoleSecretIdentity());
//   console.log(hero.getSecretIdentity());

// Mindkét console.log utasítás ugyanazt a függvényt hívja meg, de két különböző módon.
// Az első egyszerű függvényként hívja meg a stoleSecretIdentity függvényt, így ebben az esetben a this 
//a globális kontextusra mutat. Mivel nincs _name változó a globális kontextusban, az undefined érték íródik ki. Alteregó megvédve!
// A második esetben a megfelelő módon hívjuk meg a getSecretIdentity-t, a hero metódusaként, így 
//ezúttal a this magára a hero objektumra mutat. Megkapjuk a hősünk nevét, mert szépen kértük.


// function introFunction (valami) {
//     console.log('Hello, a nevem ' + this.name + ' és a többi szöveg: ' + valami);
// }
// const person = {
//     name: 'Berry',
//     introduce: introFunction
// };
// person.introduce('ez pedig a valami!');


// "use strict";
// function introFunction () {
//     console.log("Hi, I'm " + this.name);
//   }
//   const person = {
//     name: "Berry",
//     introduce: introFunction
//   };
//   introFunction();

//   "use strict";
//   function introFunction() {

//   }

//arrow function (nyílfüggvény)
// const doSomething = function () {
//     console.log("Csináltam valamit");
// }
//helyett
// const doSomething2 = () => {
//     console.log("Csináltam valamit");
// }
// doSomething2();

//call és apply
// const person = {
//     name: "Berry",
//     hobby: "topiary"
// }
// const me = {
//     name: "Péter",
//     hobby: "programming"
// }
// function introduce() {
//     console.log("Hi, I'm " + this.name + ", and I spend my free time practicing " + this.hobby + ".");
// }
// function introduce2() {
//     console.log("Hi, I'm " + this.name + ", and I spend my free time practicing " + this.hobby + ".");
// }

// introduce.call(person);
// introduce.apply(me);
// const introducePerson = introduce2.bind(me);
// introducePerson();

// OBJEKTUMORIENTÁLT JAVASCRIPT

// Gyártó függvény példa
// function exampleFactory (parameter1, parameter2) {
//     return {
//         property1: parameter1,
//         property2: parameter2,
//         method: function () {
//             return this.property1;
//         }
//     }
// }

// console.log(exampleFactory(23, 32));

// konstruktor függvény
// Feladat
// function createProduct (itemName, itemDiscription, itemPrice) {
//     return {
//         name: itemName,
//         discription: itemDiscription,
//         price: itemPrice,
//         print: function () {
//             console.log(this.name + ' is ' + this.discription + ' and costs ' + this.price + '€');
//         }
//     }
// }
// const disCatcher = createProduct("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399);
// disCatcher.print();


// function ExampleCounstructor (parameter1, parameter2) {
//     this.property1 = parameter1;
//     this.property2 = parameter2;
//     this.method1 = function () {
//         return this.property1;
//     }
// };

// const example = new ExampleCounstructor(12, 23);
// console.log(example);

/*function Product (name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = "€";
    // this.print = function () {
    //     console.log(this.name + ' is ' + this.description + ' and costs ' + this.price + this.currency);
    // }
}

// prototípus metódus
Product.prototype.print = function () {
    console.log(this.name + ' is ' + this.description + ' and costs ' + this.price + this.currency);
}
const disCatcher = new Product("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399);
disCatcher.print();*/


//class-ok
/*class Person {
    constructor (name) {
      this.name = name;
    }
    
    introduce() {
        console.log("Hi, I'm " + this.name);
    }
  }
  
  const berry = new Person("Berry");
  berry.introduce();  // logs "Hi, I'm Berry"
  
  // 1. use "extends" to specify parent to inherit from
  class Discgolfer extends Person {
    constructor (name, disc, score) {
      // 2. Call the parent constructor and pass shared parameters
      super(name);
      this.favoriteDisc = disc;
      this.highScore = score;
    }
    
    brag () {
      console.log("I'm a discgolfer and I can throw " + this.highScore + " with my " + this.favoriteDisc);
    }
  }
  
  const henry = new Discgolfer("Henry", "Star Destroyer", 500);
  henry.introduce();  // logs "Hi, I'm Henry"
  henry.brag();  // logs ""I'm a discgolfer and I can throw 500 with my Star Destroyer""*/


  //product példa classokkal

/*  class Product {
      constructor (name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.currency = "€";
      }

      print() {
        console.log(this.name + " is " + this.description + " and costs " + this.price + this.currency);
      }
  }

const disCatcher = new Product("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399);
disCatcher.print();

  class SaleProduct extends Product {
      constructor (name, description, price, discount) {
          super(name, description, price);
          this.discountAmount = discount;
      }

      salePrice() {
        return this.price * (1 - this.discountAmount / 100);
      }

      print() {
        console.log(this.name + " is " + this.description + " and costs a discounted " + this.salePrice() + this.currency);
      }
  }

  const saleCatcher = new SaleProduct("Star Destroyer Disc", "the first Speed 12 driver and is one of the primary discs used by many professional disc golfers", 17.99, 10);
  saleCatcher.print();*/

