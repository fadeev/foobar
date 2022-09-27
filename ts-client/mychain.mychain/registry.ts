import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdatePool } from "./types/mychain/tx";
import { MsgCreatePool } from "./types/mychain/tx";
import { MsgAddLiquidity } from "./types/mychain/tx";
import { MsgDeletePool } from "./types/mychain/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/mychain.mychain.MsgUpdatePool", MsgUpdatePool],
    ["/mychain.mychain.MsgCreatePool", MsgCreatePool],
    ["/mychain.mychain.MsgAddLiquidity", MsgAddLiquidity],
    ["/mychain.mychain.MsgDeletePool", MsgDeletePool],
    
];

export { msgTypes }