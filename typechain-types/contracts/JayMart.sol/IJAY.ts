/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IJAYInterface extends utils.Interface {
  functions: {
    "ETHtoJAY(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "buy(address)": FunctionFragment;
    "sell(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "ETHtoJAY" | "burnFrom" | "buy" | "sell"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ETHtoJAY",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buy", values: [string]): string;
  encodeFunctionData(functionFragment: "sell", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "ETHtoJAY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;

  events: {};
}

export interface IJAY extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJAYInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETHtoJAY(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    buy(
      reciever: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sell(
      value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  ETHtoJAY(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  buy(
    reciever: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sell(
    value: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETHtoJAY(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(reciever: string, overrides?: CallOverrides): Promise<void>;

    sell(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ETHtoJAY(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    buy(
      reciever: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sell(
      value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETHtoJAY(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    buy(
      reciever: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sell(
      value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
