function changeView(mode){
    if(mode=="edit")
    {
        document.getElementById("title").disabled=false;
        document.getElementById("author").disabled=false;
        document.getElementById("genre").disabled=false;
        document.getElementById("save").innerHTML="Save";
        document.getElementById("imgdiv").hidden=false;
        document.getElementById("edit").disabled=true;
    }

}

function getAction(){
    
    if(document.getElementById("save").innerHTML=="Save"){
        return "/addbook/update";
    }
    else{
        return "/addbook/delete";
    }
    
}