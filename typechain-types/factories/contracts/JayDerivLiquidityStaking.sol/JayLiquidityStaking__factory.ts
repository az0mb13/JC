/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JayLiquidityStaking,
  JayLiquidityStakingInterface,
} from "../../../contracts/JayDerivLiquidityStaking.sol/JayLiquidityStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidityToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "harvestedAmount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "init",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialLPs",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    name: "initalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "previusRewardTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setStart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAmountStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerTokenOnEntry",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a06040526000600860006101000a81548160ff0219169083151502179055506000600860016101000a81548160ff0219169083151502179055503480156200004757600080fd5b5060405162002a1938038062002a1983398181016040528101906200006d919062000208565b60016000819055506200009562000089620000d060201b60201c565b620000d860201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200023a565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001d082620001a3565b9050919050565b620001e281620001c3565b8114620001ee57600080fd5b50565b6000815190506200020281620001d7565b92915050565b6000602082840312156200022157620002206200019e565b5b60006200023184828501620001f1565b91505092915050565b6080516127ae6200026b6000396000818161064501528181610769015281816109320152610d0901526127ae6000f3fe60806040526004361061012e5760003560e01c80638d869342116100ab578063df136d651161006f578063df136d65146103c6578063e1c7392a146103f1578063e34d5d271461041c578063f2fde38b14610447578063f7c618c114610470578063fe961f611461049b57610135565b80638d869342146102df5780638da5cb5b1461030a578063b6b55f2514610335578063be9a65551461035e578063c00007b01461038957610135565b8063399080ec116100f2578063399080ec1461020e57806343cd8f7e1461024b57806354cde9f814610276578063715018a61461029f5780638705fcd4146102b657610135565b80630917e7761461013a5780631959a0021461016557806325caa262146101a35780632e1a7d4d146101ce57806335975a37146101f757610135565b3661013557005b600080fd5b34801561014657600080fd5b5061014f6104c6565b60405161015c9190611a80565b60405180910390f35b34801561017157600080fd5b5061018c60048036038101906101879190611b0d565b6104d0565b60405161019a929190611b3a565b60405180910390f35b3480156101af57600080fd5b506101b86104f4565b6040516101c59190611a80565b60405180910390f35b3480156101da57600080fd5b506101f560048036038101906101f09190611b8f565b610597565b005b34801561020357600080fd5b5061020c6106f6565b005b34801561021a57600080fd5b5061023560048036038101906102309190611b0d565b61071b565b6040516102429190611a80565b60405180910390f35b34801561025757600080fd5b50610260610767565b60405161026d9190611c1b565b60405180910390f35b34801561028257600080fd5b5061029d60048036038101906102989190611e52565b61078b565b005b3480156102ab57600080fd5b506102b46109d7565b005b3480156102c257600080fd5b506102dd60048036038101906102d89190611b0d565b6109eb565b005b3480156102eb57600080fd5b506102f4610a70565b6040516103019190611a80565b60405180910390f35b34801561031657600080fd5b5061031f610c29565b60405161032c9190611eec565b60405180910390f35b34801561034157600080fd5b5061035c60048036038101906103579190611b8f565b610c53565b005b34801561036a57600080fd5b50610373610dbb565b6040516103809190611f22565b60405180910390f35b34801561039557600080fd5b506103b060048036038101906103ab9190611b0d565b610dce565b6040516103bd9190611a80565b60405180910390f35b3480156103d257600080fd5b506103db61103c565b6040516103e89190611a80565b60405180910390f35b3480156103fd57600080fd5b50610406611042565b6040516104139190611f22565b60405180910390f35b34801561042857600080fd5b50610431611055565b60405161043e9190611a80565b60405180910390f35b34801561045357600080fd5b5061046e60048036038101906104699190611b0d565b61105b565b005b34801561047c57600080fd5b506104856110de565b6040516104929190611c1b565b60405180910390f35b3480156104a757600080fd5b506104b0611104565b6040516104bd9190611a80565b60405180910390f35b6000600554905090565b60076020528060005260406000206000915090508060000154908060010154905082565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105519190611eec565b602060405180830381865afa15801561056e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105929190611f52565b905090565b61059f61110a565b600860019054906101000a900460ff166105b857600080fd5b60006105c2611159565b905081600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546106169190611fae565b925050819055506106256113da565b81600560008282546106379190611fae565b9250508190555061068933837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166114bd9092919063ffffffff16565b600081111561069c5761069b81611543565b5b3373ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364836040516106e29190611a80565b60405180910390a2506106f36115f3565b50565b6106fe6115fd565b6001600860016101000a81548160ff021916908315150217905550565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6107936115fd565b600860009054906101000a900460ff16156107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da9061203f565b60405180910390fd5b6001600860006101000a81548160ff0219169083151502179055506000805b83518110156108e65760405180604001604052808483815181106108295761082861205f565b5b602002602001015181526020016000815250600760008684815181106108525761085161205f565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101559050508281815181106108be576108bd61205f565b5b6020026020010151826108d1919061208e565b915080806108de906120c2565b915050610802565b50838114610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090612156565b60405180910390fd5b806005819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161098d93929190612176565b6020604051808303816000875af11580156109ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d091906121d9565b5050505050565b6109df6115fd565b6109e9600061167b565b565b6109f36115fd565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a2c57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806005541115610c2157600554670de0b6b3a7640000600654600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610b089190611eec565b602060405180830381865afa158015610b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b499190611f52565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ba49190611eec565b602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be59190611f52565b610bef919061208e565b610bf99190611fae565b610c039190612206565b610c0d919061228f565b600454610c1a919061208e565b9050610c26565b600090505b90565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610c5b61110a565b6000806005541115610c7657610c6f611159565b9050610c87565b600060048190555060006006819055505b81600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610cd9919061208e565b92505081905550610ce86113da565b8160056000828254610cfa919061208e565b92505081905550610d4e3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611741909392919063ffffffff16565b6000811115610d6157610d6081611543565b5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c83604051610da79190611a80565b60405180910390a250610db86115f3565b50565b600860019054906101000a900460ff1681565b6000806005541115611032576000600554670de0b6b3a7640000600654600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610e689190611eec565b602060405180830381865afa158015610e85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea99190611f52565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610f049190611eec565b602060405180830381865afa158015610f21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f459190611f52565b610f4f919061208e565b610f599190611fae565b610f639190612206565b610f6d919061228f565b600454610f7a919061208e565b9050670de0b6b3a7640000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015482610fd39190611fae565b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546110209190612206565b61102a919061228f565b915050611037565b600090505b919050565b60045481565b600860009054906101000a900460ff1681565b60065481565b6110636115fd565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c990612332565b60405180910390fd5b6110db8161167b565b50565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b60026000540361114f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111469061239e565b60405180910390fd5b6002600081905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f61510896040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156111c557600080fd5b505af11580156111d9573d6000803e3d6000fd5b505050506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161123a9190611eec565b602060405180830381865afa158015611257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127b9190611f52565b9050600554670de0b6b3a7640000600654836112979190611fae565b6112a19190612206565b6112ab919061228f565b6004546112b8919061208e565b6004819055506000670de0b6b3a7640000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546004546113199190611fae565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546113669190612206565b611370919061228f565b9050808261137e9190611fae565b6006819055503373ffffffffffffffffffffffffffffffffffffffff167fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba826040516113ca9190611a80565b60405180910390a2809250505090565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015403611471576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506114bb565b600454600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b565b61153e8363a9059cbb60e01b84846040516024016114dc9291906123be565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506117ca565b505050565b60003373ffffffffffffffffffffffffffffffffffffffff168260405161156990612418565b60006040518083038185875af1925050503d80600081146115a6576040519150601f19603f3d011682016040523d82523d6000602084013e6115ab565b606091505b50509050806115ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e690612479565b60405180910390fd5b5050565b6001600081905550565b611605611892565b73ffffffffffffffffffffffffffffffffffffffff16611623610c29565b73ffffffffffffffffffffffffffffffffffffffff1614611679576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611670906124e5565b60405180910390fd5b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6117c4846323b872dd60e01b85858560405160240161176293929190612176565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506117ca565b50505050565b600061182c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661189a9092919063ffffffff16565b905060008151148061184e57508080602001905181019061184d91906121d9565b5b61188d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188490612577565b60405180910390fd5b505050565b600033905090565b60606118a984846000856118b2565b90509392505050565b6060824710156118f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ee90612609565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611920919061268f565b60006040518083038185875af1925050503d806000811461195d576040519150601f19603f3d011682016040523d82523d6000602084013e611962565b606091505b50915091506119738783838761197f565b92505050949350505050565b606083156119e15760008351036119d957611999856119f4565b6119d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119cf906126f2565b60405180910390fd5b5b8290506119ec565b6119eb8383611a17565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115611a2a5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5e9190612756565b60405180910390fd5b6000819050919050565b611a7a81611a67565b82525050565b6000602082019050611a956000830184611a71565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ada82611aaf565b9050919050565b611aea81611acf565b8114611af557600080fd5b50565b600081359050611b0781611ae1565b92915050565b600060208284031215611b2357611b22611aa5565b5b6000611b3184828501611af8565b91505092915050565b6000604082019050611b4f6000830185611a71565b611b5c6020830184611a71565b9392505050565b611b6c81611a67565b8114611b7757600080fd5b50565b600081359050611b8981611b63565b92915050565b600060208284031215611ba557611ba4611aa5565b5b6000611bb384828501611b7a565b91505092915050565b6000819050919050565b6000611be1611bdc611bd784611aaf565b611bbc565b611aaf565b9050919050565b6000611bf382611bc6565b9050919050565b6000611c0582611be8565b9050919050565b611c1581611bfa565b82525050565b6000602082019050611c306000830184611c0c565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c8482611c3b565b810181811067ffffffffffffffff82111715611ca357611ca2611c4c565b5b80604052505050565b6000611cb6611a9b565b9050611cc28282611c7b565b919050565b600067ffffffffffffffff821115611ce257611ce1611c4c565b5b602082029050602081019050919050565b600080fd5b6000611d0b611d0684611cc7565b611cac565b90508083825260208201905060208402830185811115611d2e57611d2d611cf3565b5b835b81811015611d575780611d438882611af8565b845260208401935050602081019050611d30565b5050509392505050565b600082601f830112611d7657611d75611c36565b5b8135611d86848260208601611cf8565b91505092915050565b600067ffffffffffffffff821115611daa57611da9611c4c565b5b602082029050602081019050919050565b6000611dce611dc984611d8f565b611cac565b90508083825260208201905060208402830185811115611df157611df0611cf3565b5b835b81811015611e1a5780611e068882611b7a565b845260208401935050602081019050611df3565b5050509392505050565b600082601f830112611e3957611e38611c36565b5b8135611e49848260208601611dbb565b91505092915050565b600080600060608486031215611e6b57611e6a611aa5565b5b6000611e7986828701611b7a565b935050602084013567ffffffffffffffff811115611e9a57611e99611aaa565b5b611ea686828701611d61565b925050604084013567ffffffffffffffff811115611ec757611ec6611aaa565b5b611ed386828701611e24565b9150509250925092565b611ee681611acf565b82525050565b6000602082019050611f016000830184611edd565b92915050565b60008115159050919050565b611f1c81611f07565b82525050565b6000602082019050611f376000830184611f13565b92915050565b600081519050611f4c81611b63565b92915050565b600060208284031215611f6857611f67611aa5565b5b6000611f7684828501611f3d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fb982611a67565b9150611fc483611a67565b9250828203905081811115611fdc57611fdb611f7f565b5b92915050565b600082825260208201905092915050565b7f436f6e747261637420616c726561647920696e697469616c697a656400000000600082015250565b6000612029601c83611fe2565b915061203482611ff3565b602082019050919050565b600060208201905081810360008301526120588161201c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061209982611a67565b91506120a483611a67565b92508282019050808211156120bc576120bb611f7f565b5b92915050565b60006120cd82611a67565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120ff576120fe611f7f565b5b600182019050919050565b7f546f74616c7320646f6e74206d61746368000000000000000000000000000000600082015250565b6000612140601183611fe2565b915061214b8261210a565b602082019050919050565b6000602082019050818103600083015261216f81612133565b9050919050565b600060608201905061218b6000830186611edd565b6121986020830185611edd565b6121a56040830184611a71565b949350505050565b6121b681611f07565b81146121c157600080fd5b50565b6000815190506121d3816121ad565b92915050565b6000602082840312156121ef576121ee611aa5565b5b60006121fd848285016121c4565b91505092915050565b600061221182611a67565b915061221c83611a67565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561225557612254611f7f565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061229a82611a67565b91506122a583611a67565b9250826122b5576122b4612260565b5b828204905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061231c602683611fe2565b9150612327826122c0565b604082019050919050565b6000602082019050818103600083015261234b8161230f565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000612388601f83611fe2565b915061239382612352565b602082019050919050565b600060208201905081810360008301526123b78161237b565b9050919050565b60006040820190506123d36000830185611edd565b6123e06020830184611a71565b9392505050565b600081905092915050565b50565b60006124026000836123e7565b915061240d826123f2565b600082019050919050565b6000612423826123f5565b9150819050919050565b7f455448205472616e73666572206661696c65642e000000000000000000000000600082015250565b6000612463601483611fe2565b915061246e8261242d565b602082019050919050565b6000602082019050818103600083015261249281612456565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006124cf602083611fe2565b91506124da82612499565b602082019050919050565b600060208201905081810360008301526124fe816124c2565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612561602a83611fe2565b915061256c82612505565b604082019050919050565b6000602082019050818103600083015261259081612554565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006125f3602683611fe2565b91506125fe82612597565b604082019050919050565b60006020820190508181036000830152612622816125e6565b9050919050565b600081519050919050565b60005b83811015612652578082015181840152602081019050612637565b60008484015250505050565b600061266982612629565b61267381856123e7565b9350612683818560208601612634565b80840191505092915050565b600061269b828461265e565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006126dc601d83611fe2565b91506126e7826126a6565b602082019050919050565b6000602082019050818103600083015261270b816126cf565b9050919050565b600081519050919050565b600061272882612712565b6127328185611fe2565b9350612742818560208601612634565b61274b81611c3b565b840191505092915050565b60006020820190508181036000830152612770818461271d565b90509291505056fea26469706673582212202182ecfaf0de2adebef6f19797d0467939e67c4e0b09c05f768a1a1fe54a95a164736f6c63430008100033";

type JayLiquidityStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JayLiquidityStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JayLiquidityStaking__factory extends ContractFactory {
  constructor(...args: JayLiquidityStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _liquidityToken: string,
    overrides?: Overrides & { from?: string }
  ): Promise<JayLiquidityStaking> {
    return super.deploy(
      _liquidityToken,
      overrides || {}
    ) as Promise<JayLiquidityStaking>;
  }
  override getDeployTransaction(
    _liquidityToken: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_liquidityToken, overrides || {});
  }
  override attach(address: string): JayLiquidityStaking {
    return super.attach(address) as JayLiquidityStaking;
  }
  override connect(signer: Signer): JayLiquidityStaking__factory {
    return super.connect(signer) as JayLiquidityStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JayLiquidityStakingInterface {
    return new utils.Interface(_abi) as JayLiquidityStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JayLiquidityStaking {
    return new Contract(address, _abi, signerOrProvider) as JayLiquidityStaking;
  }
}
