/**
 * Scales the amount mix percentage of two colors.
 *
 * When mixing two colors, if one color has a low luminosity, dark background
 * colors for example, we need to mix at a higher percentage so the resulting
 * blended color is visually distinguishable.
 */
export declare const scaleMixAmount: (amount: number, number: number) => number;
