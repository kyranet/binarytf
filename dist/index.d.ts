import { OnUnsupported } from './lib/Serializer';
export declare function serialize(data: any, onUnsupported?: OnUnsupported): Uint8Array;
export declare function deserialize<T = unknown>(buffer: Uint8Array, offset?: number): T;
export declare function deserializeWithMetadata<T = unknown>(buffer: Uint8Array, offset?: number): {
    value: T;
    offset: number;
};
//# sourceMappingURL=index.d.ts.map