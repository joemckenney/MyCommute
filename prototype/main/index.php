<? 
include('../includes/header.php'); 
?>

<!-- Uppernav -->
<div class="container">
  <div class="masthead">
    <ul class="nav nav-pills pull-right">
    	<li class="dropdown" id="menu1">
		  <a class="dropdown-toggle" data-toggle="dropdown" href="#menu1">Sign In</a>
		  <ul class="dropdown-menu pull-left" style="padding: 15px" role="menu" aria-labelledby="dLabel">
		    <form style="margin: 0px;">
			  <input style="margin-bottom: 15px;" type="text" size="30" />
			  <input style="margin-bottom: 15px;" type="password" size="30" />
			  <input style="float: left; margin-right: 10px;" type="checkbox" value="1" />
			  <label class="string optional" for="user_remember_me"> Remember me</label>
			  <input class="btn btn-primary btn-block" style="clear: left;" type="submit" name="commit" value="Sign In" />
			</form>
		  </ul>
		</li>
    </ul>
  </div>
</div>


<!-- Jumbotron -->
<div class="jumbotron">
	<h1>MyCommute</h1>
	<p class="lead">We track yo Bay Area transit shit.</p>
</div>


<!-- 2 points -->
<div class="container">
	<div class="row-fluid">
        <div class="span6">
        	<h2>Track Lines</h2>
        	<p>Track the lines you take everyday.</p>
         	<div>
	          	<div class="transit-container">
		          	<div class="transit-icon"></div>
		          	<div class="transit-label">BART</div>
		        </div>
		        <div class="transit-container">
		          	<div class="transit-icon"></div>
		          	<div class="transit-label">MUNI</div>
		        </div>
		        <div class="transit-container">
		          	<div class="transit-icon"></div>
		          	<div class="transit-label">Cal-Train</div>
		        </div>
		        <div class="transit-container">
		          	<div class="transit-icon"></div>
		          	<div class="transit-label">Bus</div>
		        </div>
		        <div class="transit-container">
		          	<div class="transit-icon"></div>
		          	<div class="transit-label">Ferry</div>
		        </div>
        	</div>
        </div>
		<div class="span6">
			<h2>Check Times</h2>
			<p>Check to see the status of your tracked lines.</p>
			<div class="status-card">
				<div class="transit-container">
					<div class="transit-icon"></div>
				</div>
				<div class="transit-number">34</div>
				</div>
			</div>
		</div>

		<div class="sign-up">
			<a href="#myModal" role="button" data-toggle="modal"class="btn btn-success sign-up-btn" href="#">Sign Up</a>
		</div>
 
		<!-- Modal -->
		<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h3 id="myModalLabel">Sign Up</h3>
			</div>
			<div class="modal-body">
				<a class="btn btn-primary btn-large" href="../main/track.php">with Facbook</a>
				<a class="btn btn-success btn-large" href="../main/track.php">with Google</a>
			</div>
		</div>
	</div>
<?php include('../includes/footer.php'); ?>
