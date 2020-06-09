import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var UART = /** @class */ (function (_super) {
    __extends(UART, _super);
    function UART() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UART.prototype.list = function () { return cordova(this, "list", {}, arguments); };
    UART.prototype.open = function (options) { return cordova(this, "open", {}, arguments); };
    UART.prototype.write = function (data) { return cordova(this, "write", {}, arguments); };
    UART.prototype.registerReadCallback = function () { return cordova(this, "register_callback", { "observable": true }, arguments); };
    UART.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    UART.pluginName = "UART";
    UART.plugin = "com.zenology.uart";
    UART.pluginRef = "uart";
    UART.repo = "";
    UART.platforms = ["Android"];
    UART = __decorate([
        Injectable()
    ], UART);
    return UART;
}(IonicNativePlugin));
export { UART };