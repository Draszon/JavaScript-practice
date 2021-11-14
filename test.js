// object gyakorlás

//KIVÁLASZTJA EGY OBJEKTUMBAN ADOTT TULAJDONSÁG ALAPJÁN HOGY MELYIKRE IGAZ

// let car = {
//     'Fiat': {
//         'type': 'Fiat',
//         'model': '500',
//         'color': 'white',
//         'mukszik': true
//     },
//     'Audi': {
//         'type': 'Audi',
//         'model': 'A6',
//         'color': 'red',
//         'mukszik': true
//     },
//     'km oraallas': function (marka) {
//         this[marka].kmAllas = prompt('Add meg az óraállást: ');
//         alert('A/Az ' + this[marka]['type'] + ' óraállása: ' + this[marka]['kmAllas'] + 'km');
//     },
//     'mukszike': function () {
//         let mukszike = [];
//         for (let cars in this) {
//             if (this[cars]['mukszik'] === true) {
//                 mukszike.push(this[cars]['type']);
//             }
//         }

//         if (mukszike.length === 0) {
//             console.log('Egyik kocsi sem működik!');
//         } else {
//             console.log('Ez a kocsi működik: ' + mukszike);
//         }

        
//     }
// }

// car['mukszike']();


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


//CODEBERRY KÖNYVES FELADAT

// var bookCatalog = {
//     'myBook1': {
//       'title': 'To Kill a Mockingbird',
//       'author': 'Harper Lee',
//       'genre': 'coming-of-age story',
//       'year of publication': 2015,
//       'has been read': true,
//       'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
//       'quotes': {
//         'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
//         'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
//         'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
//       },
//       'borrowed by': null,
//       'rating': 5
//     },

//     'myBook2': {
//       'title': 'The Picture of Dorian Gray',
//       'author': 'Oscar Wilde',
//       'genre': 'philosophical fiction',
//       'year of publication': 2016,
//       'has been read': true,
//       'main characters': ['Dorian Gray', 'Lord Henry Wotton', 'Basil Hallward'],
//       'quotes': {
//         'p12': 'You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose.',
//         'p46': 'Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one\'s mistakes.',
//         'p127': '"That book you sent me so fascinated me that I forgot how the time was going." "Yes: I thought you would like it," replied his host, rising from his chair. "I didn\'t say I liked it, Harry. I said it fascinated me. There is a great difference." "Ah, you have discovered that?"'
//       },
//       'borrowed by': null,
//       'rating': 5
//     },

//     'myBook3': {
//       'title': 'The Hitchhiker\'s Guide to the Galaxy',
//       'author': 'Douglas Adams',
//       'genre': 'comedy science fiction',
//       'year of publication': 2001,
//       'has been read': true,
//       'main characters': [],
//       'quotes': {},
//       'borrowed by': 'Kiss Pista, Nagy Béla',
//       'rating': undefined
//     },

//     'page marker': function (book) {
//       var pageInitial = this[book].page;
//       this[book].page = prompt('What page are you on in the book titled ' + this[book].title + '?');
//       if (typeof pageInitial === 'undefined') {
//         alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '.');
//       } else {
//         alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (this[book].page - pageInitial) + ' pages this time.');
//       }
//     },

//     'unread': function () {
//       var booksToRead = [];
//       for (var book in this) {
//         if (this[book]['has been read'] === false) {
//           booksToRead.push(this[book].title);
//         }
//       }
//       if (booksToRead.length === 0) {
//         console.log('Elolvastad az összes könyvet.');
//       } else {
//         console.log('Nem olvastad még el az alábbi könyveket: ' + booksToRead);
//       }
//     },

//     'change property': function (bookName, propertyName) {
//       alert('Jelenlegi értéke: ' + this[bookName]['title']);
//       var propertyValue = prompt('Add meg a tulajdonság új értékét: ');
//       for (var booksName in this) {
//         if (booksName === bookName) {
//           for (var propertysName in this[bookName]) {
//             if (propertysName === propertyName) {
//               this[bookName][propertyName] = propertyValue;
//             }
//           }
//         }
//       }
//       alert('A könyv új címe: ' + this[bookName]['title']);
//     },

//     'add quote': function (bookName, bookPage) {
//       this[bookName].quotes[bookPage] = prompt('Add meg az idézet szövegét amit hozzá szeretnél adni az alábbi könyvből: ' + this[bookName]['title']);
//       alert('Az alábbi idézetet hozzáadtad a következő könyvhöz: ' + this[bookName]['title'] + ' Idézet: ' + this[bookName]['quotes'][bookPage]);
//     },

//     'borrowed': function () {
//       var booksToBorrowed = [];
//       for (var books in this) {
//         if (typeof this[books] !== 'function') {
//           if (this[books]['borrowed by'] !== null) {
//             booksToBorrowed.push(this[books].title);
//           }
//         }
//       }
//       if (booksToBorrowed.length === 0) {
//         console.log('Egyik könyv sincs kikölcsönözve');
//       } else {
//         console.log('Ezek a könyvek vannak kikölcsönözve: ' + booksToBorrowed);
//       }
//     }
//   };

  //bookCatalog['change property']('myBook3', 'title');