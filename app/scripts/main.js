$('[rel="popover"]').popover({
    trigger: 'hover',
    html: true
});

// User input renders on last page

$('.orderbtn').click(function() {

    console.log('clicked')

    var nameValue = $('.userinput').val();

    console.log(nameValue)

    var timeValue = $('.time').val();



    var selectedIngredients = $('.selection input:checked')

    console.log(selectedIngredients)

    var ingredients = []
    selectedIngredients.each(function() {

        ingredients.push($(this).val());
    })
    console.log(ingredients)



})


var thankyouTemplate = _.template($('.thankyouTemplate').text());

$('.thankyou').append(thankyouTemplate({
    nameValue: nameValue,
    ingredients: ingredients,
    timeValue: timeValue

}))