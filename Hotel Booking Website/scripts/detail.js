document.getElementById("adult").addEventListener("change",booking);
document.getElementById("toDate").addEventListener("change",booking);
document.getElementById("fromDate").addEventListener("change",booking);


function booking(){
     let adults = document.getElementById("adult").value;
     let fromDate = new Date(document.getElementById("fromDate").value);
     let toDate = new Date(document.getElementById("toDate").value);
     let total = (toDate.getTime()-fromDate.getTime())*adults*1000/(60*60*1000*24);
     
     if(total !== NaN){
        document.getElementById("price").value=total;
     }
    
    
}
