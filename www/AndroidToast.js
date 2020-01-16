var exec = cordova.require('cordova/exec');

var AndroidToast = function() {
    console.log('AndroidToast instanced');
};

AndroidToast.prototype.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'AndroidToast', 'show', [msg]);
};

AndroidToast.prototype.add = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'AndroidToast', 'add', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = AndroidToast;
}