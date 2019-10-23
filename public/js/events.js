
// NOTE EVents
onSuccess = (response) => {
 
  response.data.forEach((events) => {
      const template = `
    <tr class="cards">
          <td>${events.time}</td>
          <td>${events.className}</td>
          <td>${events.teacherName}</td> 
          <spam class="add"><button type="button" class="btn btn-link">add</button></spam>
          <button type="button" class="btn btn-link">Click for details</button>
          <td id="show">${events.description}</td>     
      </tr>
    `;
    
    console.log($('tbody').append(template));


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

