
window.addEventListener('load', function() {
    document.getElementById('Submit').addEventListener('click', isValid);
    function isValid() {  
        if (firstName() && lastName() &&email() &&phone () && username() && password() && address() && country() &&state() && city() && zipcode()
        ){
        return true;
        }
        else{
            var suberror = document.getElementById("submiterror")
            suberror.innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
            suberror.className='warning';
            return false;
            }
        }
        var FirstName=document.getElementById("FirstName");
        var LastName=document.getElementById("LastName");
        var Email=document.getElementById("Email");
        var Phone=document.getElementById("Phone");
        var Username=document.getElementById("Username");
        var Password=document.getElementById("Password");
        var Address=document.getElementById("Address");
        var Country=document.getElementById("Country");
        var State=document.getElementById("State");
        var City=document.getElementById("City");
        var Zip=document.getElementById("zip");
    
    
    FirstName.addEventListener("blur",firstName,false);
    LastName.addEventListener("blur",lastName,false);
    Email.addEventListener("blur",email,false);
    Phone.addEventListener("blur",phone,false);
    Username.addEventListener("blur",username,false);
    Password.addEventListener("blur",password,false);
    Address.addEventListener("blur",address,false);
    Country.addEventListener("blur",country,false);
    State.addEventListener("blur",state,false);
    City.addEventListener("blur",city,false);
    Zip.addEventListener("blur",zipcode,false);
    
    
    function firstName(){
        //1) Create variable
        var validFirstname=false;
    
        //2) read value from HTML
        var firstname = document.getElementById("FirstName").value;
        var errorMessages = "";
    
        //3) Do validation
        if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
            errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
            // firstname.class="errorBorder";
            console.log("First name invalid — length")
            } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
                errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
                console.log("First name invalid — bad characters")
            } else {
                    validFirstname = true;
                    console.log("First name valid")
            };
    
        //4) Send error message to HTML
        var error =document.getElementById("errorMessages1");
        error.innerHTML = errorMessages;
        error.className='warning';
    
        //5) return status of each field
        return (validFirstname);
    };
    function lastName(){
        //1) Create variable
        var validLastname=false;
    
        //2) read value from HTML
        var lastname = document.getElementById("LastName").value;
        var errorMessages = "";
    
        //3) Do validation
        if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
            errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
    
            console.log("Last name invalid — length")
            } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
                errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
                console.log("Last name invalid — bad characters")
            } else {
                    validLastname = true;
                    console.log("Last name valid")
            };
    
        //4) Send error message to HTML
        var errorL =document.getElementById("errorMessages2");
        errorL.innerHTML = errorMessages;
        errorL.className='warning';
        //5) return status of each field
        return (validLastname);
    };
    
    function email(){
        //1) Create variable
        var validEmail=false;
    
        //2) read value from HTML
        var email = document.getElementById("Email").value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        var errorMessages = "";
    
        //3) Do validation
        if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=Email.length) {
            errorMessages += "<p>Invalid email </p>";
    
            console.log("Email invalid — length")
            } else {
                    validEmail = true;
                    console.log("Email valid")
            };
    
        //4) Send error message to HTML
        var errorE =document.getElementById("errorMessages3");
        errorE.innerHTML = errorMessages;
        errorE.className='warning';
        //5) return status of each field
        return (validEmail);
    };
    
    function phone(){
        //1) Create variable
        var validPhone=false;
    
        //2) read value from HTML
        var phone = document.getElementById("Phone").value;
        var errorMessages = "";
    
        //3) Do validation
        if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
            errorMessages += "<p>Invalid phone number </p>";
    
            console.log("Phone invalid — length")
            } else {
                    validPhone = true;
                    console.log("Phone valid")
            };
    
        //4) Send error message to HTML
        var errorP =document.getElementById("errorMessages4");
        errorP.innerHTML = errorMessages;
        errorP.className='warning';
    
        //5) return status of each field
        return (validPhone);
    };
    
    function username(){
        //1) Create variable
        var validUsername=false;
    
        //2) read value from HTML
        var username = document.getElementById("Username").value;
        var errorMessages = "";
    
        //3) Do validation
        if (username==="null" || username==="" || username.length > 12 ) {
            errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
    
            console.log("Username invalid — length")
            } else {
                    validUsername = true;
                    console.log("Username valid")
            };
    
        //4) Send error message to HTML
        var errorU =document.getElementById("errorMessages5");
        errorU.innerHTML = errorMessages;
        errorU.className='warning';
    
        //5) return status of each field
        return (validUsername);
    };
    
    function password(){
        //1) Create variable
        var validPassword=false;
    
        //2) read value from HTML
        var password = document.getElementById("Password").value;
        var errorMessages = "";
    
        //3) Do validation
        if (password==="null" || password==="" || password.length > 7 ) {
            errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
    
            console.log("Password invalid — length")
            } else {
                    validPassword = true;
                    console.log("Password valid")
            };
    
        //4) Send error message to HTML
        var errorPa =document.getElementById("errorMessages6");
        errorPa.innerHTML = errorMessages;
        errorPa.className='warning';
    
        //5) return status of each field
        return (validPassword);
    };
    
    function address(){
        //1) Create variable
        var validAddress=false;
    
        //2) read value from HTML
        var address = document.getElementById("Address").value;
        var errorMessages = "";
    
        //3) Do validation
        if (address===null || address==="") {
            errorMessages += "<p>Address required </p>";
    
            console.log("Address requred")
            } else {
                    validAddress = true;
                    console.log("Address valid")
            };
    
        //4) Send error message to HTML
        var errorA =document.getElementById("errorMessages7");
        errorA.innerHTML = errorMessages;
        errorA.className='warning';
    
        //5) return status of each field
        return (validAddress);
    };
    
    function country(){
        //1) Create variable
        var validCountry=false;
    
        //2) read value from HTML
        var country = document.getElementById("Country");
        var index =country.selectedIndex;
        var value = country.options[index].value;
        var errorMessages = "";
        console.log(value);
    
        //3) Do validation
        if (value=="000") {
            errorMessages += "<p>Country required </p>";
            console.log("Country requred")
            } else {
                    validCountry = true;  
                    console.log("Country valid")
            };
        //4) Send error message to HTML
        var errorC =document.getElementById("errorMessages8");
        errorC.innerHTML = errorMessages;
        errorC.className='warning';
    
    
        //5) return status of each field
        return (validCountry);
    };
    
    function state(){
        //1) Create variable
        var validState=false;
    
        //2) read value from HTML
        var state = document.getElementById("State");
        var index =state.selectedIndex;
        var value = state.options[index].value;
        var errorMessages = "";
        console.log(value);
    
        //3) Do validation
        if (value=='000') {
            errorMessages += "<p>State required </p>";
            console.log("State requred")
            } else {
                    validState = true;
                    console.log("State valid")
            };
    
        //4) Send error message to HTML
        var errorS =document.getElementById("errorMessages9");
        errorS.innerHTML = errorMessages;
        errorS.className='warning';
    
         //5) return status of each field
         return (validState);
    };
    
    function city(){
        //1) Create variable
        var validCity=false;
    
        //2) read value from HTML
        var city = document.getElementById("City");
        var index =city.selectedIndex;
        var value = city.options[index].value;
        var errorMessages = "";
        console.log(value);
        var errorMessages = "";
    
        //3) Do validation
        if (value=='000') {
            errorMessages += "<p>City required </p>";
            console.log("City required")
            } else {
                    validCity = true;
                    console.log("City valid")
            };
    
        //4) Send error message to HTML
        var errorCi =document.getElementById("errorMessages10");
        errorCi.innerHTML = errorMessages;
        errorCi.className='warning';
    
         //5) return status of each field
         return (validCity);
    };
    
    function zipcode(){
        //1) Create variable
        var validZip=false;
    
        //2) read value from HTML
        var zip = document.getElementById("zip").value;
        var errorMessages = "";
    
        //3) Do validation
        if (isNaN(zip) || zip.length !=5 || zip===null || zip==="") {
            errorMessages += "<p>Invalid ZipCode </p>";
    
            console.log("Invalid ZipCode")
            } else {
                    validZip = true;
                    console.log("ZipCode valid")
            };
    
        //4) Send error message to HTML
        var errorZ =document.getElementById("errorMessages11");
        errorZ.innerHTML = errorMessages;
        errorZ.className='warning';
    
        //5) return status of each field
        return (validZip);
    };

});
