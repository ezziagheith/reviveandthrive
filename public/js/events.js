
// NOTE EVents
onSuccess = (response) => {
 
  response.data.forEach((events) => {
      const template = `
      <div class="card-content">
      <h4 class="class-name">${events.className}</h4>
      <h6>${events.teacherName}</h6>
      <div>${events.time}</div>
      <span><button type="button" class="btn btn-link" >Add</button></span>
      <h5 class="btn btn-link">See Description</h5>
      <p class="parrafo">${events.description}</p>
    </div>
    `;
    
    $('.card-container').append(template);
    
  })
  $("p.parrafo").hide();
  $("h5").click('section', function(){
    $("p.parrafo").slideToggle();
  });
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