// Design

// ******
// *    *
// *    *
// *    *
// *    *
// ******


// Ex : 1)

let num = 5;

for ( let i = 0; i <= num; i++){
    for(let j = 0; j <= num; j++){
        if((i == 0 || i == num) || (j == 0 || j == num)) {
            document.write("*")
        } else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.write("<br>")
}

// Ex : 2)

// let x = Number(prompt("Enter a number", 5))
// for( let i = 0; i < x; i++){
//    for(let j = 0; j < x; j++){
//         ((i == 0 || i == x - 1) || (j == 0 || j == x - 1)) ? document.write("*") : document.write("&nbsp;&nbsp")
//    }
//     document.write("<br>");
// }