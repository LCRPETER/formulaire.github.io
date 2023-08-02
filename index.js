const form = document.querySelector("form");
const Name = document.querySelector(".name");
const firstName = document.querySelector(".firstName");
let pseudo1 = "";
let pseudo2 = "";
Name.addEventListener("input", (e) => {
  pseudo1 = e.target.value;
});
firstName.addEventListener("input", (e) => {
  pseudo2 = e.target.value;
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>
    Name : ${pseudo1}
    </h3>
    <h3>
    First Name : ${pseudo2}
    </h3>
    `;
  } else {
    alert("Veuillez accepter les cgv");
  }
});
