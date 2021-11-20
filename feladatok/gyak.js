let cars = {
    'audi': {
        'type': 'A6',
        'color': 'red',
        'max speed': 350,
        'horse power': 200,
        'used car': true,
        'owner': null,
        'km clock': {
            '2000': 142000,
            '2005': 180520
        }
    },
    'volkswagen': {
        'type': 'Golf',
        'color': 'white',
        'max speed': 230,
        'horse power': 170,
        'used car': false,
        'owner': 'Kiss Béla',
        'km clock': {
            '2000': 143200,
            '2005': 152520
        }
    },
    'ford': {
        'type': 'focus',
        'color': 'black',
        'max speed': 245,
        'horse power': 175,
        'used car': true,
        'owner': null,
        // 'km clock': {
        //     '2000': 112000,
        //     '2005': 114520
        // }
    },
    'traveled kms': function(car) {
        var km = this[car].kms;
        this[car].kms = prompt('Add meg a kilométeróra állást ebben az autóban: ' + this[car].type);
        if (typeof km === 'undefined') {
            alert('Jelenlegi km óra állása: ' + this[car].kms);
        } else {
            alert('A mostani km óra állása: ' + this[car].kms + '. Az előző út óta megtett táv: ' + (this[car].kms - km));
        }
    }
}