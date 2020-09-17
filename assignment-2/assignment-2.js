fetch("data.json")
.then((res)=>{
	return res.json();
})
.then((data)=>{
	console.log("fetch API");
	console.log(data);
	applications(data.applications);
	console.log(data.applications);

});
//implementing the code

var main=document.getElementById("main");
console.log(main);
//create h1 tag to display the name Displaying Cards
var DisplayName=document.createElement("h1");
//write the text in h1 tag
DisplayName.textContent="Displaying Cards";
//add child to the parent
main.appendChild(DisplayName);

//createing card
//var section=document.createElement("section");
//section.setAttribute("class","card");
//var image = document.createElement("img");
//image.src = "img.jpg";
//image.alt = "Profile Image";

//section.appendChild(image);

//function for getting applicants array data
var section1=document.createElement("section");
section1.classList.add("profiles");

function applications(applicantion){
	// create for-loop

	for(i in applicantion){
		let cardDiv=document.createElement("div");
		cardDiv.classList.add("application");

		var image=document.createElement("img");
		image.src="img.jpg";
		image.alt=applicantion[i].name+"image";
		cardDiv.appendChild(image);

		let name=document.createElement("h2");
		name.textContent=applicantion[i].name;
		cardDiv.appendChild(name);

		//phone number
		let PhoneNo=document.createElement("h2");
		PhoneNo.textContent=applicantion[i].PhoneNo;
		cardDiv.appendChild(PhoneNo);

		//email
		let email=document.createElement("h2");
		email.textContent=applicantion[i].email;
		cardDiv.appendChild(email);

		//address
		let address=document.createElement("h2");
		address.textContent=applicantion[i].address;
		cardDiv.appendChild(address);

		// anchor tag to refer another(Resume) page
    	let anch = document.createElement("a");
    	anch.href = applicantion[i].anch;
    	cardDiv.appendChild(anch);

		//button for directing to resume
		let btn=document.createElement("button");
		btn.textContent="click me";
		anch.appendChild(btn);

		section1.appendChild(cardDiv);

	}
	//end of loop

}

//main.appendChild(section);
main.appendChild(section1);


  