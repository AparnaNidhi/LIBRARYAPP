function validate(){
    let name=document.getElementById("name").value;
    let email= document.getElementById("mail").value;
    let pwd=document.getElementById("pwd").value;
    let confirmpwd=document.getElementById("cpwd").value;
    let address=document.getElementById("address").value;
    let state= document.getElementById("state").value;
   

    console.log(state);
    console.log(pwd);
    if (name =="" ||email =="" || pwd =="" || address == "" || state == "" )
    {
    alert("Please enter the required fields");
    return false;
    }
    else{
        let pwdValid = validatePassword(pwd,confirmpwd);
        if (pwdValid == true)
        {
                let mailValid =  validateEmail(email);
                if (mailValid == true)
                {
                        return true
                }
                else
                {
                        return false;
                }
           
        }
        else
        {
           return false; 
        }
    }

   }

   
function validateEmail(email){

    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    
        
        if(regexp.test(email))
        {
            console.log("Passed email check");
            return true;
    
        }
        else
        {
            console.log(`Failed email check for ${email}`);
            alert(`${email} should be in example@domain.xxx.xxx`)
            return false;
        }
    
    }
    
     function validatePassword(pwd,cpwd){
        if (pwd.length < 8)  
        {
            alert("Minimum password length is 8.");
            return false;
        }
        else if(pwd.trim() != cpwd.trim()){
            alert("Passwords donot match");
            return false;
        }
        else 
        {
            return true;
        }
    }

    function checkPwdStrength(password){

        if (password.length === 0) {
            document.getElementById("msg").innerHTML = "";
            return;
        }
        var matchedCase = new Array();
        matchedCase.push("[!@#$%^&*]"); 
        matchedCase.push("[A-Z]");      
        matchedCase.push("[0-9]");      
        matchedCase.push("[a-z]");     

        
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(password)) {
                ctr++;
            }
        }
      
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
            case 1:
            case 2:
                strength = "Strength:Very Weak";
                color = "red";
                break;
            case 3:
                strength = "Strength:Medium";
                color = "orange";
                break;
            case 4:
                strength = "Strength:Strong";
                color = "green";
                break;
        }
        document.getElementById("msg").innerHTML = strength;
        document.getElementById("msg").style.color = color;
}