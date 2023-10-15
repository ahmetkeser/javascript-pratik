var o = {};

// non-writable data property
Object.defineProperty(o, 'x', { value: 'old' });

// setter-less accessor property
Object.defineProperty(o, 'y', {
    get: function() { return 'old'; }
});

o.x = 'new'; // etkisi yok
console.log('o.x:', o.x);
console.log(o)

o.y = 'new'; // etkisi yok
console.log('o.y:', o.y);