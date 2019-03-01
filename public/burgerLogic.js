$(document).ready(function() {

    $('#mySubmitBt').on('click', function(event) {
        event.preventDefault();
        console.log('NB Submit Button Clicked');

        var newBurger = $('#myInputSize').val().trim();
        if (newBurger.length > 0) {
            $.ajax('/api/burgers/' + newBurger, {
                type: "POST"
            }).then(function() {
                console.log('NB Submitted!');
            });
            location.reload(true);
        } else {
            console.log('Burger was not entered');
        }
    });

    $('#orderedParent').on('click', function(event) {
        event.preventDefault();
        if (event.target.parentElement.parentElement.classList.contains('orderedParent')) {
            //
        }
    });

});