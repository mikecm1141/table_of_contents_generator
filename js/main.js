const clearTextarea = () => {
  $('#input-documentation').val('');
}

const formatLink = (string) => {
  return string.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g,"").replace(/\s/g,'-').toLowerCase();
}

const countOctothorpe = (string) => {
  return (string.match(/#/g) || []).length
}

const generateToc = () => {
  let tocOutput = '';
  $('#output').empty();
  let documentation = $('#input-documentation').val().split('\n');

  for (let i = 0; i < documentation.length; i++) {
    let currentLine = documentation[i];
    if (countOctothorpe(currentLine) === 2) {
      let headingText = currentLine.slice(3, currentLine.length);
      let headingLink = formatLink(headingText);
      tocOutput = tocOutput + `* [${headingText}](#${headingLink})\n`
    } else if (countOctothorpe(currentLine) === 3) {
      let headingText = currentLine.slice(4, currentLine.length);
      let headingLink = formatLink(headingText);
      tocOutput = tocOutput + `    * [${headingText}](#${headingLink})\n`
    } else if (countOctothorpe(currentLine) === 4) {
      let headingText = currentLine.slice(5, currentLine.length);
      let headingLink = formatLink(headingText);
      tocOutput = tocOutput + `        * [${headingText}](#${headingLink})\n`
    } else if (countOctothorpe(currentLine) === 5) {
      let headingText = currentLine.slice(6, currentLine.length);
      let headingLink = formatLink(headingText);
      tocOutput = tocOutput + `            * [${headingText}](#${headingLink})\n`
    } else if (countOctothorpe(currentLine) === 6) {
      let headingText = currentLine.slice(7, currentLine.length);
      let headingLink = formatLink(headingText);
      tocOutput = tocOutput + `                * [${headingText}](#${headingLink})\n`
    }
  }

  $('#output').text(tocOutput);
}

const addExampleDoc = () => {
  let example = `## System Requirements
### Recommended Versions
## Database Setup
## Installation
### Running The Test Suite
## Endpoints
### Endpoint 1
#### Endpoint 1 GET
##### Endpoint 1 GET Happy Response
##### Endpoint 1 GET Sad Response
#### Endpoint 1 POST
##### Endpoint 1 POST Body Requirements
###### Endpoint 1 POST Happy Response
###### Endpoint 1 POST Sad Response
### Endpoint 2
#### Endpoint 2 GET
#### Endpoint 2 POST
## Contributors
## Dependencies`;
  $('#input-documentation').val(example);
  generateToc();
}

// ********** EVENT LISTENERS **********

$('#reset').on('click', () => {
  clearTextarea();
});

$('#generate').on('click', () => {
  generateToc();
});

addExampleDoc();

