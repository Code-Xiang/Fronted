(function($) {
    console.log("=jquery=",$);
})(window.$)

(() => {
    var defining = {
        a: function() { },
        b: function() { },
        c: function() { }
    };

    Object.keys(defining).forEach(key => {
        window[key] = defining[key];
    });
})();