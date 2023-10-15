var o = {};

// non-writable data property
Object.defineProperty(o, 'x', { value: 'old' });

// setter-less accessor property
Object.defineProperty(o, 'y', {
    get: function() { return 'old'; }
});

var a = Object.create(o);

a.x = 'new';
console.log('a.x:', a.x);

a.y = 'new';
console.log('a.y:', a.y);

console.log(a);