
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



$('.details')
// NOTE EVents
onSuccess = (response) => {
    console.log('success!');
  
    response.data.forEach((events) => {
      const template = `
      <table>
        <td>
            <em>${events.time}</em>
            <h5>${events.name}</h5>
            <p>${events.description}</p> 
        <section class="details">
            <small>Click for Details</small>
            <p class="hide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde corporis quod, eos aperiam nesciunt tempora cupiditate nisi. Voluptate, ipsa velit.</p>     
        </section>
        </td>
        </table>
      `;
      $('#events').append(template);
    })
  };
  
  onError = () => {
    console.log('err');
  }
  
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/v1/events",
    success: onSuccess,
    error: onError
  })

