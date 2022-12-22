function submitComment()
{
    var fName,lName;

    fName=document.getElementById("fName").value;
    lName=document.getElementById("lName").value;

    if(fName=="" || lName=="")
        alert("Please Enter your name properly");
    else
        alert("Thank you "+ fName+" "+ lName +" for contacting us.");
}