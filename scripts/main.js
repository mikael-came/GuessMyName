
	// Tu crois vraiment que je balancerai le prénom de notre fille, comme ça ...
	var secret = "7f481125cb09c0f7f91044996b90b7b7d29104d7";
	var username = 'Anonymous';
	
	var messagesError = ["Nope.", "Désolé ce n'est pas ca.",
	"Retente ta chance.", "Quand même pas !",
	"Oula... non pas du tout !", "Non, ce n'est pas ça."
	];

	var tentatives=[];
	define(function (require) {
		var sha1 = require('./sha1');
	});

	var test = function(name){
		var hash = sha1.create();
		if(name){
			
			nameFormatte = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
			hash.update(nameFormatte);

			if(hash.hex() === secret){
				alert("Oui ! C'est la bonne réponse!");
			}
			else{
				showError();
				resetForm();
				addTentatives(nameFormatte);
			}
			
			sendTentative(nameFormatte);
		}
	};

	var showError  = function(){
		var messagesErrorID = Math.floor(Math.random() * messagesError.length);
		alert( messagesError[messagesErrorID]);
	};

	var resetForm = function(){
		document.getElementById('name').value='';
	};

	var addTentatives = function(name){
		// Affiches liste des tentatives
		document.getElementById('tentatives').style.display="block";

		// Ajoute une tentative à la liste
		addTentative(name);	
	};

	var addTentative = function(name){
		var newLI = document.createElement('li');
		newLI.classList.add("list-group-item");
		newLI.appendChild(document.createTextNode(name));
		document.getElementById("listeTentatives").appendChild(newLI);
	};

	var sendTentative = function(guess){
		var oReq = new XMLHttpRequest();
		var host = 'https://hook.io/mikael-came-gmail-com/storeguessmyname'
		var url = host + "/" + username + "/" + guess;
		oReq.open('POST', url);
		oReq.send(null);
		
		oReq.onload = function () {
			console.log('callBack, enregistrement done');
		};
	};
	
	document.getElementById('username').value = username;
	document.getElementById("username").addEventListener('change', function() {
			 username = this.value;
	}, false);
		
	document.getElementById("username").addEventListener('focus', function() {
			 if(this.value === "Anonymous"){
				username = "";
				this.value="";
			 }
			 
	}, false);
