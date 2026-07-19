console.log("1 Open BMS"); //8 sec
console.log("2 Search movie"); // 3 sec
console.log("3 Select seats"); // 5 sec
console.log("4 Make payment"); // 1 sec
console.log("5 Tickets booked"); // 2 sec

console.log(" "); 

//setTimeout - Asynchronous
setTimeout(() => {
    console.log("1 Open BMS");  
}, 8000);
setTimeout(() => {
    console.log("2 Search movie");  
}, 3000);
setTimeout(() => {
    console.log("3 Select seats");  
}   , 5000);
setTimeout(() => {
    console.log("4 Make payment");  
}, 1000);   
setTimeout(() => {
    console.log("5 Tickets booked");  
}, 2000);   

console.log("       ");


//Callback - Asynchronous
setTimeout(() => {
    console.log("1 Open BMS");
    setTimeout(() => {
        console.log("2 Search movie");
        setTimeout(() => {
            console.log("3 Select seats");
            setTimeout(() => {
                console.log("4 Make payment");
                setTimeout(() => {
                    console.log("5 Tickets booked");
                }, 2000);
            }, 1000);
        }, 5000);
    }, 3000);
}, 8000);
