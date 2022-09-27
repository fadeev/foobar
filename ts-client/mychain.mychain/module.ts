// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdatePool } from "./types/mychain/tx";
import { MsgCreatePool } from "./types/mychain/tx";
import { MsgAddLiquidity } from "./types/mychain/tx";
import { MsgDeletePool } from "./types/mychain/tx";


export { MsgUpdatePool, MsgCreatePool, MsgAddLiquidity, MsgDeletePool };

type sendMsgUpdatePoolParams = {
  value: MsgUpdatePool,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePoolParams = {
  value: MsgCreatePool,
  fee?: StdFee,
  memo?: string
};

type sendMsgAddLiquidityParams = {
  value: MsgAddLiquidity,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeletePoolParams = {
  value: MsgDeletePool,
  fee?: StdFee,
  memo?: string
};


type msgUpdatePoolParams = {
  value: MsgUpdatePool,
};

type msgCreatePoolParams = {
  value: MsgCreatePool,
};

type msgAddLiquidityParams = {
  value: MsgAddLiquidity,
};

type msgDeletePoolParams = {
  value: MsgDeletePool,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUpdatePool({ value, fee, memo }: sendMsgUpdatePoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePool({ value: MsgUpdatePool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePool({ value, fee, memo }: sendMsgCreatePoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePool({ value: MsgCreatePool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgAddLiquidity({ value, fee, memo }: sendMsgAddLiquidityParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAddLiquidity: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgAddLiquidity({ value: MsgAddLiquidity.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAddLiquidity: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeletePool({ value, fee, memo }: sendMsgDeletePoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePool({ value: MsgDeletePool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdatePool({ value }: msgUpdatePoolParams): EncodeObject {
			try {
				return { typeUrl: "/mychain.mychain.MsgUpdatePool", value: MsgUpdatePool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePool: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePool({ value }: msgCreatePoolParams): EncodeObject {
			try {
				return { typeUrl: "/mychain.mychain.MsgCreatePool", value: MsgCreatePool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePool: Could not create message: ' + e.message)
			}
		},
		
		msgAddLiquidity({ value }: msgAddLiquidityParams): EncodeObject {
			try {
				return { typeUrl: "/mychain.mychain.MsgAddLiquidity", value: MsgAddLiquidity.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAddLiquidity: Could not create message: ' + e.message)
			}
		},
		
		msgDeletePool({ value }: msgDeletePoolParams): EncodeObject {
			try {
				return { typeUrl: "/mychain.mychain.MsgDeletePool", value: MsgDeletePool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePool: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			MychainMychain: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;