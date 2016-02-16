var observable = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }

        /*
        var socket = require('socket.io-client')('http://localhost:4001');
        socket.on('connect', function(){
            this.set("message", "I are connected");
        }.bind(this));

        socket.on("update-position", function(packet) {
            this.set("message", "lat: " + packet.position.latitude + " long: " + packet.position.longitude);
        }.bind(this))*/

        var moment = require("moment");

        this.set("message", moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
