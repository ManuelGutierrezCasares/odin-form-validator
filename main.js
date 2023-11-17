(function() {
  const email = document.getElementById('form-email');
  const country = document.getElementById('form-country');
  const zipCode = document.getElementById('form-zip-code');
  const password = document.getElementById('form-password');
  const passwordConfirmation = document.getElementById('form-password-confirmation');
  const submit = document.getElementById('form-submit');

  submit.addEventListener('click', function (e) {
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && passwordConfirmation.validity.valid){
      e.preventDefault();
      form.reset();
      resetClasses();
      alert('¡HIGH FIVE!');
    }
  })

  email.addEventListener('input', function (e) {
    emailValidator(e);
  })
  function emailValidator (event) {
    const target = event.target;
    if (target.validity.valueMissing || target.validity.typeMismatch || target.validity.patternMismatch){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      return false;
    }else if (target.validity.valid){
      target.classList.remove('is-invalid');
      target.classList.add('is-valid');
      return true;
    }
  } 

  country.addEventListener('input', function (e) {
    countryValidator(e);
  })
  function countryValidator (event) {
    const target = event.target;
    if (target.validity.valueMissing || target.validity.tooShort || target.validity.tooLong){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      return false;
    }else if (target.validity.valid){
      target.classList.remove('is-invalid');
      target.classList.add('is-valid');
      return true;
    }
  } 

  zipCode.addEventListener('input', function (e) {
    zipCodeValidator(e);
  })
  function zipCodeValidator (event) {
    const target = event.target;
    if (target.validity.valueMissing || target.validity.rangeOverflow || target.validity.rangeUnderflow){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      return false;
    }else if (target.validity.valid){
      target.classList.remove('is-invalid');
      target.classList.add('is-valid');
      return true;
    }
  } 

  password.addEventListener('input', function (e) {
    passwordValidator(e);
  })
  function passwordValidator (event) {
    const target = event.target;
    if (target.validity.valueMissing || target.validity.tooShort || target.validity.tooLong || target.validity.patternMismatch){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      target.setCustomValidity('Password must be between 8 and 16 characters');
      return false;
    }
    target.classList.remove('is-invalid');
    target.classList.add('is-valid');
    target.setCustomValidity('');
    return true;
  } 

  passwordConfirmation.addEventListener('input', function (e) {
    passwordConfirmationValidator(e);
  })
  function passwordConfirmationValidator (event) {
    const target = event.target;
    if (target.validity.valueMissing || target.validity.tooShort || target.validity.tooLong || target.validity.patternMismatch){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      target.setCustomValidity('Password must be between 8 and 16 characters');
      return false;
    } else if (target.value !== password.value){
      target.classList.remove('is-valid');
      target.classList.add('is-invalid');
      target.setCustomValidity('Your confirmation doesn\'t match with your password.');
      return false
    }
    target.classList.remove('is-invalid');
    target.classList.add('is-valid');
    target.setCustomValidity('');
    return true;
  }

  function resetClasses(){
    email.classList.remove('is-valid');
    email.classList.remove('is-invalid');
    country.classList.remove('is-valid');
    country.classList.remove('is-invalid');
    zipCode.classList.remove('is-valid');
    zipCode.classList.remove('is-invalid');
    password.classList.remove('is-valid');
    password.classList.remove('is-invalid');
    passwordConfirmation.classList.remove('is-valid');
    passwordConfirmation.classList.remove('is-invalid');    
    focusOnFirst();
  }
  function focusOnFirst(){
    email.focus();
  }
})();