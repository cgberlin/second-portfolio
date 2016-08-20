function whatToShow(flexshow1, flexshow2, regularshow){     //the three arguments have to do with which elements to display as flex and which to just normally show
  $(flexshow1).css('display', 'flex');
  $(flexshow2).css('display', 'flex');
  $(regularshow).show();
}
$('#where-i-am').on('click', function(){       //listener for location button
  hideEverything();                             //hides anything else that may be showing
  whatToShow('#location-header', '', '#location-map');
  initMap();
});
$('#projects').on('click', function(){     //listener for projects button
  hideEverything();
  whatToShow('#project-1', '', '.more-projects-button');
});
$('#contact').on('click', function(){     //listener for contact button
  hideEverything();
  whatToShow('#contact-me', '#contact-me-bottom', '');
});
$('#about-me').on('click', function(){     //listener for about me button
  hideEverything();
  whatToShow('#about-me-page', '#about-me-page-header', '');
});
$('.project-image-container').hover(function(){     //listens for hover event on project images
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');    //changes the images to grayscale
  $(this).children().show(200);     //shows the git and chrome images
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(200);
}
);
$('.contact-buttons').hover(function(){     //listener for contact me buttons in the contact section
  $(this).css('-webkit-filter', 'invert(.8)');
},
function(){
  $(this).css('-webkit-filter', 'invert(.2)');
}
);
$('#next-button').on('click', function(){     //listener for next button on projects section
  showNextOrPrevious('addToCount');
});
$('#previous-button').on('click', function(){   //listener for previous button on projects section
  showNextOrPrevious('subtractFromCount');
});
function showNextOrPrevious(addOrSubtract){     //function to determine which project to show next, or to loop from beginning
  var projectToChange = '#project-' + projectCount;
  if (projectCount > 10){
    projectCount = 1;
  }
  else if (addOrSubtract === 'addToCount'){
    addToCount();
  }
  else if (addOrSubtract === 'subtractFromCount'){
    subtractFromCount();
  }
  else{
    console.log('error in arguments for show next or previous');
  }
  $(projectToChange).hide();
  projectToChange = '#project-' + projectCount;
  $(projectToChange).css('display', 'flex');
}
function addToCount(){    //adds to the project count if next button is clicked
  projectCount++;
  return projectCount;
}
function subtractFromCount(){   //goes back one if previous button is clicked
  if (projectCount >= 2){
    projectCount--;
  }
  return projectCount;
}
function hideEverything(){    //function to hide every section
  $('.project-image-container').css('display', 'none');
  $('.project-image-container-2').css('display', 'none');
  $('#location-map').hide();
  $('#location-header').css('display', 'none');
  $('#contact-me').hide();
  $('#contact-me-bottom').hide();
  $('#about-me-page').hide();
  $('#about-me-page-header').hide();
  $('.more-projects-button').hide();
}
