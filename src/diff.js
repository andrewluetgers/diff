// based on http://blog.vjeux.com/2011/javascript/object-difference.html

var isArray = require('lodash.isArray'),
	isObject = require('lodash.isObject'),
	isEqual = require('lodash.isEqual'),
	isEmpty = require('lodash.isEmpty'),
	uniq = require('lodash.uniq'),
	keys = require('lodash.keys'),
	each = require('lodash.forEach');

module.exports = function diff(template, override) {
	if (!isObject(override)) {
		return undefined;
//				throw new Error("Missing or invalid argument");
	}

	// handle arrays
	if ((isArray(override) || isArray(template)) && !isEqual(template, override)) {
		return override;
	}

	var ret = {},
		hasDiff = false,
		oVal, tVal,
		keys = uniq(keys(template).concat(keys(override)));

	each(keys, function(name) {
		oVal = override[name];
		tVal = template[name];

		if (tVal && isObject(oVal) && !isArray(oVal)) {
			var _diff = diff(tVal, oVal);
			if (!isEmpty(_diff)) {
				hasDiff = true;
				ret[name] = _diff;
			}
		} else if (!isEqual(tVal, oVal)) {
			hasDiff = true;
			ret[name] = oVal;
		}
	});
	return hasDiff ? ret : null;
};