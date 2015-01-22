'use strict';

var projectTitle;
var jumbotronHeader;
var containingProject;
var description;
var projectID;
var newText;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("mordekaiser es #1");
		$(this).text('clicked me!');
		$('.jumbotron h1').toggleClass('active');
	});

	/*$('a.thumbnail').on('click', function(e) {
		console.log('whuehuaheuhuea was clicked');
		e.preventDefault();
		e.stopPropagation();

		$(this).css('background-color', '#7fff00')

	});*/

	$('a.thumbnail').on('click', projectClick);
	$('#submitBtn').on('click', updateProject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	e.preventDefault();
	e.stopPropagation();

	projectTitle = $(this).find('p').text();
	jumbotronHeader = $('.jumbotron h1');
	jumbotronHeader.text(projectTitle);

	containingProject = $(this).closest('.project');
	description = $(containingProject).find('.project-description');
	if(description.length !== 0) {
		description.remove();
		//description.html('<p>You only need to click once, fool. You last clicked on ' + (new Date()) + '</p>')
	} else {
		containingProject.append('<div class="project-description"><p>Description of the project.</p></div>');
	}
}

function updateProject() {
	projectID = $('#project').val();
	$(projectID).animate({
		width : $('width').val()
	});

	newText = $('#description').val();
	console.log(newText);

	$(projectID + ' .project-description').text(newText);
}