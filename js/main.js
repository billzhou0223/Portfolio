function callPlayer(player, func, args) {
	player.contentWindow.postMessage(JSON.stringify({
		event: 'command',
		func: func,
		args: args || []
	}), '*');
}

$(document).ready(function() {
	$('.modal').each(function(i, ele) {
		$(ele).on('hidden.bs.modal', function (e) {
			var player = $(this).find('iframe').get(0);
			callPlayer(player, 'stopVideo');
		});
	});
});