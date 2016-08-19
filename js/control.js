$('#where-i-am').on('click', function(){
  hideEverything();
  $('#location-header').css('display', 'flex');
  $('#location-map').show();
  initMap();
});

$('#projects').on('click', function(){
  hideEverything();
  $('#project-1').css('display', 'flex');
  $('.more-projects-button').show();
});

$('#contact').on('click', function(){
  hideEverything();
  $('#contact-me').css('display', 'flex');
  $('#contact-me-bottom').css('display', 'flex');
});

$('#about-me').on('click', function(){
  hideEverything();
  $('#about-me-page').css('display', 'flex');
  $('#about-me-page-header').show();
});
$('.project-image-container').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
  $(this).children().show(200);
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(200);
}
);
$('.project-image-container-2').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
  $(this).children().show(200);
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(200);
}
);
$('.contact-buttons').hover(function(){
  $(this).css('-webkit-filter', 'invert(.8)');
},
function(){
  $(this).css('-webkit-filter', 'invert(.2)');
}
);
$('#next-button').on('click', function(){
  showNextOrPrevious('addToCount');
});
$('#previous-button').on('click', function(){
  showNextOrPrevious('subtractFromCount');
});
function showNextOrPrevious(addOrSubtract){
  var projectToChange = '#project-' + projectCount;
  if (projectCount > 11){
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
  $(projectToChange).show();
}
function addToCount(){
  projectCount++;
  return projectCount;
}
function subtractFromCount(){
  if (projectCount >= 2){
    projectCount--;
  }
  return projectCount;
}
function hideEverything(){
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
