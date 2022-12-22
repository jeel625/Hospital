
function LogIn()
{
    if (document.getElementById('userName') != null) 
    {
        username = document.getElementById("userName").value;
    }
    if (document.getElementById('passWord') != null) 
    {
        password = document.getElementById("passWord").value;
    }

    if((username == "admin" && password == "password")||(username== getUserName("username") && password==getPassword("password")))
    {
        alert("Welcome to  Web Site "+username);
        window.open("homePage.html","_self");
    }
    else
        alert("Enter valid password and id");
}

function ConfirmUser()
{
        var checkingRadio=false,confirmingPassword=false,checkingFields=true;
        var category=document.getElementsByName("radio");
        var radioValue;
        for(var i=0;i<category.length;i++)
        {
            if(category[i].checked)
            {
                radioValue=category[i].value;
                checkingRadio=true;
            }   
        }

        if (document.getElementById('userName') != null) 
        {
            var userName = document.getElementById("userName").value;
        }
        if (document.getElementById('lastName') != null) 
        {
            var lastname = document.getElementById("lastName").value;
        }
        if (document.getElementById('email') != null) 
        {
           var email = document.getElementById("email").value;
        }
        if (document.getElementById('password') != null) 
        {
           var passWord = document.getElementById("password").value;
        }
        if (document.getElementById('ConfirmPassword') != null) 
        {
           var confirmPassword = document.getElementById("ConfirmPassword").value;
        }

        if(checkingRadio==false)
        {
            checkingFields=false;
            alert("please click the category");
        }
            
        if(userName=="")
        {
            checkingFields=false;
            alert("enter username");
        }

        if(lastname=="")
        {
            checkingFields=false;
            alert("enter lastname");
        }
 
        if(email=="")
        {
            checkingFields=false;
            alert("enter email");
        }       

        if(passWord=="")
        {
            checkingFields=false;
            alert("enter password");
        }
 
        if(confirmPassword=="")
        {
            checkingFields=false;
            alert("enter password");
        }

        if(passWord==confirmPassword)
        {
            confirmingPassword=true;
        }
        else
            alert("Confirm Password should be the same");

        if(confirmingPassword && checkingFields && checkingRadio)
        {
           setCookieUserName("username",userName,10);
           setCookiePassword("password",passWord,10);
            alert("you have created a account succesfully"+"\n"+
                    "Welcome to our website "+getUserName("username"));
            window.open("index.html","_self");
        }
}

function setCookieUserName(userName, cvalue, exmins) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exmins *  60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = userName + "=" + cvalue + ";" + expires + ";path=/";
}
function setCookiePassword(password, cvalue, exmins) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exmins *  60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = password + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getUserName(coockieUserName)
{
    let name = coockieUserName + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        {
                c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
    }
}
return "";
}

function getPassword(password)
{
    let name = password + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
}
return "";
}
