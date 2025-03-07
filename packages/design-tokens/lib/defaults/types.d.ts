import type { DensityRamp } from '../system/density';
export declare type ComponentSettingsDefaults = {
    /**
     * Enable the Material "Ripple" animation on components that support it.
     * Currently affects: IconButton, Checkbox, Radio & ToggleSwitch
     * Future: Button*, Tab & ListItem
     * @default false
     */
    brandAnimation: boolean;
    /**
     * Default density to use for density-supporting components
     *
     * NOTE: This not implemented broadly yet. Altering this value is not recommended
     * at this time.
     */
    density: DensityRamp;
    /**
     * Disable the Material "floating label" layout and animation on components that support it.
     * Currently affects: FieldTextArea
     * Future: FieldText, FieldSelect, FieldSelectMulti, FieldDate, FieldDateRange, FieldDate, FieldTime, FieldTimeSelect
     * @default true
     */
    externalLabel: boolean;
};
