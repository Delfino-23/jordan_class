// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.querySelector('form.needs-validation').addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  const email = document.getElementById('loginEmail').value.trim();
  const senha = document.getElementById('loginPassword').value.trim();
  const toastMsg = document.getElementById('toastMsg');
  const toastEl = document.getElementById('loginToast');
  let toast = bootstrap.Toast.getOrCreateInstance(toastEl);

  if (email === 'teste@teste' && senha === 'teste') {
    toastMsg.textContent = 'Login realizado com sucesso!';
    toastEl.classList.remove('text-bg-danger');
    toastEl.classList.add('text-bg-primary');
    toast.show();
  } else {
    toastMsg.textContent = 'Usuário ou senha incorretos!';
    toastEl.classList.remove('text-bg-primary');
    toastEl.classList.add('text-bg-danger');
    toast.show();
  }

  this.classList.add('was-validated');
});