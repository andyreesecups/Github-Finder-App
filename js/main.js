$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;

		// https://api.github.com/users/andyreesecups
		// Make request to Github API
		$.ajax({
			url: "https://api.github.com/users/"+username,
			data: {
				client_id: "b0e1ab1b9fdb44605e95",
				client_secret: "1963fc958422fea65837caa040c1acb5f4ccdccc"
			}

		}).done();
	});
});