<? 
include('../includes/header.php'); 
?>

<script type="text/javascript">
	
		function openWin()
		{
			myWindow=window.open('../main/status.php','','width=500,height=400,menubar=no,status=no,toolbar=no,titlebar=no');
			myWindow.focus();
		}
</script>

<div class="container">

	<div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li><a href="../main/track.php">Tracked Lines</a></li>
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

<?php include('../includes/footer.php'); ?>