function SearchNames()
{
    var checkingName=true;
    var arrNames = ["Tanvi","Jeel","Ishu","Rashmi","Parul","Harshil","Priya","Riya","Prachi","Nirav","Kodee","Himadri","Yagnesh"];
    
    var searchName=document.getElementById("searchBar").value.toLowerCase();

    for(var i=0;i<arrNames.length;i++)
    {
        if((arrNames[i].toLowerCase())==searchName)
        {
            window.location.href="#pic"+(i+1);
            checkingName=false;
            break;
        }
    }
    if(checkingName)
        alert("Please Enter Valid Doctor's name");
}