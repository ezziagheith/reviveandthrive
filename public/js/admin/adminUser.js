const onSuccess = (response) => {

  response.data.forEach((user) => {
    const template = `
    <tr>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
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
  url: "/api/v1/users",
  success: onSuccess,
  error: onError
})