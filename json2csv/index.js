import { json2csv } from "json-2-csv";

exports.parse = json2csv;


// npx esbuild index.js --bundle --global-name=json2csv --outfile=json2csv.js --platform=node --format=iife

//docs: https://www.npmjs.com/package/json-2-csv
