import { BinaryTokens, TypedArray } from './constants';
export declare namespace RegExps {
    function flagsAsInteger(regExp: RegExp): number;
    function flagsFromInteger(integer: number): string;
}
export declare namespace BigIntegers {
    const SUPPORTED: boolean;
    const ZERO: bigint | null;
    const ONE: bigint | null;
    const EIGHT: bigint | null;
    const BYTE: bigint | null;
}
export declare namespace Numbers {
    function nextPowerOfTwo(n: number): number;
}
export declare namespace TypedArrays {
    const constructors: (new <T extends TypedArray>(...args: any) => T)[];
    const typedArrayTags: Map<string, BinaryTokens>;
    const typedArrayTagToConstructor: Map<BinaryTokens, new <T extends TypedArray>(...args: any) => T>;
}
//# sourceMappingURL=util.d.ts.map