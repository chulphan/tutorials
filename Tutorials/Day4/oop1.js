let tteesstt = {
    'list': {'a': 100, 'b': 70, 'c': 50},
    'show': function() {
        for (let d in this.list) {
            console.log(d, this.list[d]); // a 100 b 70 c 50
        }
        console.log("this??? " + this); //[object Object]
    }
}

tteesstt.show();
console.log(tteesstt);