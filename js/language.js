function languageChange(language)
{
	if(language == "FR")
	{
		document.getElementById("welcometitle").innerHTML = "Bienvenue sur la page de notre mariage!";
		document.getElementById("welcometext").innerHTML = "Sur cette page, vous trouverez les informations n&eacutecessaires pour le mariage.";
		
		document.getElementById("datelocationtitle").innerHTML = "Dates et Emplacements";                                                                                
        document.getElementById("datelocationtext").innerHTML = "Tenez-vous au courant du lieu et de l'heure.";
		document.getElementById("datelocationtiming").innerHTML = "Veuillez-vous presenter &aacute 30 Hakkesstraat, 5916 PX Venlo pour 14h00.";
		
		document.getElementById("busestitle").innerHTML = "Bus";
		document.getElementById("busestext").innerHTML = "Des bus vers et depuis le site seront fournis.";
		document.getElementById("busestext1").innerHTML = "D&eacutepart du Roompot Vakanties Resort Arcen &aacute 13h30. Le voyage de retour part &aacute 2h00 du matin.";
		document.getElementById("busestext2").innerHTML = "D&eacutepart de Kruisweg 10, 5944 EN Arcen &aacute 13h40. Le voyage de retour part &aacute 2h00.";

		document.getElementById("dresscodetitle").innerHTML = "Code Vestimentaire";
		document.getElementById("dresscodetext").innerHTML = "Le code vestimentaire est color&eacute et festif!";

		document.getElementById("contacttitle").innerHTML = "Contactez Nous";
		document.getElementById("contacttext").innerHTML = "N'h&eacutesitez pas de nous contacter. Nous r&eacutepondrons &aacute vos questions avec plaisir.";

		document.getElementById("donationtitle").innerHTML = "Cadeau de mariage";
		document.getElementById("donationtext").innerHTML = "Nous sommes ravis que vous vous soyez rendu &aacute notre mariage. Si vous souhaitez apporter une contribution &aacute notre voyage de noces, veuillez utiliser le lien ci-dessous:";
		console.log("French");
	}
	else if(language == "NL")
	{
		document.getElementById("welcometitle").innerHTML = "Welkom op onze bruiloft website!";
		document.getElementById("welcometext").innerHTML = "Op deze pagina vindt u alle informatie met betrekking tot de bruiloft.";

		document.getElementById("datelocationtitle").innerHTML = "Datum en Locatie";
		document.getElementById("datelocationtext").innerHTML = "Maak uzelf vertrouwd met waar u moet zijn en wanneer.";
		document.getElementById("datelocationtiming").innerHTML = "De bruiloft begint om 14:00 uur op 30 Hakkesstraat 5916PX te Venlo.";
		
		document.getElementById("busestitle").innerHTML = "De Bus";
		document.getElementById("busestext").innerHTML = "De bus van en naar de trouwlocatie wordt voor u geregeld.";
		document.getElementById("busestext1").innerHTML = "De bus vertrekt om 13:30 vanuit Roompot Resort Arcen naar de trouwlocatie, en vertekt om 02:00 uur vanuit de trouwlocatie naar Resort Arcen.";
		document.getElementById("busestext2").innerHTML = "De bus vertrekt om 13:40 vanuit Kruisweg 10 Arcen naar de trouwlocatie, en vertekt om 02:00 uur vanuit de trouwlocatie naar de Kruisweg 10 te Arcen.";

		document.getElementById("dresscodetitle").innerHTML = "Dress Code";
		document.getElementById("dresscodetext").innerHTML = "De dress code is kleurrijk en feestelijk!";

		document.getElementById("contacttitle").innerHTML = "Neem Contact met ons op";
		document.getElementById("contacttext").innerHTML = "Aarzel niet om contact op te nemen, wij beantwoorden graag al uw vragen.";

		document.getElementById("donationtitle").innerHTML = "Huwelijks Cadeau";
		document.getElementById("donationtext").innerHTML = "Wij verheugen ons erop om jullie te zien op onze bruiloft, mocht je een bijdrage willen geven voor onze huwelijksreis, gebruik dan deze link hieronder:";
		console.log("Dutch");
	}
	else
	{
		document.getElementById("welcometitle").innerHTML = "Welcome to our wedding page!";
		document.getElementById("welcometext").innerHTML = "On this page, you will find all the information you need involving the wedding.";

		document.getElementById("datelocationtitle").innerHTML = "Dates and Location";
		document.getElementById("datelocationtext").innerHTML = "Please familiarise yourself with where you need to be and when.";
		document.getElementById("datelocationtiming").innerHTML = "Please arrive at 30 Hakkesstraat, 5916 PX Venlo on the 2nd of July for 2.00PM.";
		
		document.getElementById("busestitle").innerHTML = "Buses";
		document.getElementById("busestext").innerHTML = "Buses to and from the venue will be provided.";
		document.getElementById("busestext1").innerHTML = "Leaving from Roompot Vakanties Resort Arcen at 1:30pm. The return trip leaves at 2:00am.";
		document.getElementById("busestext2").innerHTML = "Leaving from Kruisweg 10, 5944 EN Arcen at 1:40pm. The return trip leaves at 2:00am.";

		document.getElementById("dresscodetitle").innerHTML = "Dress Code";
		document.getElementById("dresscodetext").innerHTML = "The dress code is Colourful and Festive!";

		document.getElementById("contacttitle").innerHTML = "Contact Us";
		document.getElementById("contacttext").innerHTML = "Please don't hesitate to get in touch. We are pleased to answer any questions.";

		document.getElementById("donationtitle").innerHTML = "Wedding Gift";
		document.getElementById("donationtext").innerHTML = "We are delighted that you have made it to our wedding. If you do wish to make a contribution towards our honeymoon please use the link below:";
		console.log("English");
	}
}
