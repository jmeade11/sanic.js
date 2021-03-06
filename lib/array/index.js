'use strict';

module.exports = {
	constructor: Array,

	prototypeFunctions: {
		every: require('./every')(Array.prototype.every),
		fill: require('./fill')(Array.prototype.fill),
		find: require('./find')(Array.prototype.find),
		filter: require('./filter')(Array.prototype.filter),
		forEach: require('./forEach')(Array.prototype.forEach),
		map: require('./map')(Array.prototype.map),
		reduce: require('./reduce')(Array.prototype.reduce),
		reduceRight: require('./reduceRight')(Array.prototype.reduceRight),		
		reverse: require('./reverse')(Array.prototype.reverse),
		some: require('./some')(Array.prototype.some),
	},
};
