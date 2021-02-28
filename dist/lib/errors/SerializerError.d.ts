export declare class SerializerError extends Error {
    kind: SerializerReason;
    constructor(message: string, kind: SerializerReason);
}
export declare enum SerializerReason {
    UnsupportedType = "UnsupportedType",
    UnsupportedSerializedType = "UnsupportedSerializedType",
    UnexpectedNullValue = "UnexpectedNullValue"
}
//# sourceMappingURL=SerializerError.d.ts.map