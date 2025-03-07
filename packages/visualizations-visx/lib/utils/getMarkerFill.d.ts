import type { Theme } from '@looker/components';
import type { CLineSeries } from '@looker/visualizations-adapters';
/**
 * Sets marker fill color based on series configuration, with theme fallback
 *
 * @param series a series configuration object
 * @param lookerTheme our default theme context
 * @returns a color code or undefined
 */
export declare const getMarkerFill: (series: CLineSeries, lookerTheme: Theme) => string;
