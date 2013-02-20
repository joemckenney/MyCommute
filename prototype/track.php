<html>
	<head>
		<title>My Commute</title>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<!-- CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/style.css" rel="stylesheet" media="screen">

	</head>
<body>
<div class="container">

	<div class="masthead">
		<ul class="nav nav-pills pull-right">
		<li><a href="#">Sign Out</a></li>
		</ul>
		<h3 class="muted">MyCommute</h3>
	</div>
	<div class="row-fluid track-row" style="border-top:1px #eee">
		<div class="span12">
			<div class="transit-container">
	          	<div class="transit-icon"></div>
	          	<div class="transit-label">Ferry</div>
	        </div>
	        <div style="display:inline-block">
				<span>From: Oakland Jack London Sq</span><br>
				<span>To: San Francisco Ferry Building</span>
			</div>
			<!--<div style="display:inline-block">
				<span>Depart: 6:00 AM</span><br>
				<span>Arrive: 6:30 AM</span>
			</div>-->
		</div>
	</div>     
	<div class="row-fluid track-row" style="margin-bottom:30px;">
		<div class="span12">
			<p>1. Select Public Trans option -> 2. Select Departure -> 3. Select Arrival</p>
		</div>
	</div>
	<a class="btn pull-left" href="#"><i class="icon-plus"></i> Add Line</a>
	<a href="../transit/saved.php" class="btn btn-primary pull-right">Save</a>

</div>
<div class="container" style="margin-top:30px;">
	<div class="footer">
		<p>&#169;  2013</p>
	</div>
</div>


</body>
</html>