$(function(){

	$(".chzn-select").chosen();

	$(".add-trip-btn").click(function(){
		$('.row2').fadeIn(200);
		$('.transit-icon').toggleClass('active');
		$(this).addClass('disabled').addClass('btn-secondary').removeClass('btn-primary');
		$(".edit-btn").addClass('disabled');
		$(".save-btn").html("Save").addClass('btn-primary').removeClass('btn-secondary');	
	})

	$(".save-btn").click(function(){
		$(this).html("Edit").addClass('btn-secondary').removeClass('btn-primary');
		$(".edit-btn").removeClass('disabled');
		$(".add-trip-btn").removeClass('disabled').addClass('btn-primary').removeClass('btn-secondary');
	})

	$(".transit-icon").click(function(){
		$('.row2 .transit-icon').removeClass('active');
		$('.select-trans').addClass("gone");
		$(this).addClass('active');
	})

	$(".line-container").hover(
		function(){
			$(this).find(".nav-pills").show();
		},
		function(){
			$(this).find(".nav-pills").hide();
		}
	);
        
});

