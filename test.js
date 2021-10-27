// object gyakorlás

// var list = ['Audi', 'Skoda', 'BMW', 'Jaguar'];

// for(var i = 0; i < list.length; i++) {
//     console.log('A lista tartalma: ' + list[i]);
// }

// var cars = {
//     marka     : 'Audi',
//     kobcenti  : 12,
//     szin      : 'fekete',
//     1945      : 'igen',
//     'fullname neved'  : function() {
//         var name = prompt('Add meg a neved kérlek!');
//         alert('A te neved: ' + name);
//     }
// }

// cars['fullname neved']();

// console.log(cars.marka);


// // alapszám és szorzoszám

// let alapszam = prompt('Add meg a számot:');
// let szorzo = prompt('Add meg a szorzoszamot:');
// let db = 1;

// if (alapszam >= 0 & szorzo >= 0) {
//     while (db <= szorzo) {
//         console.log(db + ' * ' + alapszam + ' = ' + db * alapszam);
//         db += 1;
//     }
// }


function add (a,b) { return a + b; }

function sub (a,b) { return a - b; }

function mul (a,b) { return a * b; }

let db = 1;
let jo = 0;
let rossz = 0;
let eredmeny = 0;
let felhasznaloSzama = 0;   

while (db <= 10) {
    let logikai = true;
    let random = 0;
    random = Math.floor(Math.random() * 4);
    let szam1 = Math.floor(Math.random() * 10);
    let szam2 = Math.floor(Math.random() * 10);

    while (logikai) {
        if (random == 1) {
            eredmeny = add(szam1, szam2);
            felhasznaloSzama = prompt(szam1 + ' + ' + szam2 + '= ');
        }
        else if (random == 2) {
            eredmeny = sub(szam1, szam2);
            felhasznaloSzama = prompt(szam1 + ' - ' + szam2 + '= ');
        }
        else if (random == 3) {
            eredmeny = mul(szam1, szam2);
            felhasznaloSzama = prompt(szam1 + ' * ' + szam2 + '= ');
        }

        if (felhasznaloSzama == eredmeny) {
            logikai = false;
            jo++;
            alert('Helyes a válasz!');
        }
        else {
            rossz++;
            alert('Próbáld újra!');
        }
    }
    db++;
    
}