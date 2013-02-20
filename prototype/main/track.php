<? 
include('../includes/header.php'); 
?>

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
		<!--<select data-placeholder="Choose a Country..." class="chzn-select" style="width:350px;" tabindex="2">
				<option>1</option>
				<option>2</option>
			</select>

			<select data-placeholder="Your Favorite Football Team" style="width: 350px;" class="chzn-select">
                <option value=""></option>
                <optgroup label="NFC EAST">
                  <option>Dallas Cowboys</option>
                  <option>New York Giants</option>
                  <option>Philadelphia Eagles</option>
                  <option>Washington Redskins</option>
                </optgroup><optgroup>
                </optgroup><optgroup label="NFC NORTH">
                  <option>Chicago Bears</option>
                  <option>Detroit Lions</option>
                  <option>Green Bay Packers</option>
                  <option>Minnesota Vikings</option>
                </optgroup>
                <optgroup label="NFC SOUTH">
                  <option>Atlanta Falcons</option>
                  <option>Carolina Panthers</option>
                  <option>New Orleans Saints</option>
                  <option>Tampa Bay Buccaneers</option>
                </optgroup>
                <optgroup label="NFC WEST">
                  <option>Arizona Cardinals</option>
                  <option>St. Louis Rams</option>
                  <option>San Francisco 49ers</option>
                  <option>Seattle Seahawks</option>
                </optgroup>
                <optgroup label="AFC EAST">
                  <option>Buffalo Bills</option>
                  <option>Miami Dolphins</option>
                  <option>New England Patriots</option>
                  <option>New York Jets</option>
                </optgroup>
                <optgroup label="AFC NORTH">
                  <option>Baltimore Ravens</option>
                  <option>Cincinnati Bengals</option>
                  <option>Cleveland Browns</option>
                  <option>Pittsburgh Steelers</option>
                </optgroup>
                <optgroup label="AFC SOUTH">
                  <option>Houston Texans</option>
                  <option>Indianapolis Colts</option>
                  <option>Jacksonville Jaguars</option>
                  <option>Tennessee Titans</option>
                </optgroup>
                <optgroup label="AFC WEST">
                  <option>Denver Broncos</option>
                  <option>Kansas City Chiefs</option>
                  <option>Oakland Raiders</option>
                  <option>San Diego Chargers</option>
                </optgroup>
              </select>-->


			<p>1. Select Public Trans option -> 2. Select Departure -> 3. Select Arrival</p>
		</div>
	</div>
	<a class="btn pull-left" href="#"><i class="icon-plus"></i> Add Line</a>
	<a href="../prototype/saved.php" class="btn btn-primary pull-right">Save</a>

</div>

<?php include('../includes/footer.php'); ?>