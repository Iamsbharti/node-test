const funcTest=(sec)=>{
	console.log(`Hello after ${sec} seconds`)
}
let time1=4;
let time2=8;
setTimeout(funcTest,time1*1000,time1)
setTimeout(funcTest,time2*1000,time2)