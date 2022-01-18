# Mathjs for Google Apps Script

This project exports the [mathjs](https://github.com/josdejong/mathjs) package as a Google Apps Script library.

Script ID: 1RVaR5imm7orvjhelFyhOxQPqvtqLTU74WokQz7_nPdwjQ7yeSrvdfMKE

## Adding the library to your project

Mathjs for Google Apps Script (Mathgs) is made available as a script library. This is how you add it to your project:

Select "Resources" > "Libraries..." in the Google Apps Script editor. Enter the project key (1RVaR5imm7orvjhelFyhOxQPqvtqLTU74WokQz7_nPdwjQ7yeSrvdfMKE) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.) Select the highest version number, and choose math as the identifier. Press Save. You can now use the mathgs (math) library in your code.

## Usage

Use the math identifier to use mathjs functions.

    function useMath() {
        Logger.log(math.round(math.e, 3)); // 2.718
        math.atan2(3, -3) / math.pi; // 0.75
        math.log(10000, 10); // 4
        math.sqrt(-4); // 2i
        math.pow(
            [
                [-1, 2],
                [3, 1],
            ],
            2
        ); // [[7, 0], [0, 7]]
        math.derivative('x^2 + x', 'x'); // 2 * x + 1

        // expressions
        math.evaluate('12 / (2.3 + 0.7)'); // 4
        math.evaluate('12.7 cm to inch'); // 5 inch
        math.evaluate('sin(45 deg) ^ 2'); // 0.5
        math.evaluate('9 / 3 + 2i'); // 3 + 2i
        math.evaluate('det([-1, 2; 3, 1])'); // -7

        // chaining
        math.chain(3).add(4).multiply(2).done(); // 14
        //code snippet from https://github.com/josdejong/mathjs
    }

For how to use mathjs, please take a look at its own [documentation](https://mathjs.org/docs/getting_started.html).

## Compile command

This project uses esbuild to compile npm packages to Google Apps Script. Here is an example of how you can compile the index.js file to the math.js file.

    npx esbuild index.js --bundle --global-name=math --outfile=math.js --platform=node

Simply copy the compiled code to your Google Apps Script IDE and you will be able to use the library.

## Troubleshooting

In case you see the following error message:

    ReferenceError: exports is not defined

You can add the following line to the top of your math.js or math.gs file:

    var exports = {"__esModule": true}

This should fix the error.
