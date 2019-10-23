// ===========  Global Vars ================== //
const form = document.querySelector('form');
// console.log(form);

// handdle form
form && form.addEventListener('submit', (event) => {
    let formIsValid = true;
    const userData = {};
    event.preventDefault();

    [...form.elements].forEach(input =>{
        if (input.type !== 'submit' && input.value === '') {
            formIsValid = false;
            input.classList.add('input-error');
            input.insertAdjacentHTML('afterend', `
            <div class='alert ${input.id}-message'> Please enter your ${input.id}</div>
            `);
        } else if (input.type === 'password' && input.value.length < 4){
            formIsValid = false;
            input.classList.add('input-error');
            input.insertAdjacentHTML('afterend', `
            <div class='alert ${input.id}-message'> Password must be at least 4 characters</div>
            `);
        }
        if (input.type !== 'submit' && formIsValid){
            userData[input.name] = input.value;
        }
    });

    // Handle Login
    if (form.id === 'login' && formIsValid) {
    console.log('Submitting user login... ', userData);
    fetch('/api/v1/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(dataStream => dataStream.json())
      .then(res => {
        console.log(res);
        if (res.status === 201) return window.location = `/account/${res.data.id}`;
      })
      .catch(err => console.log(err));
  }
console.log(userData);
});


 
// ========================= events listeners ============================//
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





