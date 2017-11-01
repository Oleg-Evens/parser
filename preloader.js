document.querySelector('body').style.overflow="hidden";
document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
		document.querySelector('body').style.overflow="";
	}, 500)
}
