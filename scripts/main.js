	var secret="7f481125cb09c0f7f91044996b90b7b7d29104d7";
	
	define(function (require) {
		var sha1 = require('./sha1');
		
	});

	var test = function(name){ 
		var hash = sha1.create();
		hash.update(name);
		if(hash==secret){
			alert("Ouai !"); 
		}
		else{
			alert("Ce n'est pas ca..." ); 
		}		
	};
	