// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission if invalid
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()  // Stop form submission
        event.stopPropagation()  // Stop other actions
      }

      form.classList.add('was-validated')  // Apply Bootstrap validation styles
    }, false)
  })
})()
