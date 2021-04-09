//
function validateForm(){
	
	let name = document.forms["frmCollectWeights"]["name"].value;  
    let age = document.forms["frmCollectWeights"]["age"].value;
	//
	if (name == "" || age=="") {
		alert("Fill Your Data Then Save It");
		return false;

    }   

}
//