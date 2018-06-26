function Vérification(){
  var firstInputName = document.getElementById('password').value;
  var confirmeInputName = document.getElementById('confirmPassword').value;

  if (firstInputName != confirmeInputName) {
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
  }else {

    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
  }
}
