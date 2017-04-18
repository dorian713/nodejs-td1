var async = require('Async');
module.exports = {
    nombre: function (multi) {
        var tab = [];
        for (var i = 0; i <= 10; i++) {
            tab.push(multi * i);
        }
        return tab;
    },
    /*nombreAsync: fonction(multiAsync, callback) {
        return callback(tab);
    },
    boucleAsync: function () {
        var i = 0;
        async.whilst(
            function () {
                return i < 10;
            },
            function (callback) {
                i++;
                tab.push(multiAsync * i);
            },
            function (error) {
                console.log(error);
                // 5 seconds have passed, n = 5
            }
        );
    }//*/
}
