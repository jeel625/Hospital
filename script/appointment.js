var checkingFunction=flase;
function submitAppointment()
{
    var tempName,tempLastname,number,tempDate,tempTime,e,gender,email,city,doctor,appointMent;

    tempName=document.getElementById("fname").value;
    tempLastname=document.getElementById("lname").value;
    number=document.getElementById("getNumber").value;

    e=document.getElementById("getGender");
    gender=e.options[e.selectedIndex].text;

    tempDate=document.getElementById("getDate").value;

    e=document.getElementById("getTime");
    tempTime=e.options[e.selectedIndex].text;

    email=document.getElementById("email").value;
    city=document.getElementById("city").value;

    e=document.getElementById("appointment");
    appointMent=e.options[e.selectedIndex].text;

    e=document.getElementById("doctor");
    doctor=e.options[e.selectedIndex].text;


    if(tempName=="" || tempLastname=="" || number=="" || tempDate=="" || tempTime=="" || gender=="" || email=="" || city=="" || doctor=="" || appointMent=="")
    {
        alert("First fill all the fields ");
    }
    else
    {
        setCookie("fname",tempName,10);
        setCookie("lname",tempLastname,10);
        setCookie("getNumber",number,10);
        setCookie("getGender",gender,10);
        setCookie("getDate",tempDate,10);
        setCookie("getTime",tempTime,10);
        setCookie("email",email,10);
        setCookie("city",city,10);
        setCookie("appointment",appointMent,10);
        setCookie("doctor",doctor,10);
        checkingFunction=true;
        window.open("./appointmnetInformation.html","_self");
    }
}
function checkSizeOfNumbers()
{
    let number = document.getElementById("getNumber").value;
    let regExp = /^\d{10}$/;

    if( regExp.test(number) == false)
       return false;
    else
     return true;
}

function setCookie(userName, cvalue, exmins) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exmins *  60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = userName + "=" + cvalue + ";" + expires + ";path=/";
}

function timeCounter()
{
    var start=new Date().getTime();
    var time;
    document.getElementById('button').onclick =function()
    {
        if(checkSizeOfNumbers())
        {
            submitAppointment();
            var end=new Date().getTime();
            time=((end-start)/1000);
    
            if(time>60)
                alert('It tooks '+Math.floor(time/60)+" minutes and "+Math.floor(time%60)+" seconds");
            else
                alert('it took '+Math.floor(time)+' seconds');
        }
        else
            alert("Number of digits should be 10");
    }
}

function getCookie(coockieUserName)
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

function appointment()
{
    document.getElementById("fname").innerHTML=getCookie("fname");
    document.getElementById("lname").innerHTML=getCookie("lname");
    document.getElementById("Mobile").innerHTML=getCookie("getNumber");
    document.getElementById("gender").innerHTML=getCookie("getGender");
    document.getElementById("tempDate").innerHTML=getCookie("getDate");
    document.getElementById("tempTime").innerHTML=getCookie("getTime");
    document.getElementById("email").innerHTML=getCookie("email");
    document.getElementById("city").innerHTML=getCookie("city");
    document.getElementById("appointment").innerHTML=getCookie("appointment");
    document.getElementById("doctor").innerHTML=getCookie("doctor");
}
function getHome()
{
    window.open("./homePage.html","_self");
}