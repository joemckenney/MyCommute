<html>
	<head>
		<title>My Commute</title>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<!-- CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/style.css" rel="stylesheet" media="screen">
	</head>
<script type="text/javascript">
	
		function openWin()
		{
			myWindow=window.open('../transit/status.php','','width=500,height=400,menubar=no,status=no,toolbar=no,titlebar=no');
			myWindow.focus();
		}
</script>
<body>
<div class="container">

	<div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li><a href="../transit/track.php">Tracked Lines</a></li>
          <li><a href="#">Sign Out</a></li>
        </ul>
        <h3 class="muted">MyCommute</h3>
     </div>
</div>

<div class="container">
      <!-- Example row of columns -->
      <div class="row-fluid">
        <div class="span12 text-center">
          <h2>Bookmarklet</h2>
          <p>We've saved your tracked lines.  Use this bookmarklet to access the current status of your lines.</p>
          <div class="bookmarklet">
          	<a class="btn btn-secondary" onclick="openWin();">test</a>
          </div>
        </div>
      </div>
	</div>
	<div class="container" >
      <div class="footer">
        <p>&#169;  2013</p>
      </div>
  </div>


</body>
</html>