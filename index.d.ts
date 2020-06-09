import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface UARTOpenOptions {
    baud_rate: number;
    data_size: number;
    stop_bits: number;
    parity: number;
	flow_control: bool;
}

export interface UARTWriteOptions {
    text: String;
}
/**
 * @name UART
 * @description
 * This plugin provides functions for working with UART connections
 *
 * @usage
 * ```typescript
 * import { UART } from '@ionic-native/uart/ngx';
 *
 * constructor(private uart: UART) { }
 *
 * ...
 *
 * this.uart.requestPermission().then(() => {
 *   this.uart.open({
 *     baud_rate: 9800,
 *     data_size: 4,
 *     stop_bits: 1,
 *     parity: 0,
 *     flow_control: false
 *   }).then(() => {
 *     console.log('UART connection opened');
 *   });
 * }).catch((error: any) => console.log(error));
 *
 * ```
 */
export declare class UARTOriginal extends IonicNativePlugin {
    /**
     * list of available uart device
     *
     * @return {Promise<any>} Returns a promise that resolves list of available uart device
     */
    list(): Promise<any>;
    /**
     * Open connection to a uart device
     *
     * @param options {UARTOpenOptions} Options used to open uart connection
     * @return {Promise<any>} Returns a promise that resolves when the uart connection is opened
     */
    open(options: UARTOpenOptions): Promise<any>;
    /**
     * Write to a uart connection
     *
     * @param data {UARTWriteOptions} data to write to the uart connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    write(data: UARTWriteOptions): Promise<any>;
    /**
     * Watch the incoming data from the uart connection. Clear the watch by unsubscribing from the observable
     *
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    registerReadCallback(): Observable<any>;
    /**
     * Close the uart connection
     *
     * @return {Promise<any>} Returns a promise that resolves when the uart connection is closed
     */
    close(): Promise<any>;
}

export declare const UART: UARTOriginal;