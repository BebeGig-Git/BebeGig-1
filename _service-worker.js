var _0x50fb = [
    "BebeGig",
    "",
    "install",
    "skipWaiting",
    "then",
    "addAll",
    "open",
    "waitUntil",
    "addEventListener",
    "fetch",
    "request",
    "match",
    "respondWith",
    "activate",
    "claim",
    "clients",
];
var CACHE_NAME = _0x50fb[0];
var REQUIRED_FILES = [_0x50fb[1]];
self[_0x50fb[8]](_0x50fb[2], function(_0x3c27x3) {
    _0x3c27x3[_0x50fb[7]](
        caches[_0x50fb[6]](CACHE_NAME)[_0x50fb[4]](function(_0x3c27x4) {
            return _0x3c27x4[_0x50fb[5]](REQUIRED_FILES);
        })[_0x50fb[4]](function() {
            return self[_0x50fb[3]]();
        })
    );
});
self[_0x50fb[8]](_0x50fb[9], function(_0x3c27x3) {
    _0x3c27x3[_0x50fb[12]](
        caches[_0x50fb[11]](_0x3c27x3[_0x50fb[10]])[_0x50fb[4]](function(
            _0x3c27x5
        ) {
            if (_0x3c27x5) {
                return _0x3c27x5;
            }
            return fetch(_0x3c27x3[_0x50fb[10]]);
        })
    );
});
self[_0x50fb[8]](_0x50fb[13], function(_0x3c27x3) {
    _0x3c27x3[_0x50fb[7]](self[_0x50fb[15]][_0x50fb[14]]());
});
