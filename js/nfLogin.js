document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("emailOrPhone");
    const label = document.getElementById("labelEmailOrPhone");

    inputField.addEventListener("input", () => {
      // Show the label if the input is not empty, otherwise hide it
      label.classList.toggle("hidden", inputField.value.trim() === "");
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("Password");
    const label = document.getElementById("labelPassword");

    inputField.addEventListener("input", () => {
      // Show the label if the input is not empty, otherwise hide it
      label.classList.toggle("hidden", inputField.value.trim() === "");
    });
  });

// Failed
// // Get the button and input elements
// const emailOrPhone = document.getElementById("emailOrPhone");
// const password = document.getElementById("Password");
// const signInButton = document.getElementById("signInButton");

// signInButton.addEventListener("click", function () {
//     if (emailOrPhone.value.trim() && password.value.trim()) {
//         console.log("Redirecting to bfMain.html");
//         window.location.href = "D:\Code\+My Project\x04-Netflix Landing Page\bfMain.html";
//     } else {
//         alert("Please fill in Email or Phone no. and Password fields.");
//   }});



document.getElementById('signInButton').addEventListener('click', function (event) {
  event.preventDefault(); // ** Prevents the form from submitting **
  
  const emailOrPhone = document.getElementById('emailOrPhone').value;
  const password = document.getElementById('Password').value;

  if (emailOrPhone && password) {
      console.log('Redirecting to bfMain.html');
      window.location.href = 'bfMain.html';
  } else {
      alert('Please fill in both fields before signing in.');
  }
});

