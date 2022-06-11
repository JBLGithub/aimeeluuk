function languageChange(language)
{
	if(language == "FR")
	{
		document.getElementById("welcometitle").innerHTML = "Bienvenue sur la page de notre mariage!";
		document.getElementById("welcometext").innerHTML = "Sur cette page, vous trouverez les informations necessaires pour le mariage.";
		
		document.getElementById("datelocationtitle").innerHTML = "Dates et Emplacements";                                                                                
                document.getElementById("datelocationtext").innerHTML = "Tenez-vous au courants des heures.";

		document.getElementById("donationtitle").innerHTML = "Donnes";
		document.getElementById("donationtext").innerHTML = "Nous apprecions toutes donnes pour contribuer envers le mariage.";
		console.log("French");
	}
	else if(language == "NL")
	{
		console.log("Dutch");
	}
	else
	{
		document.getElementById("welcometitle").innerHTML = "Welcome to our wedding page!";
		document.getElementById("welcometext").innerHTML = "On this page, you will find all the information you need involving the wedding.";

		document.getElementById("datelocationtitle").innerHTML = "Dates and Location";
		document.getElementById("datelocationtext").innerHTML = "Please familiar yourself with where you need to be and when.";
		
		document.getElementById("donationtitle").innerHTML = "Donations";
		document.getElementById("donationtext").innerHTML = "We appreciate any donations to contribute towards the wedding.";
		console.log("English");
	}
}
