/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "mychain.mychain";

export interface MsgCreatePool {
  creator: string;
  denom: string;
  desc: string;
  height: number;
}

export interface MsgCreatePoolResponse {
  id: number;
}

export interface MsgUpdatePool {
  creator: string;
  id: number;
  denom: string;
  desc: string;
  height: number;
}

export interface MsgUpdatePoolResponse {
}

export interface MsgDeletePool {
  creator: string;
  id: number;
}

export interface MsgDeletePoolResponse {
}

export interface MsgAddLiquidity {
  creator: string;
  amount: Coin[];
}

export interface MsgAddLiquidityResponse {
}

function createBaseMsgCreatePool(): MsgCreatePool {
  return { creator: "", denom: "", desc: "", height: 0 };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.desc !== undefined && (obj.desc = message.desc);
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(object: I): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.desc = object.desc ?? "";
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return { id: 0 };
}

export const MsgCreatePoolResponse = {
  encode(message: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(object: I): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdatePool(): MsgUpdatePool {
  return { creator: "", id: 0, denom: "", desc: "", height: 0 };
}

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.height !== 0) {
      writer.uint32(40).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.denom !== undefined && (obj.denom = message.denom);
    message.desc !== undefined && (obj.desc = message.desc);
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePool>, I>>(object: I): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.denom = object.denom ?? "";
    message.desc = object.desc ?? "";
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}

export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePoolResponse>, I>>(_: I): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
};

function createBaseMsgDeletePool(): MsgDeletePool {
  return { creator: "", id: 0 };
}

export const MsgDeletePool = {
  encode(message: MsgDeletePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeletePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePool>, I>>(object: I): MsgDeletePool {
    const message = createBaseMsgDeletePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeletePoolResponse(): MsgDeletePoolResponse {
  return {};
}

export const MsgDeletePoolResponse = {
  encode(_: MsgDeletePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePoolResponse {
    return {};
  },

  toJSON(_: MsgDeletePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePoolResponse>, I>>(_: I): MsgDeletePoolResponse {
    const message = createBaseMsgDeletePoolResponse();
    return message;
  },
};

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return { creator: "", amount: [] };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(object: I): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}

export const MsgAddLiquidityResponse = {
  encode(_: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddLiquidityResponse {
    return {};
  },

  toJSON(_: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidityResponse>, I>>(_: I): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.UpdatePool = this.UpdatePool.bind(this);
    this.DeletePool = this.DeletePool.bind(this);
    this.AddLiquidity = this.AddLiquidity.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("mychain.mychain.Msg", "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request("mychain.mychain.Msg", "UpdatePool", data);
    return promise.then((data) => MsgUpdatePoolResponse.decode(new _m0.Reader(data)));
  }

  DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse> {
    const data = MsgDeletePool.encode(request).finish();
    const promise = this.rpc.request("mychain.mychain.Msg", "DeletePool", data);
    return promise.then((data) => MsgDeletePoolResponse.decode(new _m0.Reader(data)));
  }

  AddLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("mychain.mychain.Msg", "AddLiquidity", data);
    return promise.then((data) => MsgAddLiquidityResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
