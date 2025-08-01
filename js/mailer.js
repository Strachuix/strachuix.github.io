const formMessage = document.getElementById("form-message");

fetch("../php/mailer.php", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    formMessage.classList.remove("d-none");
    formMessage.classList.add(data.status === "success" ? "alert-success" : "alert-danger");
    formMessage.textContent = data.message;

    if (data.status === "success") {
      this.reset(); // Wyczyść formularz
    }
  })
  .catch((error) => {
    formMessage.classList.remove("d-none");
    formMessage.classList.add("alert-danger");
    formMessage.textContent = "Wystąpił błąd podczas przesyłania danych. Spróbuj ponownie.";
    console.error("Error:", error);
  });