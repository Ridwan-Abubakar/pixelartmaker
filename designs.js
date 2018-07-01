/*Author name: Ridwan Abubakar
Program name: Google Africa Scholarship Challenge
Project name: Pixel art maker
Date completed: 30/06/2018
*/
let color;// declare color variable to store color value
let height, width;// declare variables to store height and width values

//select element with id selector (#sizePicker) then add a submit event listener to run a function
$("#sizePicker").submit(function (event) {

	event.preventDefault();// prevent redirection when submit button is clicked.

	height = $('#inputHeight').val();// receive the user's height input value and store in height variable

    width = $('#inputWeight').val();// receive the user's width input value and store in width variable

    makeGrid(height, width); // invoke makeGrid function assigning it with two parameters
});

// create makeGrid function with argument x and y
function makeGrid(x, y) {

    $('tr').remove(); // select the table row tag and remove it from the page

    for(let i = 1; i <= x; i++){

	$('#pixelCanvas').append('<tr id=table' + i + '></tr>');

        for(let j = 1; j <= y; j++){

		    $('#table' + i).append('<td></td>');
		}
	}

    //add color when cell is clicked and remove the color when clicked again
    $('td').click(function() {

	    color = $('#colorPicker').val(); //get color value and store in color variable

	    if($(this).attr('style')){

		    $(this).removeAttr('style');
	    } // remove style attribute from cell if style availability is true
	    else{
		    $(this).attr('style', 'background-color:' + color);
	    }// add style attribute with background color to the cell if style availability in the cell is false.
    });
} 


