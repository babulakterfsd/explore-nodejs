const events = require('events');
const eventEmitter = new events.EventEmitter();

const eventHandler = () => {
    console.log('My event is getting fired');
}

eventEmitter.on('myEvent', eventHandler); //callback function jeta parameter hisebe pass kora hoise, oi cb abar param e chunk paay

eventEmitter.emit('myEvent');