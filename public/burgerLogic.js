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
        // two parentElement's because my icon's are inside the li's inside the ul.
        if (event.target.parentElement.parentElement.classList.contains('orderedParent')) {
            var thisBurger = event.target.parentElement.textContent;
            $.ajax('/api/burgers/' + thisBurger, {
                type: "PUT"
            }).then(function() {
                console.log('Burger successfully eaten!')
            })
        }
        location.reload(true);
    });

});