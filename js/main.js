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
			if(player) {
				callPlayer(player, 'stopVideo');
			}
		});
	});

	/*
	load map when opening resume tab the first time
	*/
	var ulTab = $('ul[role = "tablist"]')[0];
	$(ulTab).on('click', 'a', function(event) {
		debugger;
		if(event.target.innerHTML === 'Resume' && !map) {
			setTimeout('initializeMap()', 0);
		}
	});
});