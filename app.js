

// InddexOf Method;;


// var months=["jan","feb","Mar","apr","May","jun"];

// var birthMonth=prompt("Enter Your Birthday Months");

// birthday=birthMonth.slice(0,3);

// birthday.toLowerCase();


// var dis=months.indexOf(birthday);

// if(dis >-1){
//     console.log("Congrats");
// }
// else{
//     console.log("sorry");
// }















// loops method




// var months=["jan","feb","Mar","apr","May","jun"];

// var birthMonth=prompt("Enter Your Birthday Months");

// birthday=birthMonth.slice(0,3);

// birthday.toLowerCase();


// var isbirth=false;

// for(var i=0; i<months.length; i++){
//     if( months[i]===birthday){

//         isbirth=true;
//         break;
//     }
// }


// if(isbirth){
//     console.log("congratulation")
// }

// else{
//     console.log("Sorry")
// }






// var userPara=prompt("enter your favorite paragraph");

// for(i=0; i<userPara.length; i++){
//     var char=userPara.slice(i,i+2);
//     if(char==="  "){
//         console.log("double space");
//         break;
//     }
   
// }




// var text=" the world war II is win The Pakistan.";
// var replace="second world war";



// for(i=0; i<text.length; i++){
//     var searchText=text.slice(i,i+12);
//     if(searchText ==="world war II"){
//         text=text.slice(0,i) + replace + text.slice(i+12);
//     }

// }

// console.log(text)








var text=" the world war II is win The Pakistan.";


let newtext=text.replace(/the world war II/g,"second world war");

console.log(newtext)















































