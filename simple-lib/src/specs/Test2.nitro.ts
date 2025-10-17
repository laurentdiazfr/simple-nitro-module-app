import type { HybridView, HybridViewProps, HybridViewMethods } from 'react-native-nitro-modules';

export interface Test2Props extends HybridViewProps {
    enableFlash: boolean;
}
export interface Test2Methods extends HybridViewMethods { }

export type Test2View = HybridView<Test2Props, Test2Methods>;