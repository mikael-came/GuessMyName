	var secret="7f481125cb09c0f7f91044996b90b7b7d29104d7";
	
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
			alert("Ce n'est pas ca..." ); 
		}		
	};
	