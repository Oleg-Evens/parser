var top_y = 0;
function messages(){
	if(top_y == 0) {
		$('.display').css('z-index','-100');
		setTimeout(function(){
			$('.display').css('margin-top','-150%');
		},250)
	}
	setTimeout(function() {
		$('.display').css('z-index','1');
		$('.display').css('margin-top',top_y+'%');
	},1500)
	setTimeout(function(){
		if(top_y >= 180) {
			top_y = -45;
		}
		top_y+=45;
		messages();
		return top_y;
	},3000)
	return top_y;
}
messages();

var p = 0;

var u = 0;
$('.btn-add').click(function(){
	if(u == 0) {
		$('.qwen iframe').css('left', '50%');
		$('.blackout').css('opacity', '0.7');
		$('.blackout').css('display', 'block');
		u = 1;
		$('.bottom-c').css('z-index','45');
		$('.btn-add').css('z-index','45');
	} else if(u == 1) {
		$('.qwen iframe').css('left', '-400px');
		$('.blackout').css('opacity', '0');
		$('.blackout').css('display', 'none');
		u = 0;
	};
})

$('.bottom-c').click(function(){
	if(u == 0) {
		$('.last-content iframe').css('left', '50%');
		$('.blackout').css('opacity', '0.7');
		$('.bottom-c').css('z-index','45');
		$('.btn-add').css('z-index','45');
		$('.blackout').css('display', 'block');
		u = 1;
	} else if(u == 1) {
		$('.last-content iframe').css('left', '-400px');
		$('.blackout').css('opacity', '0');
		u = 0;
		$('.blackout').css('display', 'none');
	}
})

$('.blackout').click(function(){
	$('.last-content iframe').css('left', '-400px');
	$('.qwen iframe').css('left', '-400px');
	$('.blackout').css('opacity', '0');
	$('.blackout').css('display', 'none');
	u = 0;
	$('.bottom-c').css('z-index','60');
	$('.btn-add').css('z-index','60');
});