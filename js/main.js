$(document).ready(function() {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value;

        // https://api.github.com/users/andyreesecups
        // Make request to Github API
        $.ajax({
            url: "https://api.github.com/users/" + username,
            data: {
                client_id: "b0e1ab1b9fdb44605e95",
                client_secret: "1963fc958422fea65837caa040c1acb5f4ccdccc"
            }

        }).done(function(user) {
            // console.log(user);
            $('#profile').html(`
			<div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
              </div>
            <div class="panel-body">
              <div class="row">
              <div class="col-md-3">
				<img class="thumbnail avatar" src="${user.avatar_url}">
				<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
			</div>
			<div class="col-md-9">
				<span class="label label-default">Public Repos: ${user.public_repos}</span>
				<span class="label label-primary">Public Gists: ${user.public_gists}</span>
				<span class="label label-success">Followers: ${user.followers}</span>
				<span class="label label-info">Following: ${user.following}</span>
				<br><br>
			</div>
              </div>
              </div>
            </div>
        	`);
        });
    });
});