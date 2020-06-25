const EventEmitter=require('events')
//define new events
const emitter=new EventEmitter()

//emit the event
setImmediate(()=>{
    emitter.emit('TEST_EVENT')
})


//subscribe to the event
emitter.on('TEST_EVENT',()=>{
  console.log('1 Event emitted')
})
emitter.on('TEST_EVENT',()=>{
  console.log('2 event emitted')
})
emitter.on('TEST_EVENT',()=>{
  console.log('3 event emitted')
})

//need to emit the event after subscription
//emitter.emit('TEST_EVENT')


/* to avoid later emitting the event before subscription use setImmediate*/
