$(document).ready(function () {
  const url = `https://localhost:5000/api/login`;
  $("#login").click(function () {
    var data = {
      email: document.getElementById("emailin").innerHTML,
      password: document.getElementById("passin").innerHTML,
    };
    $.post(url, data, function (data, status) {
      console.log(`${data} ${status}`);
    });
  });
  const uri = `https://localhost:5000/api/signup`;
  $("#signup").click(function () {
    var data = {
      email: document.getElementById("emailup").innerHTML,
      password: document.getElementById("passup").innerHTML,
    };
    $.post(url, data, function (data, status) {
      console.log(`${data} ${status}`);
    });
  });
});
