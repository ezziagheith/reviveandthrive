
// NOTE EVents
onSuccess = (response) => {
 
  response.data.forEach((events) => {
      const template = `
    <div class="section-info">
    <span>${events.time}</span>
          <span class="add"><button type="button" class="btn btn-link">add</button></span>
          <h5>${events.className}</h5>
          <p>${events.teacherName}</p> 
      <section id="details">
      <button type="button" class="btn btn-link">Click for details</button>
          <p id="show">${events.description}</p>     
      </section>
      </div>
    `;
    
    $('#post').append(template);

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

// i grab this from stack overflow
window.onload = clock;
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date").innerHTML= date+" "+month+", "+year;
}

