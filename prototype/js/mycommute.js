$(function(){

	$(".chzn-select").chosen();

	$(".add-line-btn").click(function(){
		$('.row2').fadeIn(200);
		$('.transit-icon').toggleClass('active');
		$(this).addClass('disabled');;
		$(".edit-btn").addClass('disabled');
		$(".save-btn").html("Save").addClass('btn-success').removeClass('btn-secondary');	
	})

	$(".save-btn").click(function(){
		$(this).html("Edit").addClass('btn-secondary').removeClass('btn-success');
		$(".edit-btn,.add-line-btn").removeClass('disabled');
	})

	$(".transit-icon").click(function(){
		$('.row2 .transit-icon').removeClass('active');
		$('.select-trans').addClass("gone");
		$(this).addClass('active');
	})
        
});

