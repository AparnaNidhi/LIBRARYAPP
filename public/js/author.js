function changeView(mode){
    if(mode=="edit")
    {
        document.getElementById("title").disabled=false;
        document.getElementById("about").disabled=false;
        document.getElementById("save").innerHTML="Save";
        document.getElementById("imgdiv").hidden=false;
        document.getElementById("edit").disabled=true;
    }

}

function getAction(){
    
    if(document.getElementById("save").innerHTML=="Save"){
        return "/authors/update";
    }
    else{
        return "/authors/delete";
    }
    
}