
// NOTE Handling Sign up Button

$('#signup').on('click', function (event){
    event.preventDefault()
    window.location.href="http://localhost:3000/signup"
});

// NOTE Handling Login Button

$('#login').on('click', function (event){
    event.preventDefault()
    window.location.href="http://localhost:3000/login"
});




// NOTE Calendar
// used thid resource to create the calander(https://designmodo.com/calendar-jquery-css3/);
$('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});


