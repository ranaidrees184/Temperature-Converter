// function cal( temp);
// function far(temp);
function tocalcius(temperature)
{
     return (temperature - 32)*(9/5);
}

function tofarhenheit(temperature){
    return (temperature * 9/5) + 32;

}

document.getElementById("calculate").onclick = function(){
    let temperature;
    if(document.getElementById("cal").checked){
            temperature= document.getElementById("textbox").value;
            temperature=Number(temperature);
            temperature=tocalcius(temperature);
            console.log(temperature);
            document.getElementById("after").innerHTML = temperature + "C";
    }

    else if(document.getElementById("far").checked){
        temperature= document.getElementById("textbox").value;
        temperature=Number(temperature);
        temperature= tofarhenheit(temperature);
        console.log(temperature);
        document.getElementById("after").innerHTML = temperature + "F ";
    }
     else{
        document.getElementById("after").innerHTML = "You have to select to convert it";
    }
}

