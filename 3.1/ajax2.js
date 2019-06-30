// д/з 3, задача 1 

$(document).ready(function () {
	$('button').click(function () {
		$.get("ajax.html", success);
 	});

	function success(data) {
		$('#content').html(data);
 	}
}); 