var exec = cordova.require('cordova/exec');

// var AndroidToast = function() {
//     console.log('AndroidToast instanced');
// };

// AndroidToast.prototype.show = function(msg, onSuccess, onError) {
//     var errorCallback = function(obj) {
//         onError(obj);
//     };

//     var successCallback = function(obj) {
//         onSuccess(obj);
//     };

//     exec(successCallback, errorCallback, 'AndroidToast', 'show', [msg]);
// };

// AndroidToast.prototype.add = function(msg, onSuccess, onError) {
//     var errorCallback = function(obj) {
//         onError(obj);
//     };

//     var successCallback = function(obj) {
//         onSuccess(obj);
//     };

//     exec(successCallback, errorCallback, 'AndroidToast', 'add', [msg]);
// };

// AndroidToast.prototype.coolMethod = function(msg, onSuccess, onError) {
//     var errorCallback = function(obj) {
//         onError(obj);
//     };

//     var successCallback = function(obj) {
//         onSuccess(obj);
//     };

//     exec(successCallback, errorCallback, 'AndroidToast', 'coolMethod', [msg]);
// };

exports.show = function (arg0, success, error) {
    exec(success, error, 'AndroidToast', 'show', [arg0]);
};

exports.add = function (arg0, success, error) {
    exec(success, error, 'AndroidToast', 'add', [arg0]);
};

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'AndroidToast', 'coolMethod', [arg0]);
};

exports.coolMethod1 = function (arg0, success, error) {
    exec(success, error, 'AndroidToast', 'coolMethod1', [arg0]);
};

// if (typeof module != 'undefined' && module.exports) {
//     module.exports = AndroidToast;
// }