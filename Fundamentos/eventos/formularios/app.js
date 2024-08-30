// Funciones de validación
function validateName(name) {
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return false;
  }
  return true;
}

function validateEmail(email) {
  if (!email.includes("@")) {
    alert("Por favor, ingrese una dirección de correo electrónico válida");
    return false;
  }
  return true;
}

// Función para obtener los datos del formulario
function getFormData(form) {
  return {
    name: form.elements["name"].value,
    email: form.elements["email"].value
  };
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = getFormData(event.target);
  
  if (!validateName(formData.name) || !validateEmail(formData.email)) {
    return;
  }

  submitForm(formData);
}

// Función para simular el envío del formulario
function submitForm(formData) {
  alert("Formulario enviado exitosamente!");
  console.log(`El nombre del usuario es: ${formData.name} y su correo es: ${formData.email}`);
  console.log(formData);
}

// Agregar el event listener
form.addEventListener("submit", handleSubmit);


// const form = document.getElementById("myForm");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = form.elements["name"].value;
//   console.log(name);
//   if (name.length < 3) {
//     alert("El nombre necesita más de 3 letras");
//     return;
//   }

//   const email = form.elements["email"].value;
//   console.log(email);
//   if (!email.includes("@")) {
//     alert("Please enter a valid email address");
//     return;
//   }

//   alert("Formulario enviado exitosamente!");

//   console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

//   const formData = {
//     name: name,
//     email: email,
//   };

//   console.log(formData);
// });