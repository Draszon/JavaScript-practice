var list = ['Audi', 'Skoda', 'BMW', 'Jaguar'];

for(var i = 0; i < list.length; i++) {
    console.log('A lista tartalma: ' + list[i]);
}

var cars = {
    marka     : 'Audi',
    kobcenti  : 12,
    szin      : 'fekete',
    1945      : 'igen',
    'fullname neved'  : function() {
        var name = prompt('Add meg a neved kérlek!');
        alert('A te neved: ' + name);
    }
}

cars['fullname neved']();

console.log(cars.marka);