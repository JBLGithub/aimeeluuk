function languageChange(language)
{
	if(language == "FR")
	{
		document.getElementById("welcometitle").innerHTML = "Bienvenue sur la page de notre mariage!";
		document.getElementById("welcometext").innerHTML = "Sur cette page, vous trouverez les informations n&eacutecessaires pour le mariage.";
		
		document.getElementById("datelocationtitle").innerHTML = "Dates, Emplacements et le Code Vestimentaire";                                                                                
                document.getElementById("datelocationtext").innerHTML = "Tenez-vous au courant du lieu et de l'heure.";
		document.getElementById("datelocationtiming").innerHTML = "Veuillez-vous presenter &aacute 30 Hakkesstraat, 5916 PX Venlo pour 14h00."
		document.getElementById("datelocationdress").innerHTML = "Le code vestimentaire est color&eacute et festif!"

		document.getElementById("donationtitle").innerHTML = "Cadeau de mariage";
		document.getElementById("donationtext").innerHTML = "Nous sommes ravis que vous vous soyez rendu &aacute notre mariage. Si vous souhaitez apporter une contribution &aacute notre voyage de noces, veuillez utiliser le lien ci-dessous:";
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

		document.getElementById("datelocationtitle").innerHTML = "Dates, Location and Dress Code";
		document.getElementById("datelocationtext").innerHTML = "Please familiar yourself with where you need to be and when.";
		document.getElementById("datelocationtiming").innerHTML = "Please arrive at 30 Hakkesstraat, 5916 PX Venlo on the 2nd of July for 2.00PM."
		document.getElementById("datelocationdress").innerHTML = "The dress code is Colourful and Festive!"
		
		document.getElementById("donationtitle").innerHTML = "Wedding Gift";
		document.getElementById("donationtext").innerHTML = "We are delighted that you have made it to our wedding. If you do wish to make a contribution towards our honeymoon please use the link below:";
		console.log("English");
	}
}
