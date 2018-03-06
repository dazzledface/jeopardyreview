// console.group('Main.js loaded');

var questions = [
  /* HTML */
  {
    prompt: 'The title element in the head section of an HTML document specifies the text that is...',
    options: ['used to refer to the document', 'used to refer to the application', 'displayed in the browser tab of that page', 'displayed in the status bar of the browser'],
    correctAnswer: 'displayed in the browser tab of that page',
    cashPrize: 10
  },
  {
    prompt: 'Three inline elements are:',
    options: ['nav, b, and span', 'b, a, and img', 'li, img, and h1', 'a, img, and ul'],
    correctAnswer: 'b, a, and img',
    cashPrize: 50
  },
  {
    prompt: 'Where does the following notation indicate in a typical website project? <link href="styles.css" rel="stylesheet">',
    options: ['the stylesheet is in the same folder as the current page', 'the stylesheet is in a folder that is a level above the current page', 'the stylesheet is in another folder that is at the same level as the current page', 'the stylesheet is in the root folder of the website'],
    correctAnswer: 'the stylesheet is in the same folder as the current page',
    cashPrize: 100
  },
  {
    prompt: 'Which of the following should you do to provide accessibility to img elements with useful content?',
    options: ['Code an src attribute with an absolute URL', 'Code an alt attribute that describes the image', 'Use only PNG images', 'Provide an alternate image'],
    correctAnswer: 'Code an alt attribute that describes the image',
    cashPrize: 500
  },
  {
    prompt: '<p><img src="../images/logo.gif"></p> This img element gets the image file from the images folder, which is...',
    options: ['at the level above the current folder', 'at the level below the current folder', 'at the same level as the current folder', 'two levels above the current folder'],
    correctAnswer: 'at the same level as the current folder',
    cashPrize: 1000
  },
  /* CSS */
  {
    prompt: 'You can use ems or percentages to specify a ________ unit of measurement.',
    options: ['relative', 'fixed', 'established', 'inherited'],
    correctAnswer: 'relative',
    cashPrize: 10
  },
  {
    prompt: '"<span>" has what kind of default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline',
    cashPrize: 50
  },
  {
    prompt: 'Which of the following selectors applies to all <a> elements with “hot” as their class name that are coded within a div element that has “header” as its id?',
    options: ['a.hot #header', 'a.hot > header', '#header a.hot', '#header a:hot'],
    correctAnswer: '#header a.hot',
    cashPrize: 100
  },
  {
    prompt: 'By default, a browser displays each _________ element on a new line.',
    options: ['image', 'floated', 'block', 'body'],
    correctAnswer: 'block',
    cashPrize: 500
  },
  {
    prompt: 'How many stylesheets can be referenced by a single HTML document?',
    options: ['styles must be contained in a single integrated stylesheet', 'one custom stylesheet plus styles from one front-end framework', 'it depends on the stylesheet types', 'as many stylesheets as you want'],
    correctAnswer: 'as many stylesheets as you want',
    cashPrize: 1000
  },
  /* More CSS */
  {
    prompt: 'Which of the following units of measurement is equal to the font size for the current default font?',
    options: ['a pixel', 'a point', 'an em', 'a percentage'],
    correctAnswer: 'an em',
    cashPrize: 10
  },
  {
    prompt: 'Which of the following is NOT one of the ways that you can specify a color in CSS?',
    options: ['color: white;', 'color: rgb(50%, 25%, 25%);', 'color: getColor("red");', 'color: #cd5c5c;'],
    correctAnswer: 'color: getColor("red");',
    cashPrize: 50
      },
  {
    prompt: 'The RGBA and HSLA colors that are available with CSS3 let you specify',
    options: ['the opacity of the color', 'the concentration of the color', 'a pattern for the color', 'a name for the color'],
    correctAnswer: 'the opacity of the color',
    cashPrize: 100
      },
  {
    prompt: 'A child selector in CSS allows you to select elements that',
    options: ['are any descendant of an element', 'are a direct descendant of an element', 'have an attribute that matches the specified child', 'have a class that matches the specified child'],
    correctAnswer: 'are a direct descendant of an element',
    cashPrize: 500
      },
  {
    prompt: 'Which of the following selectors is most specific?',
    options: ['.nav', '#nav', 'a', 'div'],
    correctAnswer: '#nav',
    cashPrize: 1000
      },
      /* The Internet */
  {
    prompt: 'What type of computer stores most of the HTML and other files that make up modern web sites?',
    options: ['router', 'IMP', 'mainframe', 'server'],
    correctAnswer: 'server',
    cashPrize: 10
      },
  {
    prompt: 'The World Wide Web application and its related standards were first developed by a team under whose leadership?',
    options: ['Tim Berners-Lee', 'Larry Page', 'Vannevar Bush', 'Charles Babbage'],
    correctAnswer: 'Tim Berners-Lee',
    cashPrize: 50
      },
  {
    prompt: 'The protocols that control the transmission of data on the Internet break down data sent over the network into smaller chunks of data known as __________.',
    options: ['units', 'packets', 'bits', 'parcels'],
    correctAnswer: 'packets',
    cashPrize: 100
      },
  {
    prompt: 'A web developer who works primarily on client-side web interactions is called a...',
    options: ['back-end developer', 'full-stack developer', 'front-end developer', 'designer'],
    correctAnswer: '',
    cashPrize: 500
      },
  {
    prompt: 'When you enter a URL into your browser, what piece of information will the browser immediately request from the nearest domain-name server?',
    options: ['The IP address associated with the URL', 'The files that comprise the website you wish to access', 'The amount of data required to display the requested site', 'The security status of the data you wish to access'],
    correctAnswer: 'The IP address associated with the URL',
    cashPrize: 1000
      },
      /* Positioning */
  {
    prompt: 'The default positioning value for all HTML elements is ____________.',
    options: ['static', 'fixed', 'absolute', 'relative'],
    correctAnswer: 'static',
    cashPrize: 10
      },
  {
    prompt: 'If you do not apply any positioning values to an HTML element, it will...',
    options: ['default to invisible unless specified otherwise', 'move toward the upper left-hand corner of the document', 'take the display property of its parent element', 'require that positioning be applied to the root element'],
    correctAnswer: 'move toward the upper left-hand corner of the document',
    cashPrize: 50
      },
  {
    prompt: 'Which of the following positioning values will allow you to create a header that will not scroll away when the user scrolls down the page?',
    options: ['absolute', 'fixed', 'static', 'relative'],
    correctAnswer: 'fixed',
    cashPrize: 100
  },
  {
    prompt: 'Which of the following CSS rules will be most necessary if you wish to correctly position a footer area below two left-floated columns?',
    options: ['float: none;', 'width: 100%', 'display: footer;', 'clear: left;'],
    correctAnswer: 'clear: left;',
    cashPrize: 500
      },
  {
    prompt: 'Which of the following methods places an element outside the normal flow of the document?',
    options: ['Absolute positioning', 'Relative positioning', 'Floats', 'Static positioning'],
    correctAnswer: 'Absolute positioning',
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
