let device = {}; // create an empty object.

// insert a value into the object.

device['monitor'] = 'monitor'; // {'monitor': 'monitor'};
device['keyboard'] = 'keyboard'; //{'monitor': 'monitor', 'keyboard': 'keyboard'}
device['mouse'] = 'mouse'; //{'monitor': 'monitor', 'keyboard': 'keyboard', 'mouse': 'mouse'}

device.hdmicable = 'hdmicable';

console.log(device);

// get a value out from the object.

console.log(device['monitor']) // monitor;
console.log(device['mouse']) // mouse;
console.log(device.hdmicable) // hdmicable;