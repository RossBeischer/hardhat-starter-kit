/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface APIConsumerInterface extends utils.Interface {
  contractName: "APIConsumer";
  functions: {
    "fulfill(bytes32,uint256)": FunctionFragment;
    "requestVolumeData()": FunctionFragment;
    "volume()": FunctionFragment;
    "withdrawLink()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "fulfill",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestVolumeData",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "volume", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestVolumeData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "volume", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "DataFullfilled(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DataFullfilled"): EventFragment;
}

export type ChainlinkCancelledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export type ChainlinkFulfilledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export type ChainlinkRequestedEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export type DataFullfilledEvent = TypedEvent<
  [BigNumber],
  { volume: BigNumber }
>;

export type DataFullfilledEventFilter = TypedEventFilter<DataFullfilledEvent>;

export interface APIConsumer extends BaseContract {
  contractName: "APIConsumer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: APIConsumerInterface;

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
    fulfill(
      _requestId: BytesLike,
      _volume: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestVolumeData(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    volume(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fulfill(
    _requestId: BytesLike,
    _volume: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestVolumeData(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  volume(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawLink(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fulfill(
      _requestId: BytesLike,
      _volume: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestVolumeData(overrides?: CallOverrides): Promise<string>;

    volume(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLink(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(id?: BytesLike | null): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(id?: BytesLike | null): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(id?: BytesLike | null): ChainlinkRequestedEventFilter;

    "DataFullfilled(uint256)"(volume?: null): DataFullfilledEventFilter;
    DataFullfilled(volume?: null): DataFullfilledEventFilter;
  };

  estimateGas: {
    fulfill(
      _requestId: BytesLike,
      _volume: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestVolumeData(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    volume(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fulfill(
      _requestId: BytesLike,
      _volume: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestVolumeData(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    volume(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}