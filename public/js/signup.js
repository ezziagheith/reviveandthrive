console.log('Signup JS');

const form = document.querySelector('form');

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log('Form submitted');
  // Get All Form Values
  const firstName = document.getElementById('inputFirstName');
  const lastname = document.getElementById('inputLastName');
  const email = document.getElementById('inputEmail');
  const password = document.getElementById('inputPassword');
  const password2 = document.getElementById('inputPassword2');
 
  
  if (password.value !== password2.value) {
    alert('Passwords do not match');
  } else {
    const userData = {
      firstName: firstName.value,
      lastName: lastname.value,
      email: email.value,
      password: password.value,
    };

    console.log('Submitting new user -->', userData);

    fetch('api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(stream => stream.json())
      .then(res =>{
        console.log(res);
        if(res.status === 201) return  window.location.href="http://localhost:3000/login"
    })
      .catch((err) => console.log(err));
  }

  

};

form.addEventListener('submit', handleSubmit);