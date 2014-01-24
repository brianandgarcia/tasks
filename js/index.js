// Initial Values
var count = 0;

$('#add').click(addNewItem);
$('#todos').on('click', 'li', switchStatus);
$('#clear').click(removeItems);

	localStorage.setItem( newItem );
	localStorage.getItem( newItem );
	
function addNewItem(event) {

	//prevent page reload
	event.preventDefault();

	var newItem = $('#new').val();

	//adds in html list item
	$('#todos').append("<li title='Remove?'>" +newItem+ "</li>");

	//Cool Fade in Effect
	$('#todos li:last-child').hide().slideDown("slow");

	// Add 1, store back into memory after adding 1
	count++;

	//Print new count
	$('#count').html(count);

	// Clear input after submit
	$('form :input').val("");
}

//Start of clear function
function removeItems() {
	$('#todos li').fadeOut("slow");

	count = 0;
	//display updated
	$('#count').html(count);
}


function switchStatus() {

	if($(this).hasClass('toggle')) {
		$(this).removeClass('toggle');
		count++;
	} else {
		$(this).addClass('toggle');
		count--;
	}
	//Print new count
	$('#count').html(count);
}




