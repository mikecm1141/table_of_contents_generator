'use strict';

var clearTextarea = function clearTextarea() {
  $('#input-documentation').val('');
};

var formatLink = function formatLink(string) {
  return string.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g, "").replace(/\s/g, '-').toLowerCase();
};

var countOctothorpe = function countOctothorpe(string) {
  return (string.match(/#/g) || []).length;
};

var generateToc = function generateToc() {
  var tocOutput = '';
  $('#output').empty();
  var documentation = $('#input-documentation').val().split('\n');

  for (var i = 0; i < documentation.length; i++) {
    var currentLine = documentation[i];
    if (countOctothorpe(currentLine) === 2) {
      var headingText = currentLine.slice(3, currentLine.length);
      var headingLink = formatLink(headingText);
      tocOutput = tocOutput + ('* [' + headingText + '](#' + headingLink + ')\n');
    } else if (countOctothorpe(currentLine) === 3) {
      var _headingText = currentLine.slice(4, currentLine.length);
      var _headingLink = formatLink(_headingText);
      tocOutput = tocOutput + ('    * [' + _headingText + '](#' + _headingLink + ')\n');
    } else if (countOctothorpe(currentLine) === 4) {
      var _headingText2 = currentLine.slice(5, currentLine.length);
      var _headingLink2 = formatLink(_headingText2);
      tocOutput = tocOutput + ('        * [' + _headingText2 + '](#' + _headingLink2 + ')\n');
    } else if (countOctothorpe(currentLine) === 5) {
      var _headingText3 = currentLine.slice(6, currentLine.length);
      var _headingLink3 = formatLink(_headingText3);
      tocOutput = tocOutput + ('            * [' + _headingText3 + '](#' + _headingLink3 + ')\n');
    } else if (countOctothorpe(currentLine) === 6) {
      var _headingText4 = currentLine.slice(7, currentLine.length);
      var _headingLink4 = formatLink(_headingText4);
      tocOutput = tocOutput + ('                * [' + _headingText4 + '](#' + _headingLink4 + ')\n');
    }
  }

  $('#output').val(tocOutput);
};

var addExampleDoc = function addExampleDoc() {
  var example = '## System Requirements\n\nSome system requirements here.\n\n### Recommended Versions\n\nUse version 1.0 of ExampleModule.\n\n## Database Setup\n\nInteger placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. \n\n## Installation\n\nInteger placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. \n\n### Running The Test Suite\n\nInteger placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. \n\n## Endpoints\n\nInteger placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. \n\n### Endpoint 1\n\nInteger placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. \n\n#### Endpoint 1 GET\n##### Endpoint 1 GET Happy Response\n##### Endpoint 1 GET Sad Response\n#### Endpoint 1 POST\n##### Endpoint 1 POST Body Requirements\n###### Endpoint 1 POST Happy Response\n###### Endpoint 1 POST Sad Response\n### Endpoint 2\n#### Endpoint 2 POST\n## Contributors\n## Dependencies';
  $('#input-documentation').val(example);
  generateToc();
};

// ********** EVENT LISTENERS **********

$('#reset').on('click', function () {
  clearTextarea();
});

$('#generate').on('click', function () {
  generateToc();
});

$('#copy-output').on('click', function () {
  var output = $('#output');

  output.select();
  document.execCommand('copy');

  $('#output-label').text('Copied Table of Contents Output!');
});

addExampleDoc();
