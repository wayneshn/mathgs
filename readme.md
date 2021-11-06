# Mathjs for Google Apps Script

This project exports the [mathjs](https://github.com/josdejong/mathjs) package as a Google Apps Script library.

Script ID: 1RVaR5imm7orvjhelFyhOxQPqvtqLTU74WokQz7_nPdwjQ7yeSrvdfMKE

## Adding the library to your project

Mathjs for Google Apps Script (Mathgs) is made available as a script library. This is how you add it to your project:

Select "Resources" > "Libraries..." in the Google Apps Script editor. Enter the project key (1RVaR5imm7orvjhelFyhOxQPqvtqLTU74WokQz7_nPdwjQ7yeSrvdfMKE) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.) Select the highest version number, and choose math as the identifier. Press Save. You can now use the mathgs (math) library in your code.

## Compile command

This project uses esbuild to compile npm packages to Google Apps Script. Here is an example of how you can compile the index.js file to the math.js file.

npx esbuild index.js --bundle --global-name=math --outfile=math.js --platform=node

Simply copy the compiled code to your Google Apps Script IDE and you will be able to use the library.

## Troubleshooting

In case you see the following error message:

ReferenceError: exports is not defined

You can add the following line to the top of your math.js or math.gs file:

var exports = {"\_\_esModule": true}

This should fix the error.

## Supporter

This project is supported by [Logic Sheet](https://logicsheet.co/), an all-in-one data-processing tool for Google Sheets.
