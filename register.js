function register(){

		var name = document.getElementById('register_name').value;
		if(!isNaN(name)){
			alert("Please enter only charachters");
		}
		var checkNaN=/^[a-zA-Z\-]+$/;
		var fname=document.frm.fname.value.match(checkNaN);
		if(fname==null)
			alert("numbers not allowed");
}