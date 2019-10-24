$(document).ready( () => {
    $('#hello').append(` ${window.sessionStorage.firstName}`)
})
 

const onSuccess = (res) => {
    res.data.events.forEach((event) => {
        const template = `
        <div class="card-content">
        <h4 class="class-name">${event.className}</h4>
        <h6>${event.time}</h6>
        <div>${event.location}</div>
        <span><button id="${event._id}" type="button" class="btn btn-link addButton" >Remove</button></span>
      </div>`


      $('#myClasses').append(template);
    })
    
    console.log(res);
    
}
const onError = (err) => {
    console.log(err);
    
}


$.ajax({
    method: "GET",
    url: `/api/v1/account/${window.sessionStorage.userId}`,
    success: onSuccess,
    error: onError
  })


