
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
