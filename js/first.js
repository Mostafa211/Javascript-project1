

var siteNames = document.getElementById("siteName");
var siteURLs = document.getElementById("siteURL");


var siteList ;

if(localStorage.getItem("myBookmarks") == null){
    siteList = [];
}
else{
    siteList = JSON.parse(localStorage.getItem("myBookmarks"));
    displayBookmark();
}

function addSite()
{
    if(siteNames.value == "" || siteURLs.value == ""){
        window.alert("please fill both fields");
    }

    else {    
    var site =
    {   
        siteName: siteNames.value,
        siteURL: siteURLs.value
    }

    siteList.push(site);
    localStorage.setItem("myBookmarks" , JSON.stringify(siteList))
    displayBookmark();
    clearForm();
    }
}

function displayBookmark(){
    var siteContent = "";
    for(var i = 0 ; i < siteList.length ; i++){
        
        siteContent += `<div class="container site d-flex">

		<h2>${siteList[i].siteName}</h2>

		<a class="mx-1" href="${siteList[i].siteURL}" target="_blank"><button class="btn btn-primary visit">visit</button></a>
		<button onclick="deleteBookmark(${i})" class="btn btn-danger mx-1">Delete</button>

	    </div>`;


    }

    document.getElementById('column').innerHTML = siteContent;

}


function clearForm(){
    siteNames.value = "";
    siteURLs.value = "";
}

function deleteBookmark(index){

    siteList.splice(index , 1);
    localStorage.setItem("myBookmarks" , JSON.stringify(siteList))
    displayBookmark();
}