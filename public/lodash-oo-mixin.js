define(function (require) {
    let _ = require('lodash');

    function describeConst(val) {
        return {
            writable: false,
            enumerable: false,
            configurable: false,
            value: val
        };
    }

    const props = {
        inherits: describeConst(function (SuperClass) {

            const prototype = Object.create(SuperClass.prototype, {
                constructor: describeConst(this),
                superConstructor: describeConst(SuperClass)
            });

            Object.defineProperties(this, {
                prototype: describeConst(prototype),
                Super: describeConst(SuperClass)
            });

            return this;
        })
    };

    _.mixin(_, {

        class: function (ClassConstructor) {
            return Object.defineProperties(ClassConstructor, props);
        }
    });

    return _;
});
