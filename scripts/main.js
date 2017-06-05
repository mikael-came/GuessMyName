	var secret = "7f481125cb09c0f7f91044996b90b7b7d29104d7";

	var messagesError = ["Nope.", "Désolé ce n'est pas ca.",
	"Retente ta chance.", "Quand même pas !",
	"Oula... non pas du tout !", "Non, ce n'est pas ça.",
	"Tu crois vraiment que je balancerai le prénom de notre fille, comme ça ..."
];

	define(function (require) {
		var sha1 = require('./sha1');
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
		}
	};

	var showError  = function(){
		var messagesErrorID = Math.floor(Math.random() * messagesError.length);
		alert( messagesError[messagesErrorID]);
	}
