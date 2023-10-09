document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("submitBtn");
    const popup = document.getElementById("popup");
    const close= document.getElementById("closePopup");
   
     
    submit.addEventListener("click", function (e) {
        e.preventDefault();
    


        // Validate all required fields
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const product = document.querySelectorAll('input[name="product"]:checked');
        const recommend = document.querySelectorAll('input[name="recommend"]:checked');
        const satisfied = document.querySelectorAll('input[name="satisfied"]:checked');

        if (!firstName || !lastName || !dob || !country || genderInputs.length === 0 || !profession || !email || !mobile || product.length===0 || recommend.length===0 || satisfied.length===0) {
            alert("Please fill in all required fields.");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if(!phonePattern.test(mobile))
        {
            alert("Inavlid phone number!!!");
            return;
        }
        
        // Validate email 
        var atSymbol = email.indexOf("@"); 
        var dotSymbol = email.lastIndexOf("."); 
        var spaceSymbol = email.indexOf(" "); 

    if ((atSymbol == -1) ||
        (atSymbol == 0) ||
        (dotSymbol == -1) || 
        (dotSymbol == 0) || 
        (dotSymbol <= atSymbol + 1) || 
        (email.length == dotSymbol + 1) || 
        (spaceSymbol != -1)) { 
            alert("Error !!! Email address is not valid."); 
        return ; 
    } 

        // Display values in the popup if all validations pass
        document.getElementById("resultFirstName").textContent = firstName;
        document.getElementById("resultLastName").textContent = lastName;
        document.getElementById("resultDob").textContent = dob;
        document.getElementById("resultCountry").textContent = country;
        document.getElementById("resultGender").textContent = genderInputs[0].value;
        document.getElementById("resultProfession").textContent = profession;
        document.getElementById("resultEmail").textContent = email;
        document.getElementById("resultMobile").textContent = mobile;
        document.getElementById("resultProduct").textContent = product[0].value;
        document.getElementById("resultRecommend").textContent = recommend[0].value;
        document.getElementById("resultSatisfied").textContent = satisfied[0].value;
        


        


        // Show the popup
        popup.style.display = "block";
    });

    // Hide the popup and reset all values.
    close.addEventListener('click',function(e){
            document.getElementById("popup").style.display = "none";
            document.getElementById("firstName").value="";
            document.getElementById("lastName").value="";
            document.getElementById("dob").value="";
            document.getElementById("country").value="";
            document.getElementById('male').checked=false;
            document.getElementById('female').checked=false;
            document.getElementById('productyes').checked=false;
            document.getElementById('productno').checked=false;
            document.getElementById('recommendyes').checked=false;
            document.getElementById('recommendno').checked=false;
            document.getElementById('satisfiedyes').checked=false;
            document.getElementById('satisfiedno').checked=false;
            document.getElementById("profession").value="";
            document.getElementById("email").value="";
            document.getElementById("mobile").value="";



})
})