var names = [];
function Submit(){
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    console.log(names);

    document.getElementById("displayName").innerHTML=names;

    document.getElementById("submitBtn").style.display="none";
    document.getElementById("sortBtn").style.display="inline-block";
}

function Sorting(){
    names.sort();
    console.log(names)
    document.getElementById("displayName").innerHTML=names;
}