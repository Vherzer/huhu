
var myObj, i, x = ""; 
var People ={
				"Amy" :[{
					"Name": "Amy",
					"Surname": "Sayer",
					"Gender": "female",
					"Age": 23,
					"Location": "Amsterdam",
					"inRelation": false,
					"Photo": "img/Amy.jpg"
				}],
				"Brad": [{
					"Name": "Brad",
					"Surname": "Miller",
					"Gender": "male",
					"Age": 25,
					"Location": "Toronto",
					"inRelation": false,
					"Photo": "img/Brad.jpg"	

				}],
				"Clara": [{
					"Name": "Clara",
					"Surname": "Fahl",
					"Gender": "female",
					"Age": 30,
					"Location": "Berlin",
					"inRelation": false,
					"Photo": "img/Clara.jpg"	
				}],
				"Donald":[{
					"Name": "Donald",
					"Surname": "Lump",
					"Gender": "male",
					"Age": 26,
					"Location": "New York",
					"inRelation": true,
					"Photo": "img/Donald.jpg"		
				}],
				"Elena":[{
					"Name": "Elena",
					"Surname": "Kitz",
					"Gender": "female",
					"Age": 24,
					"Location": "Rio di Janero",
					"inRelation": false,
					"Photo": "img/Elena.jpg"
				}],
				"Frank": [{
					"Name": "Frank",
					"Surname": "Giovanni",
					"Gender": "male",
					"Age": 27,
					"Location": "Venice",
					"inRelation": false,
					"Photo": "img/Frank.jpg"
				}],
				"Gigi": [{
					"Name": "Gigi",
					"Surname": "Neem",
					"Gender": "female",
					"Age": 22,
					"Location": "California",
					"inRelation": true,
					"Photo": "img/Gig.jpg"
				}],
				"Harry": [{
					"Name": "Harry",
					"Surname": "Thompson",
					"Gender": "male",
					"Age": 26,
					"Location": "London",
					"inRelation": false,
					"Photo": "img/Harry.jpg"
				}],
				"Isla": [{
					"Name": "Isla",
					"Surname": "MacDonald",
					"Gender": "female",
					"Age": 23,
					"Location": "Dublin",
					"inRelation": true,
					"Photo": "img/Isla.jpg"
				}],
				"Jack":[{
					"Name": "Jack",
					"Surname": "Van der Wall",
					"Gender": "male",
					"Age": 25,
					"Location": "Amsterdam",
					"inRelation": false,
					"Photo": "img/Jack.jpg"
				}],
				"Karoline":[{
					"Name": "Karoline",
					"Surname": "Mayer",
					"Gender": "female",
					"Age": 24,
					"Location": "Vienna",
					"inRelation": false,
					"Photo": "img/Karoline.jpg"
				}],
				"Lenny":[{
					"Name": "Lenny",
					"Surname": "Schmidt",
					"Gender": "male",
					"Age": 29,
					"Location": "Berlin",
					"inRelation": false,
					"Photo": "img/Lenny.jpg"
				}],
				"Maya": [{
					"Name": "Maya",
					"Surname": "Macdougle",
					"Gender": "female",
					"Age": 29,
					"Location": "Dublin",
					"inRelation": false,
					"Photo": "img/Maya.jpg"
				}],
				"Nino": [{
					"Name": "Nino",
					"Surname": "Piallo",
					"Gender": "male",
					"Age": 26,
					"Location": "Rome",
					"inRelation": true,
					"Photo": "img/Nino.jpg"
				}],
				"Olga": [{
					"Name": "Olga",
					"Surname": "Wyzymki",
					"Gender": "female",
					"Age": 29,
					"Location": "Warsaw",
					"inRelation": false,
					"Photo": "img/Olga.jpg"
				}],
				"Paul": [{
					"Name": "Paul",
					"Surname": "Carrigan",
					"Gender": "male",
					"Age": 30,
					"Location": "London",
					"inRelation": false,
					"Photo": "img/Paul.jpg"
				}],
				"Quinn": [{
					"Name": "Quinn",
					"Surname": "Fabrey",
					"Gender": "female",
					"Age": 31,
					"Location": "California",
					"inRelation": false,
					"Photo": "img/Quinn.jpg"
				}],
				"Rudi": [{
					"Name": "Rudi",
					"Surname": "Weinmann",
					"Gender": "male",
					"Age": 29,
					"Location": "Vienna",
					"inRelation": true,
					"Photo": "img/Rudi.jpg"
				}],
				"Sarah": [{
					"Name": "Sarah",
					"Surname": "Golding",
					"Gender": "female",
					"Age": 28,
					"Location": "Toronto",
					"Photo": "img/Sarah.jpg"
				}],
				"Theo": [{
					"Name": "Theo",
					"Surname": "Pedigrom",
					"Gender": "male",
					"Age": 23,
					"Location": "New York",
					"Photo": "img/Theo.jpg"
				}]
			};
/*for (x in People) {
	document.getElementById("output").innerHTMl+= People[x] + "<br>";
}*/
for (i in People.Amy){
	x += People.Amy[i] + "<br>";
}
document.getElementById("output").innerHTML= x;
		
/*for (i in People){
	document.getElementById("output").innerHTML += People[i] + "<br>";

}
			


/*$(document).ready(){
	console.log(People.Amy.Photo);
	var alt = People.Amy.Photo;
	var mhtml="";
	$.each(People.Amy.Photo)
}


$ for (var i = 0; i<People.length; i++){
	console.log(People);
}


/*function allPeople(name, gender, age, location){
	this.Name = name;
	this.Gender = gender;
	this.Age = age;
	this. Location = location;
}

console.log(People.name);*/