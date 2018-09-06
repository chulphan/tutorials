exports.add = function(a, b) {
    return a + b;
}

exports.mul = function(a, b) {
    return a * b;
}

exports.div = function(a, b) {
    if (b === 0) {
        return 'b cannot be zero!! exit.';
    }
    return a / b;
}

exports.sub = function(a, b) {
    return a - b;
}