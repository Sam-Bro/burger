$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("BURGER DEVOURED");
            location.reload();
        });
    });

    $(".trashBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        
        //send delete request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function() {location.reload()});
    });

});