/* In eg 1 process will listen for readable event addend
  read from stdin stream and write to stdout
 */

process.stdin.on('readable',()=>{
  const data=process.stdin.read()
  if(data!==null){
    process.stdout.write(data)
  }
})

/*Here it will listen to process's on event and exit after the time
 interval


setTimeout(()=> process.exit(),2000)
 process.on('exit',()=>{
   console.log('Process will exit now')
 })
 console.log('Process Stream eg')
*/
