
$(document).ready(function(){
    $("#input").focus(function(){
        $('.first-form').css('display','none')
    });
    setTimeout(() => {
        // TweenMax.from('form',2,{left: 50},1)
        

        if ($(window).width() < 992) {
            $('.first-form').css('left','50%')
            $('.close').on('click', function(){
                
                $('.first-form').css({
                    transform: 'translateX(-200%)'
                })
            })
         }
         else {
            $('.first-form').css({
                transform: 'translate(-50%,-50%)'
            })
            $('.close').on('click', function(){
                
                
                $('.first-form').css({
                    transform: 'translate(-50%,-200%)'
                })
            })
         }
        
        console.log('sadas')
    }, 5000);
	$(function() {
		$('#subscribe').submit(function(event) {
		  event.preventDefault();
	  
		  var subscribeForm = $(this);
		  var subscribeButton = $('input[type=submit]', subscribeForm);
	  
		  if ($("input[name='email']").val() === '') {
			alert('Please enter an email address')
			return
		  }
	  
		  $.ajax({
			url: subscribeForm.prop('action'),
			type: 'POST',
			crossDomain: true,
			headers : {
			  'accept' : 'application/javascript',
			},
			data: $('#subscribe').serialize(),
			beforeSend: function() {
			  subscribeButton.prop('disabled', 'disabled');
			}
		  })
		  .done(function(response) {
			// You will do something WAY BETTER than alert
			// because you are an awesome designer.
			window.location.href = 'thanks.html';
			subscribeButton.prop('disabled', false);
		  })
		  .fail(function(response) {
			alert('Dang, something went wrong!');
			subscribeButton.prop('disabled', false);
		  })
	  
		});
	  });

    TweenLite.defaultEase = Power0.easeNone;
    TweenMax.staggerFrom(".box", 1, { y:10, opacity:0}, 0.5);
    TweenMax.staggerFrom(".box1", 3, { y:10, opacity:0}, 0.5);
    // TweenMax.set("hr", {transformOrigin:"100% 0%"});
    // TweenMax.fromTo(".hr1", 1, {top:"-100px"}, {top:"200px", repeat:-1, repeatDelay:2})
    TweenMax.from('.hr1',5,{top: 130, opactiy: 0},1)
    TweenMax.from('hr',2,{top: 0, opactiy: 0},1)
    // TweenMax.from('.price',2,{y: 10, opactiy: 0},1)
    // TweenMax.from('.installments',2,{y: 10, opactiy: 0},3)
    // TweenMax.from('.downpayment',2,{y: 10, opactiy: 0},4)
})


