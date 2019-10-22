
// NOTE EVents
onSuccess = (response) => {
  console.log('success!');

  response.data.forEach((events) => {
      const template = `
    <table>
      <td>
          <em>${events.time}</em>
          <h5>${events.className}</h5>
          <p>${events.teacherName}</p> 
      <section class="details">
          <small>Click for Details</small>
          <p class="hide">${events.description}</p>     
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

