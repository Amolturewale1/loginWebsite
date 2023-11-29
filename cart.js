function submitForm(){
   
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let againPassword=document.getElementById('againPassword').value;
    
    if(password!=againPassword){
        alert(" Create Correct Password");
        return false;
    }
    let emailFind1=localStorage.getItem('email');

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    
    if(emailFind1===email){
        alert("You Have Already Account,Please Sign Up.");
        return false;
    }
    else{
        alert("Account created successfully.");
        return true;
    }
   
}

function SignUp(){
    let email=document.getElementById('email').value;
    let  password=document.getElementById('password').value;

    if( email===localStorage.getItem('email')
    && password===localStorage.getItem('password')){
        return true;
    }else{
        alert('Sign Up Failed...!');
        return false;   
    }
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
