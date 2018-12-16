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

Some system requirements here.

### Recommended Versions

Use version 1.0 of ExampleModule.

## Database Setup

Integer placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. 

## Installation

Integer placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. 

### Running The Test Suite

Integer placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. 

## Endpoints

Integer placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. 

### Endpoint 1

Integer placerat augue sit amet congue hendrerit. Proin posuere, diam in porttitor vehicula, elit est pulvinar massa, eget tristique orci odio nec ligula. Etiam sed leo mollis, feugiat lorem sit amet, sagittis dolor. Maecenas condimentum lectus vitae mauris viverra consectetur. Praesent quis magna tempor, bibendum velit vel, lobortis justo. Proin. 

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

