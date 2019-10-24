
$('#myaccount').attr('href', `/account/${window.sessionStorage.userId}`)

// NOTE EVents
const onSuccess = (response) => {
 
  response.data.forEach((events) => {
      const template = `
      <div class="card-content">
      <h4 class="class-name">${events.className}</h4>
      <h6>${events.teacherName}</h6>
      <div class="time-container">${events.time}</div>
      <span><button id="${events._id}" type="button" class="btn btn-link addButton" >Add</button></span>
      <h5 class="description btn btn-link">See Description</h5>
      <p class="parrafo">${events.description}</p>
    </div>
    `;
    
    $('.card-container').append(template);
})
  $(".parrafo").hide();
  $('.card-container .description').on('click', getToggle);
  $('.addButton').on('click', handleAddButton);
};





const onError = () => {
  console.log('err');
}


$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/v1/events",
  success: onSuccess,
  error: onError
})

// i grab this from stack overflow
window.onload = clock;
function clock()
{
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth();
    let monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date").innerHTML= date+" "+month+", "+year;
}



const getToggle = (e) => {
   $(e.target).next().slideToggle()
}


const handleAddButton = (e) => {
  e.preventDefault();
   $(e.target)
      const id = event.target.id
      console.log('added', id);
      $.ajax({
        method: "PUT",
        url: `http://localhost:3000/api/v1/users/${window.sessionStorage.userId}/addevent`,
        data: {event: id},
        success: (res)=>{console.log(res)},
        error: onError
      })
}