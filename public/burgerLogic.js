$(document).ready(function() {

    $('#mySubmitBtn').on('click', function(event) {
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

    $('.orderedParent').on('click', function(event) {
        event.preventDefault();
        console.log('testing testing');
        // console.log(event.target.parentElement.parentElement);
        // if (event.target.parentElement.parentElement.classList.contains('orderedParent')) {
        //     console.log(event.target.textContext);
        // } else {
        //     console.log("still hearing onclick function");
        // }
    });

});