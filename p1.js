const msg="Hello World!"
let count=1

const printMsg=()=>{
	console.log(msg)
	if(count===5){
		console.log('Done')
		clearInterval(interval)
	}
	count++;
	//clearInterval(interval)
}

let interval=setInterval(printMsg,1*1000)
