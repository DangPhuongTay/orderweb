let body = document.querySelector("body");
let close1 = document.getElementById("close");

buttom.onclick = function () {
  body.classList.toggle("on");
  close1.onclick = function () {
    body.classList.toggle("on");
  };

  // dữ liệu đầu vào
  let name_in = document.getElementById("name-in").value;
  let date_in = document.getElementById("date-in").value;

  let number_in_1 = document.getElementById("number-in-1").value;
  let number_in_2 = document.getElementById("number-in-2").value;
  let number_in_3 = document.getElementById("number-in-3").value;
  //dữ liệu đầu ra
  document.getElementById("name-out").innerHTML = name_in;
  document.getElementById("date-out").innerHTML = date_in;

  document.getElementById("so-luong-1").innerHTML = number_in_1;
  document.getElementById("so-luong-2").innerHTML = number_in_2;
  document.getElementById("so-luong-3").innerHTML = number_in_3;
  let tien_1 = number_in_1 * 1;
  let tien_2 = number_in_2 * 2;
  let tien_3 = number_in_3 * 3;
  let sum_xien = tien_1 + tien_2 + tien_3;
  document.getElementById("tien-1").innerHTML = tien_1 + " $";
  document.getElementById("tien-2").innerHTML = tien_2 + " $";
  document.getElementById("tien-3").innerHTML = tien_3 + " $";
  document.getElementById("sum-out").innerHTML = sum_xien + " $";
};
