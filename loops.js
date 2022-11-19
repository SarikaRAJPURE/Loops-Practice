//Write a for loop that logs 0-15
console.log("2. For loop that counts from 0-15");
for (let i = 0; i <= 15; i++) {
    console.log(i);
}
console.log("");
console.log("--------------------------------------------------------------");

//Write a for loop that counts from 15-0
console.log("3. For loop that counts from 15-0");
for (let i = 15; i >=0; i--) {
    console.log(i);
}
console.log("");
console.log("--------------------------------------------------------------");

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) 
//and adds 1 to the laps variable. AFTER the loop, log laps.

/* 
//using for loop
for(let laps=0;laps<10;laps++){
    console.log("that’s another lap!");
} */
console.log("4. loop that logs that’s another lap!") ;
//using while loop
laps = 0;
while (laps<10) {
    console.log("that’s another lap!");
    laps++;
}
console.log("");
console.log("--------------------------------------------------------------");


//Make variable age. Make a loop from 0-100. 
//In every loop check if i == age, if so log something, else say “age doesn’t match”.
console.log("6. Age match or not");
let age = 0;
for (let i = 0; i <= 100; i++) {
    if (i == age) {
        console.log("age match");
    }
    else {
        console.log("age doesn’t match");
    }
}
console.log("");
console.log("--------------------------------------------------------------");

//Write a loop that logs all even numbers from 0-700.
console.log("7. Even numbers from 0-700");
for(i=0;i<=700;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("");
console.log("--------------------------------------------------------------");

//Write a loop that logs all even numbers from 0-700.
console.log("8.Odd numbers from 0-700.");
for(i=0;i<=700;i++){
    if(!(i%2==0)){
        console.log(i);
    }
}

console.log("");
console.log("--------------------------------------------------------------");

//Write a loop with some “if else” statements. 
//The loop should start at 1900 and go to 1949 and log when things were invented. 
//For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
console.log("Time line");
for(let year=1900;year<=1949;year++)
{
    if(year==1900){
        console.log("it is 1900 - the Zeppelin is invented!");
    }else if(year==1902){
        console.log("it is 1902 - the Teddy Bear is invented!");
    }else if(year==1910){
        console.log("it is 1910 - the Talking Motion Picture is invented!");
    }else if(year==1913){
        console.log("it is 1913 - the Bra is invented!");
    }else if(year==1918){
        console.log("it is 1918 - the Fortune Cookie is invented!");
    }else if(year==1923){
        console.log("it is 1923 - the Traffic Signal is invented!");
    }else if(year==1935){
        console.log("it is 1935 - the Radar is invented!");
    }else if(year==1938){
        console.log("it is 1938 - the Ballpoint Pen is invented!");
    }else if(year==1945){
        console.log("it is 1945 - the Slinky is invented!");
    }
}
