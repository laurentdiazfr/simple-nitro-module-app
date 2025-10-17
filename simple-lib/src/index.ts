import { NitroModules, getHostComponent } from 'react-native-nitro-modules';
import type { Test1 } from './specs/Test1.nitro';
import type { Test2Props, Test2Methods } from './specs/Test2.nitro';

export const HybridTest1 = NitroModules.createHybridObject<Test1>('Test1');

export const HybridTest2View = getHostComponent<Test2Props, Test2Methods>(
    'Test2View',
    () => ({
        uiViewClassName: 'Test2View',
        supportsRawText: false,
        bubblingEventTypes: {},
        directEventTypes: {},
        validAttributes: {
            enableFlash: true,
            hybridRef: true,
        },
    }),
);