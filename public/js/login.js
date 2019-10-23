const form = document.querySelector('form');

const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    // console.log('Form submitted');
    // Get All Form Values

    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPassword');
 
   
    
    // if (password.value !== password2.value) {
    //   alert('Passwords do not match');
    // } else {
      const userData = {
        // firstName: firstName.value,
        // lastName: lastname.value,
        email: email.value,
        password: password.value,
    };
  
  
    
      // handle login
    if (formIsValid) {
      console.log('Submitting user login --> ', userData);
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
          if (res.status === 201) return window.location.href=`http://localhost:3000/account/${res.data.id}`;
        })
        .catch(err => console.log(err));
    }
    
}
  
  form.addEventListener('submit', handleSubmit);