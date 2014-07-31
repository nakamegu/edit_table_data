$(document).ready(function(){

	var isEdit = false;

	$("tr").click(function(){
		if(isEdit) {
			alert("You are editing another data!!");
		} else {
		    $(this).addClass("selected").siblings().removeClass("selected");
		}
	});
	
	$( "#edit_button" ).click(function() {
	
		if($(".selected").length){
		} else {
			alert("Please select a row first.");
			return;
		}
		
		isEdit = true;
	
		var par = $(".selected");
		
		var tdId = par.children("td:nth-child(1)");
		tdId.html("<input type='hidden' id='txtId' value='"+tdId.html()+"'/>");
		
		var tdName = par.children("td:nth-child(2)");
		tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
		
		var tdPrice = par.children("td:nth-child(3)");
		tdPrice.html("<input type='text' id='txtPrice' value='"+tdPrice.html()+"'/>");
		
		var tdQuantity = par.children("td:nth-child(4)");
		tdQuantity.html("<input type='text' id='txtQuantity' value='"+tdQuantity.html()+"'/>");
		
		$(".new_data").remove();
	
	});	
	
	$( "#save_button" ).click(function() {
	
		isEdit = false;
		
		var id = $("#txtId").val();
		var name = $("#txtName").val();
		var price = $("#txtPrice").val();
		var quantity = $("#txtQuantity").val();
		
		alert("Id: " + id + ", Name: " + name + ", Price: " + price + ", Quantity: " + quantity);
		
		location.reload();
	});	
	
	$( "#cancel_button" ).click(function() {
	
		isEdit = false;
		
		location.reload();
	});	
	
});
