// //##############    2.1    #################
// alert("I’m JavaScript!");
//
// //##############    2.4.1    #################
// let admin;
// let name;
// name = "Ivan";
// admin = name;
// alert(admin);
//
// //##############    2.4.2    ##################
// let planet = "Earth";
// let currentVisitor;
//
// //##############    2.4.3    ##################
// //Uppercase for both
//
// //##############    2.5    ##################
// // 1
// // name
// // Ilya
//
// //##############    2.6    ##################
// name = prompt("What is your name?");
// alert(name);
//
// //##############    2.8.1    ##################
// a = 2;
// b = 2;
// c = 2;
// d = 1;
//
// //##############    2.8.2    ##################
// a = 4;
// x = 5;
//
// //##############    2.8.3    ##################
// // "" + 1 + 0       10
// // "" - 1 + 0       -1
// // true + false     true
// // 6 / "3"          2
// // "2" * "3"        6
// // 4 + 5 + "px"     9px
// // "$" + 4 + 5      $45
// // "4" - 2          2
// // "4px" - 2        ?
// // 7 / 0            infinite
// // "  -9  " + 5     -4
// // "  -9  " - 5     -14
// // null + 1         1
// // undefined + 1    1
// // " \t \n" - 2     -2
//
// //##############    2.8.4    ##################
// a = prompt("First number?", 1);
// b = prompt("Second number?", 2);
//
// alert(Number(a) + Number(b));
//
// //##############    2.9    ##################
// // 5 > 4                    true
// // "apple" > "pineapple"    false
// // "2" > "12"               true
// // undefined == null        true
// // undefined === null       false
// // null == "\n0\n"          false
// // null === +"\n0\n"        false
//
// //##############    2.10.1    ##################
// // yes
//
// //##############    2.10.2    ##################
// let answer = prompt("Whoooo, who lives in a pineapple under the sea?");
// alert(answer === "Sponge Bob" ? "Right!" : "Didn't know? Sponge Bob?");
//
// //##############    2.10.3    ##################
// let value = prompt('Type a number');
//
// if (value > 0) {
//     alert( 1 );
// } else if (value < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }
//
// //##############    2.10.4    ##################
// let result = (a + b < 4) ? 'Below' : 'Over';
//
// //##############    2.10.5    ##################
// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             '';
//
// //##############    2.11.1   ##################
// alert( null || 2 || undefined );        //2
//
// //##############    2.11.2   ##################
// alert( alert(1) || 2 || alert(3) );     //1
//
// //##############    2.11.3   ##################
// alert( 1 && null && 2 );                //undefined
//
// //##############    2.11.4   ##################
// alert( alert(1) && alert(2) );          //1 - undefined
//
// //##############    2.11.5   ##################
// alert( null || 2 && 3 || 4 );           //3

//##############    2.11.6   ##################
// let ageBetween = age => {
//     if (age <= 14 || age >= 90)
//         return false;
//     else
//         return true;
// }
// alert(ageBetween(13));
// alert(ageBetween(14));
// alert(ageBetween(15));
// alert(ageBetween(89));
// alert(ageBetween(90));
// alert(ageBetween(91));

//##############    2.11.7   ##################
// let ageNotIn = age => {
//     if (!(age >= 14) && (age >= 90))
//         return true;
//     else
//         return false;
// }

//##############    2.11.8   ##################
//first     -   -1
//third     -   1

//##############    2.11.9   ##################
// let user = prompt("login:");
// let password;
// if (user === "Admin"){
//     password = prompt("password:");
//     if (password === "TheMaster") alert("Welcome!");
//     else if (password == null) alert("Canceled");
//     else alert("Wrong password!")
// } else if (user == null) alert("Canceled")
// else alert("Who are you? I didn't call you! Fuck off!")

//##############    2.13.1   ##################
//1

//##############    2.13.2   ##################
//  1   |   2
//------|-------
//  1   |   1
//  2   |   2
//  3   |   3
//  4   |   4
//      |   5
//
//Not the same

//##############    2.13.3   ##################
//  1   |   2
//------|-------
//  0   |   0
//  1   |   1
//  2   |   2
//  3   |   3
//  4   |   4
//
//The same

//##############    2.13.4   ##################
// for (i = 2; i <= 10; i++){
//     if (i % 2 == 0)
//         alert(i);
// }

//##############    2.13.5   ##################
// let i = 0;
// while (i < 3){
//     alert( `number ${i}!` );
//     i++;
// }

//##############    2.13.6   ##################
// let num;
//
// do {
//     num = prompt("Enter a number");
// } while (num <= 100 && num);

//##############    2.13.7   ##################
// let n = 25;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//
//         alert( i );
//     }

