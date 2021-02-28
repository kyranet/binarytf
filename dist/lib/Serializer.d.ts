export interface OnUnsupported {
    (value: unknown): unknown;
}
export declare class Serializer {
    onUnsupported: OnUnsupported | null;
    private _buffer;
    private _offset;
    private _objectIDs;
    private _data;
    private _handlingUnsupported;
    constructor(data: any, onUnsupported?: OnUnsupported | null);
    process(): Uint8Array;
    parse(value: any, hint?: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): void;
    protected handleUnsupported(value: unknown, hint: string): void;
    private parseBigInt;
    private parseBoolean;
    private parseNumber;
    private parseObject;
    private parseString;
    private parseUndefined;
    private parseValueNull;
    private parseValueObjectString;
    private parseValueObjectBoolean;
    private parseValueObjectNumber;
    private parseValueObjectDate;
    private parseValueObjectRegExp;
    private parseValueObjectLiteral;
    private parseValueObjectMap;
    private parseValueObjectSet;
    private parseValueObjectArrayBuffer;
    private parseValueObjectWeakMap;
    private parseValueObjectWeakSet;
    private parseValueObjectFallback;
    private parseValueReference;
    private parseValueArray;
    private writeValueTypedArray;
    private write;
    private write8;
    private write32;
    private write32At;
    private writeF64;
    private writeValueString;
    private getNumberType;
    private ensureAlloc;
    private expandBuffer;
    private static _textEncoder;
}
//# sourceMappingURL=Serializer.d.ts.map