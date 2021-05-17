// Type definitions for react-native-picker
// Project: https://github.com/hukaibaihu/react-native-picker
// Definitions by: Kyle Roach <https://github.com/hukaibaihu>
// TypeScript Version: 2.3.2

/**
 * Options to create a picker object
 *
 * @interface PickerOptions
 */
interface PickerOptions<T = any> {
    /**
     * Items to be passed into the picker
     *
     * Default is an empty array
     *
     * @type {T[]}
     * @memberof PickerOptions
     */
    pickerData?: T[];

    /**
     * The selected item in the picker
     *
     * Accepts the item in an array
     * Example: ['selected']
     *
     * Default is an empty array
     *
     * @type {any[]}
     * @memberof PickerOptions
     */
    selectedValue?: T[];

    /**
     * Title text shown at the top of the picker
     *
     * Default value is 'pls select'
     *
     * @type {string}
     * @memberof PickerOptions
     */
    pickerTitleText?: string;

    /**
     * Text for the confirm button
     *
     * Default value is 'confirm'
     *
     * @type {string}
     * @memberof PickerOptions
     */
    pickerConfirmBtnText?: string;

    /**
     * Text for the cancel button
     *
     * Default value is 'cancel'
     *
     * @type {string}
     * @memberof PickerOptions
     */
    pickerCancelBtnText?: string;

    /**
     * The color of the text for the confirm button
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [1, 186, 245, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerConfirmBtnColor?: number[];

    /**
     * The color of the text for the cancel button
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [1, 186, 245, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerCancelBtnColor?: number[];

    /**
     * The color of the Title text
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [20, 20, 20, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerTitleColor?: number[];

    /**
     * The background color of the toobar
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [232, 232, 232, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerToolBarBg?: number[];

    /**
     * Background color of the picker
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [196, 199, 206, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerBg?: number[];


    /**
     * Font size of the items in the toolbar
     *
     * Default is 16
     *
     * @type {number}
     * @memberof PickerOptions
     */
    pickerToolBarFontSize?: number;

    /**
     * Font size of the items in the picker
     *
     * Default is 16
     *
     * @type {number}
     * @memberof PickerOptions
     */
    pickerFontSize?: number;

    /**
     * Row height of the items in the picker
     *
     * Default is 24
     *
     * @type {number}
     * @memberof PickerOptions
     */
    pickerRowHeight?: number;

    /**
     * Color of the text for the items in the picker
     *
     * Accepts rgba values as an array
     * [R, G, B, A]
     *
     * Default is [31, 31, 31, 1]
     *
     * @type {number[]}
     * @memberof PickerOptions
     */
    pickerFontColor?: number[];

    /**
     * @type {number}
     * @memberof PickerOptions
     */
    pickerTextEllipsisLen?: number;

    /**
     * Event fired when user confirms the picker
     *
     * Returns the selected item
     *
     * @param {T[]} item
     * @param {number[]} index
     *
     * @memberof PickerOptions
     */
    onPickerConfirm?(item: T[], index: number[]): void

    /**
     * Event fired when user cancels the picker
     *
     * Returns the selected item
     *
     * @param {T[]} item
     * @param {number[]} index
     *
     * @memberof PickerOptions
     */
    onPickerCancel?(item: T[], index: number[]): void


    /**
     * Event fired when user scrolls over or selects a value in the picker
     *
     * Returns the selected item
     *
     * @param {T[]} item
     * @param {number[]} index
     *
     * @memberof PickerOptions
     */
    onPickerSelect?(item: T[], index: number[]): void
}


export default class Picker {
    /**
     * Creates a new Picker objects
     *
     * @static
     * @param {PickerOptions<T>} options
     *
     * @memberof Picker
     */
    static init<T = any>(options: PickerOptions<T>): void

    /**
     * Shows the picker
     *
     * @static
     *
     * @memberof Picker
     */
    static show(): void

    /**
     * Hides the picker
     *
     * @static
     *
     * @memberof Picker
     */
    static hide(): void

    /**
     * Toggles the visibility of the picker
     *
     * @static
     *
     * @memberof Picker
     */
    static toggle(): void

    /**
     * Sets an item in the picker as the selected value
     *
     * Accepts the item in an array
     * Example: ['selected']
     *
     * @static
     * @param {T[]} item
     *
     * @memberof Picker
     */
    static select<T = any>(item: T[]): void

    /**
     * Checks if the picker is showing currently
     *
     * @static
     * @returns {boolean}
     *
     * @memberof Picker
     */
    static isPickerShow(fn?: (err: any, message: any) => void): boolean
}
