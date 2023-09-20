const form = document.querySelector(".form");
const textWarning = document.querySelector(".text-warning");
const iconWarning = document.querySelector(".icon-warning");
const inputEmail = document.getElementById("inputEmail");
const colors = {
  dangerColor: "hsl(0, 93%, 68%)",
  defaultColor: "hsl(0, 36%, 70%)",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let value = inputEmail.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    iconWarning.style.display = "block";
    textWarning.style.display = "block";
    inputEmail.style.borderColor = colors.dangerColor;
  }

  if (emailPattern.test(value)) {
    iconWarning.style.display = "none";
    textWarning.style.display = "none";
    inputEmail.style.borderColor = colors.defaultColor;
    alert("Form Submitted successfully!");
    form.reset();
  }
});
