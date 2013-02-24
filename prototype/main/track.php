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
	<h2>My Trips</h2>
	<div class="row-fluid track-row" style="border-top:1px solid #eee">
		<div class="span12">
			<div class="transit-container">
	          	<div class="transit-icon"></div>
	        </div>
	        <div style="display:inline-block; vertical-align: middle; ">
				<span style="font-size: 18px;">Oakland Jack London Sq <strong>&#8594;</strong> San Francisco Ferry Building</span>
			</div>
			<!--<div style="display:inline-block">
				<span>Depart: 6:00 AM</span><br>
				<span>Arrive: 6:30 AM</span>
			</div>-->
			<a href="#" class="btn btn-secondary pull-right edit-btn">Edit</a>
		</div>
	</div>
	<div class="row-fluid track-row row2" style="display: none;">
		<div class="span12">
			<div class="select-trans">Select Transit Option</div>
			<div style="height:70px; margin-bottom:20px;">
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon1" style="background-color: #66C47E"></div><div class="text-center">BART</div>
		        </div>
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon2" style="background-color: #9FDAAE"></div><div class="text-center">Ferry</div>
		        </div>
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon3" style="background-color: #acd"></div><div class="text-center">SFMTA</div>
		        </div>
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon4" style="background-color: #7D7D7D"></div><div class="text-center">AC Trans</div>
		        </div>
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon5" style="background-color: #E0A421"></div><div class="text-center">Cal-Train</div>
		        </div>
				<div class="transit-container-ani">
		          	<div class="transit-icon" id="icon6" style="background-color: #C98A3B"></div><div class="text-center">Ferry</div>
		        </div>
		    </div>
		</div>
		<select data-placeholder="Choose a Country..." class="chzn-select" style="width:350px;" tabindex="2">
			<option value="12TH">12th St. Oakland City Center</option><option value="16TH">16th St. Mission (SF)</option><option value="19TH">19th St. Oakland</option><option value="24TH">24th St. Mission (SF)</option><option value="ASHB">Ashby (Berkeley)</option><option value="BALB">Balboa Park (SF)</option><option value="BAYF">Bay Fair (San Leandro)</option><option value="CAST">Castro Valley</option><option value="CIVC">Civic Center/UN Plaza (SF)</option><option value="COLS">Coliseum/Oakland Airport</option><option value="COLM">Colma</option><option value="CONC">Concord</option><option value="DALY">Daly City</option><option value="DBRK">Downtown Berkeley</option><option value="DUBL">Dublin/Pleasanton</option><option value="DELN">El Cerrito del Norte</option><option value="PLZA">El Cerrito Plaza</option><option value="EMBR">Embarcadero (SF)</option><option value="FRMT">Fremont</option><option value="FTVL">Fruitvale (Oakland)</option><option value="GLEN">Glen Park (SF)</option><option value="HAYW">Hayward</option><option value="LAFY">Lafayette</option><option value="LAKE">Lake Merritt (Oakland)</option><option value="MCAR">MacArthur (Oakland)</option><option value="MLBR">Millbrae</option><option value="MONT">Montgomery St. (SF)</option><option value="NBRK">North Berkeley</option><option value="NCON">North Concord/Martinez</option><option value="ORIN">Orinda</option><option value="PITT">Pittsburg/Bay Point</option><option value="PHIL">Pleasant Hill/Contra Costa Centre</option><option value="POWL">Powell St. (SF)</option><option value="RICH">Richmond</option><option value="ROCK">Rockridge (Oakland)</option><option value="SBRN">San Bruno</option><option value="SFIA">San Francisco Int'l Airport</option><option value="SANL">San Leandro</option><option value="SHAY">South Hayward</option><option value="SSAN">South San Francisco</option><option value="UCTY">Union City</option><option value="WCRK">Walnut Creek</option><option value="WDUB">West Dublin/Pleasanton</option><option value="WOAK">West Oakland</option>
		</select><span style="font-size:24px"> &#8594; </span>
		<select data-placeholder="Choose a Country..." class="chzn-select" style="width:350px;" tabindex="2">
			<option value="12TH">12th St. Oakland City Center</option><option value="16TH">16th St. Mission (SF)</option><option value="19TH">19th St. Oakland</option><option value="24TH">24th St. Mission (SF)</option><option value="ASHB">Ashby (Berkeley)</option><option value="BALB">Balboa Park (SF)</option><option value="BAYF">Bay Fair (San Leandro)</option><option value="CAST">Castro Valley</option><option value="CIVC">Civic Center/UN Plaza (SF)</option><option value="COLS">Coliseum/Oakland Airport</option><option value="COLM">Colma</option><option value="CONC">Concord</option><option value="DALY">Daly City</option><option value="DBRK">Downtown Berkeley</option><option value="DUBL">Dublin/Pleasanton</option><option value="DELN">El Cerrito del Norte</option><option value="PLZA">El Cerrito Plaza</option><option value="EMBR">Embarcadero (SF)</option><option value="FRMT">Fremont</option><option value="FTVL">Fruitvale (Oakland)</option><option value="GLEN">Glen Park (SF)</option><option value="HAYW">Hayward</option><option value="LAFY">Lafayette</option><option value="LAKE">Lake Merritt (Oakland)</option><option value="MCAR">MacArthur (Oakland)</option><option value="MLBR">Millbrae</option><option value="MONT">Montgomery St. (SF)</option><option value="NBRK">North Berkeley</option><option value="NCON">North Concord/Martinez</option><option value="ORIN">Orinda</option><option value="PITT">Pittsburg/Bay Point</option><option value="PHIL">Pleasant Hill/Contra Costa Centre</option><option value="POWL">Powell St. (SF)</option><option value="RICH">Richmond</option><option value="ROCK">Rockridge (Oakland)</option><option value="SBRN">San Bruno</option><option value="SFIA">San Francisco Int'l Airport</option><option value="SANL">San Leandro</option><option value="SHAY">South Hayward</option><option value="SSAN">South San Francisco</option><option value="UCTY">Union City</option><option value="WCRK">Walnut Creek</option><option value="WDUB">West Dublin/Pleasanton</option><option value="WOAK">West Oakland</option>
		</select>
		<a href="#" class="btn btn-primary pull-right save-btn" >Save</a>
		<div class="text-center">
			<a class="btn btn-primary add-line-btn" href="#" style="margin-top:20px;"><i class="icon-plus"></i> Add Line</a>
		</div>
	</div>      
	<!--<div class="row-fluid track-row" style="margin-bottom:30px;">
		<div class="span12">


			<!--<select data-placeholder="Your Favorite Football Team" style="width: 350px;" class="chzn-select">
                <option value=""></option>
                <optgroup label="Richmond &harr; Daly City / Millbrae">
                  <option>Balboa Park</option>
                  <option>Civic Center</option>
                  <option>1</option>
                  <option>Civic Center</option>
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


			<!--<p>1. Select Public Trans option -> 2. Select Departure -> 3. Select Arrival</p>
		</div>
	</div>-->
	<div class="text-center">
		<a class="btn btn-primary add-trip-btn" href="#" style="margin-top:20px;"><i class="icon-plus"></i> Add Trip</a>
	</div>
	<!--<a href="../main/saved.php" class="btn btn-primary pull-right">Save</a>-->

</div>

<?php include('../includes/footer.php'); ?>