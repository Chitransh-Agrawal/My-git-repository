


function viewMore(){
    
    document.getElementById("city-cards").style.display = "grid";
    document.getElementById("view-more-button").innerText="View Less";
}

function getName(str){
    console.log(str);
    sessionStorage.setItem("HHH", str);

}

localStorage.setItem("HHH","jabalpur");

//sessionStorage.setItem("hotel_name", document.getElementsById('delhi').value);