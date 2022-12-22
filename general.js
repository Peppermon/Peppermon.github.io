$(document).ready(function() {
	
	let inputs = $(".collapse");
	 
	inputs.each(function (input) {
		 this.onclick = function() {
			  $(this.nextElementSibling).toggle();
			  updateLocalStorage();
		 }
	});
	
	if (localStorage.getItem("list"))
		setupDropdown();
	
	function updateLocalStorage() {
		var listArray = [];
		inputs.each(function (input) {
			var next = $(this.nextElementSibling);
			if (next.is(":visible"))
				listArray.push(next.attr("id"));
		});
		localStorage.setItem("list", listArray.toString());
	}
	
	function setupDropdown() {
		var listArray = localStorage.getItem("list").split(",");
		listArray.forEach(item => {
			var docItem = $("#" + item);
			docItem.toggle();
		});
	}
		
});
