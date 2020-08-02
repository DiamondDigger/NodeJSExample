const EventEmmiter = require('events')

const emmiter = new EventEmmiter()

emmiter.on('anything',  data => {

    console.log('Listening ON: ', data)
});

emmiter.emit('anything', {a:221})
emmiter.emit('anything', {b:-65})

setTimeout(()=>{
    emmiter.emit('anything', {c:134})
}, 300)


class Dispatcher extends EventEmmiter{
    subscribe(eventName, cb){
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data){
        console.log('[Dispatch...]')
        this.emit(eventName, data)
    }
}

const div = new Dispatcher()

div.subscribe('event', data => {
    console.log('ON [event]: ', data)
});

div.dispatch('event', {h:3})
