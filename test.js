// object gyakorlás

let bookMarks = {
    'myBook1':  {
        'title': 'Harry Potter és a bölcsek köve',
        'author': 'J. K. Rowling',
        'release title': '2008'
    },
    'myBook2': {
        'title': 'Harry Potter és a bölcsek köve',
        'author': 'J. K. Rowling',
        'release title': '2008',
    },
    'page number': function bookmark(book) {
        this[book].page = prompt('Add meg az oldalt ahol tartasz: ');
        alert('Te a ' + this[book].title + ' könyv ' + this[book].page + '. oldalán tartasz!');
    }
}

a = prompt('Add meg melyik könyvet olvasod: ');
myBook1['page number'](a);




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


// function add (a,b) { return a + b; }
// function sub (a,b) { return a - b; }
// function mul (a,b) { return a * b; }

// let db = 1;
// let jo = 0;
// let rossz = 0;
// let eredmeny = 0;
// let felhasznaloSzama = 0;   

// while (db <= 10) {
//     let logikai = true;
//     let random = 1;
//     random = Math.floor(Math.random() * 4);
//     let szam1 = Math.floor(Math.random() * 10);
//     let szam2 = Math.floor(Math.random() * 10);

//     while (logikai) {
//         if (random == 1) {
//             eredmeny = add(szam1, szam2);
//             felhasznaloSzama = prompt(szam1 + ' + ' + szam2 + '= ');
//         }
//         else if (random == 2) {
//             eredmeny = sub(szam1, szam2);
//             felhasznaloSzama = prompt(szam1 + ' - ' + szam2 + '= ');
//         }
//         else if (random == 3) {
//             eredmeny = mul(szam1, szam2);
//             felhasznaloSzama = prompt(szam1 + ' * ' + szam2 + '= ');
//         }

//         if (felhasznaloSzama == eredmeny) {
//             logikai = false;
//             jo++;
//             alert('Helyes a válasz!');
//         }
//         else {
//             rossz++;
//             alert('Próbáld újra!');
//         }
//     }
//     db++;    
// }

// let osztas = rossz / jo;
// let szazalek = osztas * 100;
// let percentage = 100 - szazalek;
// alert('Elért eredményed százalékban: ' + percentage + '%');
// alert('Jó válaszok: ' + jo + ', rossz válaszok: ' + rossz);