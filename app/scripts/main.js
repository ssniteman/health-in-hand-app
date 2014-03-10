$('[rel="popover"]').popover({
    trigger: 'hover',
    html: true
});

// User input renders on last page

$('.orderbtn').click(function() {

    console.log('clicked')

    var nameValue = $('.userinput').val();

    console.log(nameValue)

    // var fruitsValue = $('.selection :checked').val();

    // var banana = $('.banana-class:checked').val() || 'nope';
    // var spinach = $('.banana-class:checked').val() || 'nope';
    // var banana = $('.banana-class:checked').val() || 'nope';
    // var banana = $('.banana-class:checked').val() || 'nope';
    // var banana = $('.banana-class:checked').val() || 'nope';
    // var banana = $('.banana-class:checked').val() || 'nope';
    // var banana = $('.banana-class:checked').val() || 'nope';

    var ingredients = $('.selection input:checked')

    console.log(ingredients)

})


// var customStatus


var thankyouTemplate = _.template($('.thankyouTemplate').text());