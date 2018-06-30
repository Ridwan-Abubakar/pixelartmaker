var color;// Select color input
var height, width;// Select size input

//this select the form tag then add a submit event listener to run a function
$("#sizePicker").submit(function (event) {

	event.preventDefault();

	height = $('#inputHeight').val();// receive the user's height input value and store in height variable

    width = $('#inputWeight').val();// receive the user's width input value and store in width variable

    makeGrid(height, width); // invoke makeGrid function assigning it with two parameters
});

// When size is submitted by the user, call makeGrid()
function makeGrid(x, y) {

	// Your code goes here!
    $('tr').remove(); // select the table row tag and remove it from the page

    for(var i = 1; i <= x; i++){

	    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');

        for(var j = 1; j <= y; j++){

		    $('#table' + i).append('<td></td>');
		}
	}

    //add color when cell is clicked and remove the color when clicked again
    $('td').click(function() {

	    color = $('#colorPicker').val();

	    if($(this).attr('style')){

		    $(this).removeAttr('style');
	    }
	    else{
		    $(this).attr('style', 'background-color:' + color);
	    }
    });
} 


