

	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('.lunchButton').on('click', pressLunchButton);
		$('.dinnerButton').on('click', pressDinnerButton);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function pressLunchButton(event){
		console.log("Press pressLunchButton");
		$( "#entrees" ).addClass('hideDinner');
		$( "#dinnerText" ).removeClass('lundinactive');
		$( "#lunch" ).removeClass('hideLunch');
		$( "#lunchText" ).addClass('lundinactive');
	}

	function pressDinnerButton(event){
		console.log("Press pressDinnerButton");
		$( "#lunch" ).addClass('hideLunch');
		$( "#lunchText" ).removeClass('lundinactive');
		$( "#entrees" ).removeClass('hideDinner');
		$( "#dinnerText" ).addClass('lundinactive');
	}
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });

        //   $(function() {
        //     $( "#datepicker" ).datepicker();
        // });
    
    };
