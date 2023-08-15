//const fs=require("fs");
//type in package .json is module means ecma script-current version, not a comon js.
/*import fs from 'fs';

fs.writeFile("message.txt","Hello Node",(err)=>{

    if(err) throw err;
    console.log('the file has been saved');
})

fs.readFile('./message.txt', "UTF8",(err,data) => {
    if(err) throw err;
    console.log(data);
})*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer.prompt([{
    message:"Type in your url",
    name:"URL"

}]).then((answers)=> /// arrow function,answere is a argument, function name doesn't exists
{   
    const url=answers.url;
    console.log(answers);
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
})
.catch((error)=>{
if(error.isTtyError)
{

}

 else {}});
