
## Object Difference
based on [http://blog.vjeux.com/2011/javascript/object-difference.html](http://blog.vjeux.com/2011/javascript/object-difference.html)

It is very minimal and not perfect.


```javascript
var obj1 = {
	foo: 1
	bar: {
		baz: "zap",
		buzz: false
	},
};

var obj2 = {
	foo: 2
	bar: {
		baz: "zap",
		buzz: true
	}
};

console.log(diff(obj1, obj2));

// should log
{
	foo: 2,
	bar: {
		buzz: true
	}
}

```

## browser useage
the webpack build output lib/loot-diff.min.js expects lodash to be available globally as _
