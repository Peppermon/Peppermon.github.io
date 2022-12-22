$(document).ready(function() {
	
	let inputs = $(".collapse");
	 
	 // Each one of these will be ex span stadium-1
	inputs.each(function (input) {
		// On clicking each of the spans
		 this.onclick = function() {
			 // Set next, which will be the ul stadium-1-list element
			 var next = $(this.nextElementSibling);
			 // Toggle stadium-1-list
			 next.toggle();
			 toggleSign(this);
			 updateLocalStorage();
			 // Send stadium-1 to the toggle function
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
	
	function toggleSign(item) {
		var toggle = $(item).find(".toggle");
		if ($(item.nextElementSibling).is(":visible"))
			$(toggle).text("-");
		else
			$(toggle).text("+");
		
	}
	
	function setupDropdown() {
		var listArray = localStorage.getItem("list").split(",");
		listArray.forEach(item => {
			var docItem = $("#" + item);
			var docPrev = $(docItem.prev());
			docItem.toggle();
			toggleSign(docPrev[0]);
		});
	}
		
});
