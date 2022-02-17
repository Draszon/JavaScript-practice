/*$(document).ready(function () {
    $("p").on({
        mouseover: function() {
            $(this).hide();
        },
        mouseout: function() {
            $(this).show();
        }
    });
});*/

/*$(document).ready(function() {
    $("ul").on("click", "li", function() {
        $(this).hide();
    });
    $("button").click(function() {
        $("li:last").after("<li>Todooo</li>");
    });
});*/


/*$(document).ready(function () {
    $("button").on({
        mouseover: function() {
            $("span").text("Múkodik!");
        },
        mouseout: function() {
            $("span").text("Ez is múkodik!");
        },
        click: function() {
            $("span").text("Jéé, csak nem rámkattintottál! :O");
        }
    });
});*/

// elemek animálása
/*$(document).ready(function(){
    $("button").click(function(){
      $("#red").animate({left: "300px"});
    });
});*/

// több művelet végrehajtása egymás után (callback függvény, ha az egyik effek
// teljesen lefutott, utána indul a következő)
/*$(document).ready(function(){
    $("button").click(function(){
        $(this).fadeOut("slow", function(){
            alert("Mission completed!");
        });
    });
});

// metódusok összefűzése másik metódussal chaining
$(document).ready(function() {
    $("div").click(function() {
        $(this)
            .animate({height: "50px"})
            .animate({width: "50px"})
            .animate({height: "150px"})
            .animate({width: "150px"});
    });
});*/