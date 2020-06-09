var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var UARTOriginal = /** @class */ (function (_super) {
    __extends(UARTOriginal, _super);
    function UARTOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UARTOriginal.prototype.list = function () { return cordova(this, "list", {}, arguments); };
    UARTOriginal.prototype.open = function (options) { return cordova(this, "open", {}, arguments); };
    UARTOriginal.prototype.write = function (data) { return cordova(this, "write", {}, arguments); };
    UARTOriginal.prototype.registerReadCallback = function () { return cordova(this, "register_callback", { "observable": true }, arguments); };
    UARTOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    UARTOriginal.pluginName = "Uart";
    UARTOriginal.plugin = "com.zenology.uart";
    UARTOriginal.pluginRef = "uart";
    UARTOriginal.repo = "";
    UARTOriginal.platforms = ["Android"];
    return UARTOriginal;
}(IonicNativePlugin));
var UART = new UARTOriginal();
export { UART };