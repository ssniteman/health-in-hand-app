$('[rel="popover"]').popover({
    trigger: 'hover',
    html: true
});

// User input renders on last page

$('.orderbtn').click(function() {



    var nameValue = $('.userinput').val();
    var timeValue = $('.time').val();
    var selectedIngredients = $('.selection input:checked')

    var ingredients = []
    selectedIngredients.each(function() {

        ingredients.push($(this).val());
    })

    setTemplate(nameValue, ingredients, timeValue);

    $('#myModal').modal()

    console.log('hi')

})

function setTemplate(name, ingredients, time) {
    var thankyouTemplate = _.template($('.thankyouTemplate').text());
    $('.modal-body').append(thankyouTemplate({
        nameValue: name,
        ingredients: ingredients,
        timeValue: time

    }));
}