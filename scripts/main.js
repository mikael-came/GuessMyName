	var secret = "7f481125cb09c0f7f91044996b90b7b7d29104d7";

	var messagesError = ["Nope.", "Désolé ce n'est pas ca.",
	"Retente ta chance.", "Quand même pas !",
	"Oula... non pas du tout !", "Non, ce n'est pas ça.",
	"Tu crois vraiment que je balancerai le prénom de notre fille, comme ça ..."
	];
	var tentatives=[];
	define(function (require) {
		var sha1 = require('./sha1');
	});

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAbNR0hB2rYr8CPQvtsdi8SFXs4ivF25xA",
		authDomain: "guessmyname-35287.firebaseapp.com",
		databaseURL: "https://guessmyname-35287.firebaseio.com",
		projectId: "guessmyname-35287",
		storageBucket: "guessmyname-35287.appspot.com",
		messagingSenderId: "653217500025"
	};

	firebase.initializeApp(config);

	var solution = document.getElementById('solution');
	var dbRef = firebase.database().ref().child("solution");
	dbRef.on('value', snap => {
		if(snap.value){
			solution.innerText = snap.value
		}
	});


	var test = function(name){
		var hash = sha1.create();
		nameFormatte = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
		hash.update(nameFormatte);

		if(hash==secret){
			alert("Ouai !");
		}
		else{
			showError();
			document.getElementById('name').value='';
			addTentatives(nameFormatte);

		}
	};

	var showError  = function(){
		var messagesErrorID = Math.floor(Math.random() * messagesError.length);
		alert( messagesError[messagesErrorID]);
	};

	var addTentatives = function(name){
		document.getElementById('tentatives').style.display="block";
		var newLI = document.createElement('li');
		newLI.classList.add("list-group-item");
		newLI.appendChild(document.createTextNode(name));
		document.getElementById("listeTentatives").appendChild(newLI);

	};
