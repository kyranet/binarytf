export declare class Deserializer {
    offset: number;
    private _buffer;
    private _objectIDs;
    constructor(buffer: Uint8Array);
    private get finished();
    clean(): void;
    read(): string | number | bigint | boolean | Record<any, any> | null | undefined;
    private readValueTypedArray;
    private readValueArrayBuffer;
    private readValueSet;
    private readValueMap;
    private readValueObject;
    private readValueArray;
    private readString;
    private readValueBigInt;
    private readNullTerminator;
    private createObjectID;
    private offsetBack;
    private watch8;
    private read8;
    private read32;
    private readF64;
    private ensureBytes;
    private static _textDecoder;
}
//# sourceMappingURL=Deserializer.d.ts.map