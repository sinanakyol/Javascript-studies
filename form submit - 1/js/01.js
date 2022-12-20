let fname;
let lname;
let phone;
let address;
function handleSubmit(e){
	e.preventDefault();
  console.log("username:" +fname+" "+ lname+"-"+ "phonenumber:"+ phone+"-"+ "address:"+address )
}
function handleChange(e){
	if(e.target.name === "fname"){
  	fname = e.target.value;
  }
  if(e.target.name === "lname"){
  	lname = e.target.value;
  }
  if(e.target.name === "phone"){
  	phone = e.target.value;
  }
  if(e.target.name === "address"){
  	address = e.target.value;
  }
}