const onSuccess = (response) => {

 
   response.data.forEach((event) => {
     const template = `
     <tr>
     <td>${event.className}</td>
     <td>${event.teacherName}</td>
     <td>${event.time}</td>
     <td>${event.location}</td>
     <td>${event.description}</td>
     </tr>
     `;
     $('tbody').append(template);
   })
 };
 
 const onError = (err) => {
   console.log('err');
 }
 
 $.ajax({
   method: "GET",
   url: "http://localhost:3000/api/v1/events",
   success: onSuccess,
   error: onError
 })