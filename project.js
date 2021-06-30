/* Validation of sign Up form functions */
function LogForm(){
      var error="";
      var email=document.getElementById("Pop-Up-email").value;
      var password=document.getElementById("Pop-Up-password").value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email==""){
        error="<p>You must input your email</p>";
      }
      else if(!email.match(mailformat))
      {
        error="Your email format in unvalid";
      }
       if (password==""){
        error+="<p>You must enter a password</p>";
      }
      if(error!=""){
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerHTML=error;
      }else{
        window.location.href = "Home.html";
      }
    };
  /* Join form */
  function JoinForm()
  {
    var error="";
      var email=document.getElementById("Join-email").value;
      var password=document.getElementById("Join-password").value;
      var user=document.getElementById("Join-username").value;
      var passcheck=document.getElementById("Join-password-repeat").value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email==""){
      error="<p> You must input your email </p>";
     }
     else if (!email.match(mailformat)){
     error+="<p> Your email is unvalid</p>";
     }
     if(password==""){
      error+="<p> You must input your password </p>";
     }
     if(user==""){
      error+="<p> You must input your username </p>";
     }
     if(password!= passcheck){
      error+="<p>Your passwords don't match</p>";
     }
     if(error!=""){
        document.getElementById("joinerror").style.display="block";
        document.getElementById("joinerror").innerHTML=error;
      }else{
        document.getElementById("joinsuccess").style.display="block";
       document.getElementById("joinerror").style.display="none";
      }
  };
/* Log out function */
 function logOut(){
         var con=confirm("Are you sure you wanna leave this page ?");
         if (con == true) { 
             window.location.href = "Project1.html";
          }
      };
var clicked = false;
function showAnswerOne()
   {
      if(clicked)
     {
      document.getElementById("Hidden-Answer-one").innerHTML="";

     }
    else
    { 
       document.getElementById("Hidden-Answer-one").innerHTML="<hr> You can use our website and visit our store after opening it and pay us by cash , but if you are willing to use our application you need to have a credit card or a bank account connected .";
    }
   clicked = !clicked;
}
function showAnswerTwo(){
   if(clicked)
     {
      document.getElementById("Hidden-Answer-two").innerHTML="";
    }
    else
    { 
     
       document.getElementById("Hidden-Answer-two").innerHTML="<hr> For the mean time no , but we are currently meeting with some organic makeup brand companies and hoping to reach an agreement soon , stay tuned and we will announce it the minute we get it.";
    }
   clicked = !clicked;
}
function showAnswerThree(){
   if(clicked)
     {
      document.getElementById("Hidden-Answer-three").innerHTML="";
     

     }
    else
    {
       document.getElementById("Hidden-Answer-three").innerHTML="<hr> You can happily do that ! There are 2 gift card packages one with 150LD and 200LD and you can use any one of them and send it to your loving friends.";
    }
   clicked = !clicked;
}
function showAnswerFour(){
   if(clicked)
     {
      document.getElementById("Hidden-Answer-four").innerHTML="";
   

     }
    else
    { 
 
       document.getElementById("Hidden-Answer-four").innerHTML="<hr> When you enter your email and join us right here we will send you a confirmation email and we will ask for your bank account code and connect the";
    }
   clicked = !clicked;
}

function addAccount(){
  var error="";
  var name=document.getElementById("cardName").value;
  var cardNumber=document.getElementById("cardNumber").value;
  var cardPatter=/^[0-9].{15,}/;
  var Cvv=document.getElementById("CVV").value;
  var expdate=document.getElementById("date").value;
   if ((name=="")|| (cardNumber=="") || (Cvv=="") || (expdate=="")){
        error="<p>You must input all of your feild to add your card account</p>";
      }
      else if(!cardNumber.match(cardPatter))
      {
        error+="Your card number  format in unvalid";
      }
      if(error!=""){
        document.getElementById("Added").style.display="none";
        document.getElementById("Denied").style.display="block";
        document.getElementById("Denied").innerHTML=error;
      }else{
        document.getElementById("Denied").style.display="none";
        document.getElementById("Added").style.display="block";
        document.getElementById("Added").innerHTML="Your card number was added succesfully and you can now purchase anything using this card";
      }
 
}
function contact(){
  var email=document.getElementById("contact-email").value;
  var message=document.getElementById("contact-message").value;
  var format= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((email=="")||(message=="")){
    alert("There has been a problem and we couldn't send your message . please make sure to input a valid email and a message ");
  }else if (!email.match(format)) {
     alert("Your email format is unvalid");
  }else{
    alert("Your message was sent succesfully. we will be back at you on your email within 2 to 5 days");
  }
}