/**
 *
 * Ripple Design Tokens
 *
 * @module themes/ripple
 *
 */

import { DesignTokens } from '..';

export interface RippleDesignTokens extends DesignTokens<RippleDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Background of root
         *
         * @designToken ripple.background
         */
        background?: string;
    };
}
