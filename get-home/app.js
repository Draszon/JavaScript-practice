function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
    var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
    var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');

    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    alert('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');
    

    var fuelToOffload = tankCapacity - requiredFuel;
    alert('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();