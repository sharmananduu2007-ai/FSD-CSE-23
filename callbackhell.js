/*async callbackhell

function test1(){
 setTimeout(()=>{
    console.log("test1");
 }, 2000);
}
function test2(){
    setTimeout(()=>{
        console.log("test2");
    }, 1000);


}

test1();
test2();


#sync callbackhell

function test1(cb){
 setTimeout(()=>{
    console.log("test1");
    cb();
 }, 2000);
}
function test2(cb){
    setTimeout(()=>{
        console.log("test2");
        cb();
    }, 1000);


}

test1(()=>{
    test2();
});*/

function test1(cb){
    setTimeout(() => {
        console.log('test1');
        cb();
    },2000)
}
function test2(cb){
    setTimeout(() => {
        console.log('test2');
        cb();
    },1000)
}
function test3(cb){
    setTimeout(() => {
        console.log('test3');
        cb();   
    },200)
}
function test4(cb){
    setTimeout(() => {
        console.log('test4');
        cb();
    },100)
}

test1(() => {
    test2(() => {
        test3(() => {
            test4();
        });
    });
});



