/**
 *
 * OrderList Design Tokens
 *
 * @module themes/orderlist
 *
 */

import { DesignTokens } from '..';

export interface OrderListDesignTokens extends DesignTokens<OrderListDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Gap of root
         *
         * @designToken orderlist.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the controls section
     */
    controls?: {
        /**
         * Gap of controls
         *
         * @designToken orderlist.controls.gap
         */
        gap?: string;
    };
}
