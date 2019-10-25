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
        <span><button id="${event._id}" type="button" class="btn btn-link removeButton" >Remove</button></span>
      </div>`
    $('#myClasses').append(template);
    })
    $('.removeButton').on('click', handleRemoveButton)
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


  const handleRemoveButton = (e) => {
    e.preventDefault();
    $(e.target)
       const id = event.target.id
       $.ajax({
           xhrFields: {
               withCredentials: true
           },
         method: "DELETE",
         url: `/api/v1/users/event/${id}`,
         data: {event: id},
         success: res => $(e.target).parent().parent().remove(),
         error: onError
       })
  } 