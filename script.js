function success() {
    if(document.getElementById("validationTextarea").value.length != 10 || document.getElementById("invalidCheck").checked == false) { 
           document.getElementById('btn').disabled = true; 
       } else { 
           document.getElementById('btn').disabled = false;
       }
       console.log(document.getElementById("invalidCheck").checked );
       sessionStorage.setItem("numero",document.getElementById("validationTextarea").value)
   }


   const form = document.getElementById("btn");
   form.addEventListener("click", function(event){
    event.preventDefault()

    let numero = sessionStorage.getItem("numero");
    document.getElementById("numero").innerHTML = numero;
  });

  function formSubmit() {
    document.myform.submit();
    alert("numero " + document.myform.number.value +" inviato")
  }
