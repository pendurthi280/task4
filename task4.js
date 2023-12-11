function validategender()
 {
    let x = document.forms["form"]["gender"].value;
    if (x == "male") 
    {
      
       alert("Hi sir");
    }
    else
    {
        alert(" Hi Madam");
    }

 }


function validate()
{
   var username = document.getElementById("name");
   var useremail = document.getElementById("email");
   var mailformat = /^[a-zA-z0-9.-]+@[a-zA-z0-9.-]+\.[a-z]{2}\.[a-z]{2}$/;
   var  Organization = document.getElementById("organization");
   var website=document.getElementById("address");
   if(username.value=="")
   {
     document.getElementById("error").innerHTML ="enter a name";
   }
   if(useremail .value=="")
   {
     document.getElementById("error1").innerHTML ="enter a email";
   }
   else 
   {
      if( useremail.value.match(mailformat))
      {
        document.getElementById("error1").innerHTML ="correct";
      }
      else
      {
        document.getElementById("error1").innerHTML ="enter correct mail id";
      }

   }

   if(Organization.value=="")
   {
     document.getElementById("error2").innerHTML ="enter name of org";
   }
    
   if(website.value=="")
   {
    document.getElementById("error3").innerHTML ="enter name of website";
   }
    
}

/*function clearform()
     {
        var username = document.getElementById("name");
        var useremail = document.getElementById("email");
        var  Organization = document.getElementById("organization");
        var  phone = document.getElementById("phone");
        var  city= document.getElementById("city");
        var  code= document.getElementById("code");
        var  address= document.getElementById("address");
        var aboutorgnization = document.getElementById("aboutorgnization");
        var  textarea = document.getElementById("textarea");
         username.value = "";
         useremail.value = "";
         Organization.value = "";
         phone.value = "";
         city.value="";
         code.value="";
         address.value="";
         aboutorgnization.value="";
         textarea.value="";
         if( document.getElementById("error").innerHTML == "enter a name"||document.getElementById("error1").innerHTML == "enter a email"||document.getElementById("error3").innerHTML == "enter name of org")
         {
          document.getElementById("error").innerHTML = "*";
          document.getElementById("error1").innerHTML = "*";
          document.getElementById("error2").innerHTML = "*";
         }
         var ele = document.getElementsByName("contact1");
         for(var i=0;i<ele.length;i++)
             ele[i].checked = false;
      }*/


  function clearform()
      {
        document.getElementById("form").reset();
        if( document.getElementById("error").innerHTML == "enter a name"||document.getElementById("error1").innerHTML == "enter a email"||document.getElementById("error2").innerHTML == "enter name of org"||document.getElementById("error3").innerHTML == "enter name of website")
         {
          document.getElementById("error").innerHTML = "*";
          document.getElementById("error1").innerHTML = "*";
          document.getElementById("error2").innerHTML = "*";
          document.getElementById("error3").innerHTML = "*";

         }
      
      }

    
    



    function promo()
    {
      
      var state = document.getElementById("dropdown").value;
      var promo = state + " - PROMO";
      document.getElementById("code").value = promo;
    }
