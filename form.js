function checkForm()
{
	var error=false; //to znaczy, że danych nie brakuje
	var errorText=""; //komunikat z błędem
	var contactName = document.getElementById("contactName");
	var contactInfo = document.getElementById("info"); 
	var contactEmail = document.getElementById("contactEmail"); 
	if (contactName.value == "")
	{
		error=true;
		document.getElementById("errorName").className="text-danger d-block"; 
	} 
	if (contactEmail.value == "")
	{
		error=true;
		document.getElementById("errorName1").className="text-danger d-block"; 
	} 
	if (contactInfo.value == "")
	{
		error=true;
		document.getElementById("errorName2").className="text-danger d-block"; 
	} 
	if (!error) return true; 
	else
	{
		return false;
	} 
	if(contactEmail.value == "")
	{
		error=true;
	} 
	else
	{
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+[a-zA-Z0-9.-]{2,4}$/;
		if(regex.test(email)==false)
		{
			error=true;
		}
	} 
}