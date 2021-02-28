export declare class DeserializerError extends Error {
    kind: DeserializerReason;
    constructor(message: string, kind: DeserializerReason);
}
export declare enum DeserializerReason {
    UnknownType = "UnknownType",
    UnexpectedEndOfBuffer = "UnexpectedEndOfBuffer"
}
//# sourceMappingURL=DeserializerError.d.ts.map