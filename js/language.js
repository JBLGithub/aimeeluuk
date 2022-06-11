function languageChange(language)
{
	if(language == "FR")
	{
		document.getElementById("welcometitle").innerHTML = "Bienvenue sur la page de notre mariage!";
		document.getElementById("welcometext").innerHTML = "Sur cette page, vous trouverez les informations necessaires pour le mariage.";
		
		document.getElementById("datelocationtitle").innerHTML = "Dates et Emplacements";                                                                                
                document.getElementById("datelocationtext").innerHTML = "Tenez-vous au courant du lieu et de l'heure.";
		document.getElementById("datelocationtiming").innerHTML = "Veuillez-vous presenter a 30 Hakkesstraat, 5916 PX Venlo pour 14h00."

		document.getElementById("donationtitle").innerHTML = "Cadeau de mariage";
		document.getElementById("donationtext").innerHTML = "Nous sommes ravis que vous vous soyez rendu à notre mariage. Si vous souhaitez apporter une contribution à notre voyage de noces, veuillez utiliser les informations ci-dessous";
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
		document.getElementById("datelocationtiming").innerHTML = "Please arrive at 30 Hakkesstraat, 5916 PX Venlo for 2.00PM."
		
		document.getElementById("donationtitle").innerHTML = "Wedding Gift";
		document.getElementById("donationtext").innerHTML = "We are delighted that you have made it to our wedding. If you do wish to make a contribution towards our honeymoon please use the information below:";
		console.log("English");
	}
}
