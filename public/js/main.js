// console.group('Main.js loaded');

var questions = [
/* HTML */
  {
    prompt: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 10
  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5',
    cashPrize: 50
  },
  {
    prompt: 'What method has largely replaced the use of internal <style> elements in HTML?',
    options: ['HTML5 Code', 'Embedded Styles', 'Templating Languages', 'Cascading Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
    cashPrize: 100
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a div?',
    options: ['Semantic Elements', 'PseudoDivs', 'Division IDs', 'Division Elements'],
    correctAnswer: 'Semantic Elements',
    cashPrize: 500
  },
  {
    prompt: 'What HTML value should you use to create a link to an outside web page that will open in a new browser window?',
    options: ['_new', '_blank', '_default', '_window'],
    correctAnswer: '_blank',
    cashPrize: 1000
  },
  /* CSS */
  {
    prompt: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    correctAnswer: 'Cascading Style Sheets',
    cashPrize: 10
  },
  {
    prompt: 'In the rule set that follows, the selector applies to all elements that have “red” as their ____________ name: .red { color: red; }',
    options: ['primary', 'element', 'node', 'class'],
    correctAnswer: 'class',
    cashPrize: 50
  },
  {
    prompt: 'The * selector applies to what part of a web page?',
    options: ['Everything', 'Wildcard Elements', 'Multiplication Functions', 'Elements with the * ID'],
    correctAnswer: 'Everything',
    cashPrize: 100
  },
  {
    prompt: 'When you code a selector that selects by ___________, the rule set applies to just one HTML element.',
    options: ['class', 'document', 'inheritance', 'id'],
    correctAnswer: 'id',
    cashPrize: 500
  },
  {
    prompt: 'If more than one rule set is applied to an element, the rule set with the selector that has the highest ____________ is used.',
    options: ['priority', 'hierarchy', 'specificity', 'generalizability'],
    correctAnswer: 'specificity',
    cashPrize: 1000
  },
  /* More CSS */
  {
    prompt: 'Times New Roman is a font _____________.',
    options: ['parent', 'family', 'descendant', 'determinant'],
    correctAnswer: 'family',
    cashPrize: 10
  },
  {
    prompt: 'When you use an external style sheet with an HTML document, you get all but one of the benefits that follow. Which one is it?',
    options: ['Your HTML files are smaller and simpler', 'Your CSS files are easy to create and maintain', 'You provide consistent formatting for all of the pages that use the style sheet', 'You can modify the formatting for all of the related pages by changing one style sheet'],
    correctAnswer: 'Your CSS files are easy to create and maintain',
    cashPrize: 50
  },
  {
    prompt: 'Underlining and overlining are a type of text formatting that is referred to as text ______________.',
    options: ['alignment', 'activity', 'decoration', 'dynamism'],
    correctAnswer: 'decoration',
    cashPrize: 100
  },

  {
    prompt: 'What property can you use to specify the amount of space between the contents of a div and its outer edge?',
    options: ['border', 'padding', 'margin', 'width'],
    correctAnswer: 'padding',
    cashPrize: 500
  },
  {
    prompt: 'For user accessibility, it makes the most sense to apply the same formatting to the :focus pseudo-class for an element as you apply to the _______________ pseudo-class for that element.',
    options: [':hover', ':active', ':center', ':clicked'],
    correctAnswer: ':hover',
    cashPrize: 1000
  },

  /* Hacks & Tricks */
  {
    prompt: 'What CSS rule can you use to center all the contents of a webpage in the browser?',
    options: ['margin: 0 auto;', 'center: all;', 'float: middle;', '*: float-center;'],
    correctAnswer: 'margin: 0 auto;',
    cashPrize: 10
  },
  {
    prompt: 'Which single CSS rule can you apply to make list items look and behave like items in a horizonal navigation menu?',
    options: ['position: relative;', 'list-style: none;', 'display: inline-block;', 'nav: navbar-center;'],
    correctAnswer: 'display: inline-block;',
    cashPrize: 50
  },
  {
    prompt: 'What will happen by default if you apply a float to a child element located inside an empty parent element?',
    options: ['The parent element will collapse and vanish', 'The parent element will expand to contain the child element', 'The child element will refuse to take the float value', 'The child element will scale in proportion to size of the parent element'],
    correctAnswer: 'The parent element will collapse and vanish',
    cashPrize: 100
  },
  {
    prompt: 'Which of the following values can be used to create a grid-like structure without the use of floats?',
    options: ['absolute', 'inline-block', 'default-position', 'document-flow'],
    correctAnswer: 'inline-block',
    cashPrize: 500
  },
  {
    prompt: 'What CSS rule can you use to force a parent element to recognize floated child elements?',
    options: ['float: clear;', 'overflow: auto;', 'clear: left;', 'margin: 0 0 0 0;'],
    correctAnswer: 'overflow: auto;',
    cashPrize: 1000
  },
  /* Transitions & Transforms */
  {
    prompt: 'What CSS3 method can we use by itself to control a gradual change in the state of an element?',
    options: ['transform', 'hover', 'transition', 'delay'],
    correctAnswer: 'transition',
    cashPrize: 10
  },
  {
    prompt: 'Which of the following can you NOT specify when coding a standard CSS3 transform for an element?',
    options: ['where the element should go', 'the size of the element', 'the content appearing within the element', 'whether the element should rotate'],
    correctAnswer: 'the content appearing within the element',
    cashPrize: 50
  },
  {
    prompt: 'What value can be used to specify the distance of the transform-origin from the left-hand edge of the box?',
    options: ['x-offset', 'y-offset', 'offset-keyword', 'offset-transform'],
    correctAnswer: 'x-offset',
    cashPrize: 100
  },
  {
    prompt: 'Which of the following can you NOT specify when coding a standard CSS3 transition for an element?',
    options: ['the duration of the transition itself', 'the amount of time before the transition should start', 'the property that will undergo the transition', 'an alternative to the transition for older browsers'],
    correctAnswer: 'an alternative to the transition for older browsers',
    cashPrize: 500
  },
  {
    prompt: 'What will happen if the CSS that follows is applied to an image with an id of "image1"? #image1 {transition: 2s;} #image1:hover {transform: rotateX(360deg);}',
    options: ['The image will rotate horizontally around its center and end up where it began', 'The image will rotate horizontally from its bottom edge and end up where it began', 'The image will rotate horizontally around its center and end up below where it began', 'The image will rotate horizontally from its bottom edge and end up below where it began'],
    correctAnswer: 'The image will rotate horizontally around its center and end up where it began',
    cashPrize: 1000
  }
];
// Buzzer & Chaching sounds
var buzzer = document.getElementById("buzzer");
buzzer = window.buzzer;

function playbuzzer() {
  buzzer.play();
}

function pausebuzzer() {
  buzzer.pause();
}
var chaching = document.getElementById("chaching");
chaching = window.chaching;

function playchaching() {
  chaching.play();
}

function pausechaching() {
  chaching.pause();
}

// Global variable  score...
var score = 0;
//

$(function () {
  // Hide the Modal after submit
  $("#closesubmit").click(function () {
    $("#myModal").modal("hide");
  });
});
$(function () {
  // Remove Element after click
  $(".gridbtn").click(function () {
    $(this).addClass("disabled");
    $(this).remove();
  });
});
// Submit Question Answer
function submit(a, b) {
  var selected = $(".modal-body input:checked").val();
  // Determine if correct answer was chosen and alert prize
  if (selected === questions[window.currentQuestion].correctAnswer) {
    // console.log(selected + " was selected");
    chaching.play();
    window.addprize = questions[window.currentQuestion].cashPrize;
    score = score + window.addprize;
    console.log(score);
    $('#score1').html("  $" + score);
    score = 0;
  }
  // Determine if incorrect answer was chosen and alert prize
  if (selected !== questions[window.currentQuestion].correctAnswer) {
    buzzer.play();
    window.subprize = questions[window.currentQuestion].cashPrize;
    score = score - window.subprize;
    $('#score1').html("  $" + score);
    score = 0;
  }
}
// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disabled" class="btn-group" data-toggle="buttons"></div>');
  question.options.forEach(function (opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}
// Populate modal window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}
// Modal show/close functions
$(function () {
  $("#myModal").on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });
});
$("#myModal").on('hidden.bs.modal', function () {
  console.log('The modal is now hidden.');
});
$('.modal-body input:checked').submit(function () {
  $('#myModal').modal('toggle');
  return false;
});
