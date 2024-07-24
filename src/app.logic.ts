import fs from "fs";
import { yarg } from "./config/plugins/yarg.plugin";

const { b:base, l:limit, s:showTable} = yarg;

let outputMessage = ``;
let headerMessage = `
================================
      Tabla del ${ base }
================================\n    
`;

for( let i = 1; i <= limit; i++ ){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

if( showTable ){console.log( outputMessage )}

const outputPath = 'output';

fs.mkdirSync( outputPath, {recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('file created');




