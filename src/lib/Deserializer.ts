import { TextDecoder } from 'util';
import { BinaryTokens } from './util/constants';
import { BigIntegers, RegExps } from './util/util';

export class Deserializer {

	private _buffer: Uint8Array;
	private offset = 0;
	private _objectIDs = new Map() as Map<number, Record<any, any>>;
	private static _textDecoder = new TextDecoder();

	public constructor(buffer: Uint8Array) {
		this._buffer = buffer;
	}

	public process() {
		const temp = this.read();
		this._buffer = null;
		this.offset = 0;
		this._objectIDs.clear();
		return temp;
	}

	public read() {
		const type = this.readUint8();
		switch (type) {
			case BinaryTokens.Null: return null;
			case BinaryTokens.PBigInt: return this.readValueBigInt(false);
			case BinaryTokens.NBigInt: return this.readValueBigInt(true);
			case BinaryTokens.Boolean: return Boolean(this.readUint8());
			case BinaryTokens.String: return this.readString();
			case BinaryTokens.Undefined: return undefined;
			case BinaryTokens.PByte: return this.readUint8();
			case BinaryTokens.NByte: return -this.readUint8();
			case BinaryTokens.PInt32: return this.readUint32();
			case BinaryTokens.NInt32: return -this.readUint32();
			case BinaryTokens.PFloat64: return this.readFloat64();
			case BinaryTokens.NFloat64: return -this.readFloat64();
			case BinaryTokens.Array: return this.readValueArray();
			case BinaryTokens.EmptyArray: return [];
			case BinaryTokens.ObjectReference: return this._objectIDs.get(this.readUint32());
			case BinaryTokens.Date: return this.createObjectID(new Date(this.readFloat64()));
			case BinaryTokens.BooleanObject: return this.createObjectID(new Boolean(this.readUint8()));
			case BinaryTokens.NumberObject: return this.createObjectID(new Number(this.readFloat64()));
			case BinaryTokens.StringObject: return this.createObjectID(new String(this.readString()));
			case BinaryTokens.EmptyObject: return {};
			case BinaryTokens.Object: return this.readValueObject();
			case BinaryTokens.RegExp: return this.createObjectID(new RegExp(this.readString(), RegExps.flagsFromInteger(this.readUint8())));
			case BinaryTokens.Map: return this.readValueMap();
			case BinaryTokens.EmptyMap: return this.createObjectID(new Map());
			case BinaryTokens.Set: return this.readValueSet();
			case BinaryTokens.EmptySet: return this.createObjectID(new Set());
			case BinaryTokens.ArrayBuffer: throw new Error('Unreachable');
			case BinaryTokens.Int8Array: throw new Error('Unreachable');
			case BinaryTokens.Uint8Array: throw new Error('Unreachable');
			case BinaryTokens.Uint8ClampedArray: throw new Error('Unreachable');
			case BinaryTokens.Int16Array: throw new Error('Unreachable');
			case BinaryTokens.Uint16Array: throw new Error('Unreachable');
			case BinaryTokens.Int32Array: throw new Error('Unreachable');
			case BinaryTokens.Uint32Array: throw new Error('Unreachable');
			case BinaryTokens.Float32Array: throw new Error('Unreachable');
			case BinaryTokens.Float64Array: throw new Error('Unreachable');
			case BinaryTokens.DataView: throw new Error('Unreachable');
			default: throw new Error('Unreachable');
		}
	}

	private readValueSet() {
		const value = this.createObjectID(new Set());
		for (const entry of this.readValueArray()) value.add(entry);
		return value;
	}

	private readValueMap() {
		const value = this.createObjectID(new Map());
		for (let i = 0, max = this.readUint32(); i < max; i++) {
			value.set(this.read(), this.read());
		}
		return value;
	}

	private readValueObject() {
		const value = this.createObjectID({});
		for (let i = 0, max = this.readUint32(); i < max; i++) {
			value[this.read() as string | number] = this.read();
		}
		return value;
	}

	private readValueArray() {
		const value = this.createObjectID(new Array(this.readUint32()));
		for (let i = 0, max = value.length; i < max; i++) {
			if (this._buffer[this.offset] !== BinaryTokens.Hole) value[i] = this.read();
		}
		return value;
	}

	private readString() {
		const length = this.readUint32();
		const sub = this._buffer.subarray(this.offset, this.offset + length);
		const str = Deserializer._textDecoder.decode(sub);
		this.offset += length;
		return str;
	}

	private readValueBigInt(sign: boolean) {
		const length = this.readUint32();

		let value = BigIntegers.ZERO;
		let b = BigIntegers.ONE;

		for (let i = 0; i < length; i++) {
			const digit = this.readUint8();
			value += BigInt(digit) * b;
			b <<= BigIntegers.EIGHT;
		}

		return sign ? -value : value;
	}

	private createObjectID<T>(value: T) {
		this._objectIDs.set(this._objectIDs.size, value);
		return value;
	}

	private readUint8() {
		return this._buffer[this.offset++];
	}

	private readUint32() {
		return this._buffer[this.offset++] * 2 ** 24
			+ this._buffer[this.offset++] * 2 ** 16
			+ this._buffer[this.offset++] * 2 ** 8
			+ this._buffer[this.offset++];

	}

	private readFloat64() {
		uInt8Float64Array[0] = this._buffer[this.offset++];
		uInt8Float64Array[1] = this._buffer[this.offset++];
		uInt8Float64Array[2] = this._buffer[this.offset++];
		uInt8Float64Array[3] = this._buffer[this.offset++];
		uInt8Float64Array[4] = this._buffer[this.offset++];
		uInt8Float64Array[5] = this._buffer[this.offset++];
		uInt8Float64Array[6] = this._buffer[this.offset++];
		uInt8Float64Array[7] = this._buffer[this.offset++];
		return float64Array[0];
	}

}

const float64Array = new Float64Array(1);
const uInt8Float64Array = new Uint8Array(float64Array.buffer);
