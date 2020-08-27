!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BinaryTF={})}(this,(function(e){"use strict";class t extends Error{constructor(e,t){super(e),Object.defineProperty(this,"kind",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.kind=t}}var r,i,n,s,a,u,o;!function(e){e.UnknownType="UnknownType",e.UnexpectedEndOfBuffer="UnexpectedEndOfBuffer"}(r||(r={})),function(e){e[e.NullPointer=0]="NullPointer",e[e.Hole=1]="Hole",e[e.Null=2]="Null",e[e.PBigInt=3]="PBigInt",e[e.NBigInt=4]="NBigInt",e[e.Boolean=5]="Boolean",e[e.String=6]="String",e[e.Undefined=7]="Undefined",e[e.UnsignedByte=8]="UnsignedByte",e[e.SignedByte=9]="SignedByte",e[e.UnsignedInt32=10]="UnsignedInt32",e[e.SignedInt32=11]="SignedInt32",e[e.UnsignedFloat64=12]="UnsignedFloat64",e[e.SignedFloat64=13]="SignedFloat64",e[e.Array=14]="Array",e[e.EmptyArray=15]="EmptyArray",e[e.ObjectReference=16]="ObjectReference",e[e.Date=17]="Date",e[e.BooleanObject=18]="BooleanObject",e[e.NumberObject=19]="NumberObject",e[e.StringObject=20]="StringObject",e[e.EmptyObject=21]="EmptyObject",e[e.Object=22]="Object",e[e.RegExp=23]="RegExp",e[e.Map=24]="Map",e[e.EmptyMap=25]="EmptyMap",e[e.WeakMap=26]="WeakMap",e[e.Set=27]="Set",e[e.EmptySet=28]="EmptySet",e[e.WeakSet=29]="WeakSet",e[e.ArrayBuffer=30]="ArrayBuffer",e[e.Int8Array=31]="Int8Array",e[e.Uint8Array=32]="Uint8Array",e[e.Uint8ClampedArray=33]="Uint8ClampedArray",e[e.Int16Array=34]="Int16Array",e[e.Uint16Array=35]="Uint16Array",e[e.Int32Array=36]="Int32Array",e[e.Uint32Array=37]="Uint32Array",e[e.Float32Array=38]="Float32Array",e[e.Float64Array=39]="Float64Array",e[e.DataView=40]="DataView"}(i||(i={})),function(e){e.BigInt="bigint",e.Boolean="boolean",e.Number="number",e.Object="object",e.String="string",e.Undefined="undefined"}(n||(n={})),function(e){e.flagsAsInteger=function(e){return(e.global?1:0)|(e.ignoreCase?2:0)|(e.multiline?4:0)|(e.sticky?8:0)|(e.unicode?16:0)|(e.dotAll?32:0)},e.flagsFromInteger=function(e){let t="";return 1&e&&(t+="g"),2&e&&(t+="i"),4&e&&(t+="m"),8&e&&(t+="y"),16&e&&(t+="u"),32&e&&(t+="s"),t}}(s||(s={})),function(e){e.SUPPORTED="function"==typeof BigInt,e.ZERO=e.SUPPORTED?BigInt(0):null,e.ONE=e.SUPPORTED?BigInt(1):null,e.EIGHT=e.SUPPORTED?BigInt(8):null,e.BYTE=e.SUPPORTED?BigInt(255):null}(a||(a={})),function(e){e.nextPowerOfTwo=function(e){return Math.pow(2,Math.ceil(Math.log2(e)))}}(u||(u={})),function(e){e.constructors=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,DataView],"function"==typeof BigInt64Array&&e.constructors.push(BigInt64Array),"function"==typeof BigUint64Array&&e.constructors.push(BigUint64Array),e.typedArrayTags=new Map(e.constructors.map(e=>[Object.prototype.toString.call(new e(new ArrayBuffer(0))),i[e.name]])),e.typedArrayTagToConstructor=new Map(e.constructors.map(e=>[i[e.name],e]))}(o||(o={}));const f=new Float64Array(1),c=new Uint8Array(f.buffer);class l{constructor(e){Object.defineProperty(this,"offset",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_buffer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_objectIDs",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this._buffer=e}get finished(){return this.offset===this._buffer.length}clean(){this._buffer=null,this.offset=0,this._objectIDs.clear()}read(){const e=this.read8();switch(e){case i.Null:return null;case i.PBigInt:return this.readValueBigInt(!1);case i.NBigInt:return this.readValueBigInt(!0);case i.Boolean:return Boolean(this.read8());case i.String:return this.readString();case i.Undefined:return;case i.UnsignedByte:return this.read8();case i.SignedByte:return-this.read8();case i.UnsignedInt32:return this.read32();case i.SignedInt32:return-this.read32();case i.UnsignedFloat64:return this.readF64();case i.SignedFloat64:return-this.readF64();case i.Array:return this.readValueArray();case i.EmptyArray:return this.createObjectID([]);case i.ObjectReference:return this._objectIDs.get(this.read32());case i.Date:return this.createObjectID(new Date(this.readF64()));case i.BooleanObject:return this.createObjectID(new Boolean(this.read8()));case i.NumberObject:return this.createObjectID(new Number(this.readF64()));case i.StringObject:return this.createObjectID(new String(this.readString()));case i.EmptyObject:return this.createObjectID({});case i.Object:return this.readValueObject();case i.RegExp:return this.createObjectID(new RegExp(this.readString(),s.flagsFromInteger(this.read8())));case i.Map:return this.readValueMap();case i.EmptyMap:return this.createObjectID(new Map);case i.Set:return this.readValueSet();case i.EmptySet:return this.createObjectID(new Set);case i.ArrayBuffer:return this.readValueArrayBuffer();case i.WeakMap:return this.createObjectID(new WeakMap);case i.WeakSet:return this.createObjectID(new WeakSet);case i.Int8Array:case i.Uint8Array:case i.Uint8ClampedArray:case i.Int16Array:case i.Uint16Array:case i.Int32Array:case i.Uint32Array:case i.Float32Array:case i.Float64Array:case i.DataView:return this.readValueTypedArray(e);default:throw new t("Unknown type received: "+e,r.UnknownType)}}readValueTypedArray(e){const t=this.read32();let r;if(this.ensureBytes(t),e===i.Uint8Array)r=this._buffer.subarray(this.offset,this.offset+t);else{const i=new ArrayBuffer(t);r=new(o.typedArrayTagToConstructor.get(e))(i),new Uint8Array(i).set(this._buffer.subarray(this.offset,this.offset+t))}return this.offset+=t,this.createObjectID(r)}readValueArrayBuffer(){const e=this.createObjectID(new ArrayBuffer(this.read32())),t=new Uint8Array(e);for(let e=0,r=t.length;e<r;e++)t[e]=this.read8();return e}readValueSet(){const e=this.createObjectID(new Set);for(;!this.readNullTerminator();)e.add(this.read());return e}readValueMap(){const e=this.createObjectID(new Map);for(;!this.readNullTerminator();)e.set(this.read(),this.read());return e}readValueObject(){const e=this.createObjectID({});for(;!this.readNullTerminator();){const t=this.read(),r=this.read();e[t]=r}return e}readValueArray(){const e=this.createObjectID([]);let t=0;for(;!this.readNullTerminator();)this.read8()!==i.Hole&&(this.offsetBack(),e[t]=this.read()),++t;return e.length=t,e}readString(){const e=this._buffer.indexOf(i.NullPointer,this.offset);if(-1===e)throw new t("Found End-Of-Buffer, expecting a `NullTerminator` before.",r.UnexpectedEndOfBuffer);const n=this._buffer.subarray(this.offset,e),s=l._textDecoder.decode(n);return this.offset=e+1,s}readValueBigInt(e){const t=this.read32();let r=a.ZERO,i=a.ONE;for(let e=0;e<t;e++){const e=this.read8();r+=BigInt(e)*i,i<<=a.EIGHT}return e?-r:r}readNullTerminator(){if(this.watch8()===i.NullPointer)return++this.offset,!0;if(this.finished)throw new t("Found End-Of-Buffer, expecting a `NullTerminator` before.",r.UnexpectedEndOfBuffer);return!1}createObjectID(e){return this._objectIDs.set(this._objectIDs.size,e),e}offsetBack(){--this.offset}watch8(){return this._buffer[this.offset]}read8(){return this.ensureBytes(1),this._buffer[this.offset++]}read32(){return this.ensureBytes(4),this._buffer[this.offset++]*2**24+65536*this._buffer[this.offset++]+256*this._buffer[this.offset++]+this._buffer[this.offset++]}readF64(){return this.ensureBytes(8),c[0]=this._buffer[this.offset++],c[1]=this._buffer[this.offset++],c[2]=this._buffer[this.offset++],c[3]=this._buffer[this.offset++],c[4]=this._buffer[this.offset++],c[5]=this._buffer[this.offset++],c[6]=this._buffer[this.offset++],c[7]=this._buffer[this.offset++],f[0]}ensureBytes(e){if(this.offset+e>this._buffer.length)throw new t(`Found End-Of-Buffer, expecting ${e} byte(s).`,r.UnexpectedEndOfBuffer)}}Object.defineProperty(l,"_textDecoder",{enumerable:!0,configurable:!0,writable:!0,value:new TextDecoder});class h extends Error{constructor(e,t){super(e),Object.defineProperty(this,"kind",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.kind=t}}var b;!function(e){e.UnsupportedType="UnsupportedType",e.UnsupportedSerializedType="UnsupportedSerializedType",e.UnexpectedNullValue="UnexpectedNullValue"}(b||(b={}));const d=new Float64Array(1),p=new Uint8Array(d.buffer);class y{constructor(e,t=null){Object.defineProperty(this,"onUnsupported",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_buffer",{enumerable:!0,configurable:!0,writable:!0,value:new Uint8Array(16)}),Object.defineProperty(this,"_offset",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_objectIDs",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_handlingUnsupported",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this._data=e,this.onUnsupported=t}process(){this.parse(this._data);const e=this._buffer.subarray(0,this._offset);return this._data=null,this._offset=0,this._objectIDs.clear(),this._buffer=null,e}parse(e,t=typeof e){switch(t){case n.BigInt:return this.parseBigInt(e);case n.Boolean:return this.parseBoolean(e);case n.Number:return this.parseNumber(e);case n.Object:return this.parseObject(e);case n.String:return this.parseString(e);case n.Undefined:return this.parseUndefined();default:return this.handleUnsupported(e,t)}}handleUnsupported(e,t){if(this.onUnsupported){if(this._handlingUnsupported)throw new h("The modified value was not serializable.",b.UnsupportedSerializedType);return this._handlingUnsupported=!0,this.parse(this.onUnsupported(e)),void(this._handlingUnsupported=!1)}throw new h(`Unsupported type '${t}'.`,b.UnsupportedType)}parseBigInt(e){const t=e>=a.ZERO?0:1;this.ensureAlloc(5),this.write8(t?i.NBigInt:i.PBigInt);const r=this._offset;this._offset+=4;let n=1===t?-e:e,s=0;for(;n>0;)++s,this.write8(Number(n&a.BYTE)),n>>=a.EIGHT;this.write32At(s,r)}parseBoolean(e){this.write8(i.Boolean),this.write8(e?1:0)}parseNumber(e){const t=this.getNumberType(e);switch(this.write8(t),t){case i.SignedByte:this.write8(-e);break;case i.UnsignedByte:this.write8(e);break;case i.SignedInt32:this.write32(-e);break;case i.UnsignedInt32:this.write32(e);break;case i.SignedFloat64:this.writeF64(-e);break;case i.UnsignedFloat64:this.writeF64(e);break;default:throw new Error("Unreachable code. Got unexpected integer type "+t)}}parseObject(e){if(null===e)return this.parseValueNull();const t=this._objectIDs.get(e);if("number"==typeof t)return this.parseValueReference(t);if(this._objectIDs.set(e,this._objectIDs.size),Array.isArray(e))return this.parseValueArray(e);const r=Object.prototype.toString.call(e);switch(r){case"[object String]":return this.parseValueObjectString(e);case"[object Boolean]":return this.parseValueObjectBoolean(e);case"[object Number]":return this.parseValueObjectNumber(e);case"[object Date]":return this.parseValueObjectDate(e);case"[object RegExp]":return this.parseValueObjectRegExp(e);case"[object Object]":return this.parseValueObjectLiteral(e);case"[object Map]":return this.parseValueObjectMap(e);case"[object Set]":return this.parseValueObjectSet(e);case"[object ArrayBuffer]":return this.parseValueObjectArrayBuffer(e);case"[object WeakMap]":return this.parseValueObjectWeakMap();case"[object WeakSet]":return this.parseValueObjectWeakSet();case"[object Promise]":return this.handleUnsupported(e,"object");default:return this.parseValueObjectFallback(e,r)}}parseString(e){this.write8(i.String),this.writeValueString(e)}parseUndefined(){this.write8(i.Undefined)}parseValueNull(){this.write8(i.Null)}parseValueObjectString(e){this.write8(i.StringObject),this.writeValueString(e.valueOf())}parseValueObjectBoolean(e){this.write8(i.BooleanObject),this.write8(e.valueOf()?1:0)}parseValueObjectNumber(e){this.write8(i.NumberObject),this.writeF64(e.valueOf())}parseValueObjectDate(e){this.write8(i.Date),this.writeF64(e.valueOf())}parseValueObjectRegExp(e){this.write8(i.RegExp),this.writeValueString(e.source),this.write8(s.flagsAsInteger(e))}parseValueObjectLiteral(e){const t=Object.keys(e);if(0===t.length)return this.write8(i.EmptyObject);this.write8(i.Object);for(const r of t)this.parse(r),this.parse(e[r]);this.write8(i.NullPointer)}parseValueObjectMap(e){if(0===e.size)return this.write8(i.EmptyMap);this.write8(i.Map);for(const[t,r]of e.entries())this.parse(t),this.parse(r);this.write8(i.NullPointer)}parseValueObjectSet(e){if(0===e.size)return this.write8(i.EmptySet);this.write8(i.Set);for(const t of e)this.parse(t);this.write8(i.NullPointer)}parseValueObjectArrayBuffer(e){this.write8(i.ArrayBuffer);const t=new Uint8Array(e);this.write32(t.length),this.write(t)}parseValueObjectWeakMap(){this.write8(i.WeakMap)}parseValueObjectWeakSet(){this.write8(i.WeakSet)}parseValueObjectFallback(e,t){const r=o.typedArrayTags.get(t);r?this.writeValueTypedArray(e,r):this.parseValueObjectLiteral(e)}parseValueReference(e){this.write8(i.ObjectReference),this.write32(e)}parseValueArray(e){if(0===e.length)return this.write8(i.EmptyArray);this.ensureAlloc(2),this.write8(i.Array);for(let t=0,r=e.length;t<r;t++)t in e?this.parse(e[t]):this.write8(i.Hole);this.write8(i.NullPointer)}writeValueTypedArray(e,t){this.write8(t),this.write32(e.byteLength),t!==i.Uint8Array&&(e=new Uint8Array(e.buffer)),this.write(e)}write(e){this.ensureAlloc(e.byteLength),this._buffer.set(e,this._offset),this._offset+=e.byteLength}write8(e){this.ensureAlloc(1),this._buffer[this._offset++]=e}write32(e){this.ensureAlloc(4),this.write32At(e,this._offset),this._offset+=4}write32At(e,t){this._buffer[t+3]=e,e>>>=8,this._buffer[t+2]=e,e>>>=8,this._buffer[t+1]=e,e>>>=8,this._buffer[t]=e}writeF64(e){d[0]=e,this.write(p)}writeValueString(e){const t=y._textEncoder.encode(e);if(t.includes(i.NullPointer))throw new h("Unexpected null pointer in serialized string.",b.UnexpectedNullValue);this.write(t),this.write8(i.NullPointer)}getNumberType(e){const t=e<0;if(e%1==0){if(e>=-127&&e<=255)return t?i.SignedByte:i.UnsignedByte;if(e>=-2147483647&&e<=4294967295)return t?i.SignedInt32:i.UnsignedInt32}return t?i.SignedFloat64:i.UnsignedFloat64}ensureAlloc(e){this.expandBuffer(this._offset+e)}expandBuffer(e){if(this._buffer.length<e){const t=this._buffer;this._buffer=new Uint8Array(u.nextPowerOfTwo(e)),this._buffer.set(t)}}}Object.defineProperty(y,"_textEncoder",{enumerable:!0,configurable:!0,writable:!0,value:new TextEncoder}),e.deserialize=function(e,t=-1){const r=new l(e);-1!==t&&(r.offset=t);const i=r.read();return r.clean(),i},e.deserializeWithMetadata=function(e,t=-1){const r=new l(e);-1!==t&&(r.offset=t);const i=r.read(),n=r.offset;return r.clean(),{value:i,offset:n===e.byteLength?-1:n}},e.serialize=function(e,t){return new y(e,t).process()},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
