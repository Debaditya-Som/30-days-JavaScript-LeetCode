/*
2621. Sleep

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value


*/
async function sleep(millis) {
   return new Promise(function(res,rej){
     try{
      setTimeout(res, millis);
     }catch(err){
       rej(err)
     }
   })
}
