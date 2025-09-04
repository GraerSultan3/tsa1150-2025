var gridDisplays = document.getElementsByClassName("eventLineup");
var navbar = document.getElementsByTagName("nav");
var body = document.getElementsByTagName("body")[0];

function dynamicColumnSet(elements)
{
    for (let element = 0; element < elements.length; element++)
    {
        var numChildren = elements[element].childElementCount;
        var stringForm = "";
        for (let i = 0; i < numChildren; i++)
        {
            stringForm += "1fr ";
        }
        elements[element].style.gridTemplateColumns = stringForm;
    }
}

dynamicColumnSet(gridDisplays);
dynamicColumnSet(navbar);
body.style.visibility = "visible";
