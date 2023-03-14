/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  JayMart,
  JayMartInterface,
} from "../../../contracts/JayMart.sol/JayMart";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_jayAddress",
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
    inputs: [
      {
        internalType: "address[]",
        name: "erc721TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc721Ids",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "erc1155TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Amounts",
        type: "uint256[]",
      },
    ],
    name: "buyJay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "erc721TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc721Ids",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "erc1155TokenAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "erc1155Amounts",
        type: "uint256[]",
      },
    ],
    name: "buyNFTs",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "getPriceBuy",
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
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "getPriceSell",
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
    name: "getTotals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setTEAMWallet",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "updateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0604052662386f26fc10000600655678ac7230489e8000060075566038d7ea4c6800060085562093a804262000037919062000390565b6009553480156200004757600080fd5b50604051620029213803806200292183398181016040528101906200006d919062000435565b6200008d620000816200017d60201b60201c565b6200018560201b60201c565b600180819055508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506200012173985b6b9064212091b4b325f68746b77262801bcb6200024960201b60201c565b735f4ec3df9cbd43714fe2740f5e3616155c5b8419600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620004ea565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002596200029d60201b60201c565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620002ad6200017d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002d36200032e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200032c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200032390620004c8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200039d8262000357565b9150620003aa8362000357565b9250828201905080821115620003c557620003c462000361565b5b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003fd82620003d0565b9050919050565b6200040f81620003f0565b81146200041b57600080fd5b50565b6000815190506200042f8162000404565b92915050565b6000602082840312156200044e576200044d620003cb565b5b60006200045e848285016200041e565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620004b060208362000467565b9150620004bd8262000478565b602082019050919050565b60006020820190508181036000830152620004e381620004a1565b9050919050565b60805160a0516123fc6200052560003960008181610536015281816107930152610d4b01526000818161050f015261076c01526123fc6000f3fe6080604052600436106100e15760003560e01c80638da5cb5b1161007f578063db8d55f111610059578063db8d55f11461029e578063f23a6e61146102cc578063f2fde38b14610309578063fc9fc6c714610332576100e8565b80638da5cb5b1461020b5780638e15f4731461023657806395b6712814610261576100e8565b80634ef26f6a116100bb5780634ef26f6a14610190578063666566e8146101ac578063715018a6146101c857806384e10a90146101df576100e8565b8063150b7a02146100ed57806329de6d201461012a57806343a43ec814610153576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190611667565b610360565b6040516101219190611725565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c9190611740565b610374565b005b34801561015f57600080fd5b5061017a6004803603810190610175919061176d565b6103c0565b60405161018791906117a9565b60405180910390f35b6101aa60048036038101906101a5919061187a565b6103d7565b005b6101c660048036038101906101c1919061187a565b6105e4565b005b3480156101d457600080fd5b506101dd610836565b005b3480156101eb57600080fd5b506101f461084a565b604051610202929190611997565b60405180910390f35b34801561021757600080fd5b5061022061085b565b60405161022d91906119cf565b60405180910390f35b34801561024257600080fd5b5061024b610884565b6040516102589190611a03565b60405180910390f35b34801561026d57600080fd5b506102886004803603810190610283919061176d565b610925565b60405161029591906117a9565b60405180910390f35b3480156102aa57600080fd5b506102b361093c565b6040516102c39493929190611a1e565b60405180910390f35b3480156102d857600080fd5b506102f360048036038101906102ee9190611a63565b61095c565b6040516103009190611725565b60405180910390f35b34801561031557600080fd5b50610330600480360381019061032b9190611740565b610971565b005b34801561033e57600080fd5b506103476109f4565b6040516103579493929190611a1e565b60405180910390f35b600063150b7a0260e01b9050949350505050565b61037c610e28565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600654826103d09190611b29565b9050919050565b6103df610ea6565b6101f4868690508b8b90506103f49190611b83565b1115610435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042c90611c14565b60405180910390fd5b60008a8a905090506104498b8b8b8b610ef5565b610457878787878787610fcc565b816104629190611b83565b905080600460008282546104769190611b83565b9250508190555060006006548261048d9190611b29565b9050803410156104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c990611c80565b60405180910390fd5b61050a600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002346105059190611ccf565b6110f4565b6105347f0000000000000000000000000000000000000000000000000000000000000000476110f4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166379cc6790336007548561057f9190611b29565b6040518363ffffffff1660e01b815260040161059c929190611d00565b600060405180830381600087803b1580156105b657600080fd5b505af11580156105ca573d6000803e3d6000fd5b5050505050506105d86111a5565b50505050505050505050565b6105ec610ea6565b6101f4868690508b8b90506106019190611b83565b1115610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063990611c14565b60405180910390fd5b60006004346106519190611ccf565b905060006004346106629190611ccf565b905060006002346106739190611ccf565b905060008d8d905090506106898e8e8e8e6111ae565b6106978a8a8a8a8a8a611285565b816106a29190611b83565b905080600560008282546106b69190611b83565b92505081905550600060648210156106db57600854826106d69190611b29565b6106f6565b6002600854836106eb9190611b29565b6106f59190611ccf565b5b90508034101561073b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073290611c80565b60405180910390fd5b610767600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866110f4565b6107917f0000000000000000000000000000000000000000000000000000000000000000856110f4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f088d54784336040518363ffffffff1660e01b81526004016107eb91906119cf565b6000604051808303818588803b15801561080457600080fd5b505af1158015610818573d6000803e3d6000fd5b5050505050505050505061082a6111a5565b50505050505050505050565b61083e610e28565b61084860006113ad565b565b600080600454600554915091509091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190611dac565b5050509150508091505090565b6000600854826109359190611b29565b9050919050565b600080600080600854600654600754600954935093509350935090919293565b600063f23a6e6160e01b905095945050505050565b610979610e28565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df90611e99565b60405180910390fd5b6109f1816113ad565b50565b600080600080610a02610ea6565b600080600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610a75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a999190611dac565b94509450509350935060008313610ae5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adc90611f05565b60405180910390fd5b8369ffffffffffffffffffff168169ffffffffffffffffffff161015610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3790611f71565b60405180910390fd5b60008203610b83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7a90611fdd565b60405180910390fd5b60006402540be40084610b969190611b29565b90506009548311610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd390612049565b60405180910390fd5b6000671bc16d674ec80000821115610c22576000671bc16d674ec8000083610c049190611ccf565b905080670de0b6b3a7640000610c1a9190611ccf565b915050610c39565b81671bc16d674ec80000610c369190611ccf565b90505b3373ffffffffffffffffffffffffffffffffffffffff16610c5861085b565b73ffffffffffffffffffffffffffffffffffffffff161480610ca05750806002600854610c859190611ccf565b108015610c9f5750806096600854610c9d9190611b29565b115b5b610cdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd6906120b5565b60405180910390fd5b80600881905550678ac7230489e80000821115610d2e576000678ac7230489e8000083610d0c9190611ccf565b905080670de0b6b3a7640000610d229190611ccf565b60068190555050610d49565b81678ac7230489e80000610d429190611ccf565b6006819055505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f57557476006546040518263ffffffff1660e01b8152600401610da491906117a9565b602060405180830381865afa158015610dc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de591906120d5565b6007819055506201518084610dfa9190611b83565b6009819055506008546006546007546009549950995099509950505050505050610e226111a5565b90919293565b610e30611471565b73ffffffffffffffffffffffffffffffffffffffff16610e4e61085b565b73ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b9061214e565b60405180910390fd5b565b600260015403610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee2906121ba565b60405180910390fd5b6002600181905550565b60005b82829050811015610fc557848482818110610f1657610f156121da565b5b9050602002016020810190610f2b9190611740565b73ffffffffffffffffffffffffffffffffffffffff166342842e0e3033868686818110610f5b57610f5a6121da565b5b905060200201356040518463ffffffff1660e01b8152600401610f8093929190612209565b600060405180830381600087803b158015610f9a57600080fd5b505af1158015610fae573d6000803e3d6000fd5b505050508080610fbd90612240565b915050610ef8565b5050505050565b6000806000905060005b868690508110156110e557848482818110610ff457610ff36121da565b5b90506020020135826110069190611b83565b915088888281811061101b5761101a6121da565b5b90506020020160208101906110309190611740565b73ffffffffffffffffffffffffffffffffffffffff1663f242432a30338a8a868181106110605761105f6121da565b5b9050602002013589898781811061107a576110796121da565b5b905060200201356040518563ffffffff1660e01b81526004016110a094939291906122bf565b600060405180830381600087803b1580156110ba57600080fd5b505af11580156110ce573d6000803e3d6000fd5b5050505080806110dd90612240565b915050610fd6565b50809150509695505050505050565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161111a90612345565b60006040518083038185875af1925050503d8060008114611157576040519150601f19603f3d011682016040523d82523d6000602084013e61115c565b606091505b50509050806111a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611197906123a6565b60405180910390fd5b505050565b60018081905550565b60005b8282905081101561127e578484828181106111cf576111ce6121da565b5b90506020020160208101906111e49190611740565b73ffffffffffffffffffffffffffffffffffffffff166342842e0e3330868686818110611214576112136121da565b5b905060200201356040518463ffffffff1660e01b815260040161123993929190612209565b600060405180830381600087803b15801561125357600080fd5b505af1158015611267573d6000803e3d6000fd5b50505050808061127690612240565b9150506111b1565b5050505050565b6000806000905060005b8686905081101561139e578484828181106112ad576112ac6121da565b5b90506020020135826112bf9190611b83565b91508888828181106112d4576112d36121da565b5b90506020020160208101906112e99190611740565b73ffffffffffffffffffffffffffffffffffffffff1663f242432a33308a8a86818110611319576113186121da565b5b90506020020135898987818110611333576113326121da565b5b905060200201356040518563ffffffff1660e01b815260040161135994939291906122bf565b600060405180830381600087803b15801561137357600080fd5b505af1158015611387573d6000803e3d6000fd5b50505050808061139690612240565b91505061128f565b50809150509695505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114b88261148d565b9050919050565b6114c8816114ad565b81146114d357600080fd5b50565b6000813590506114e5816114bf565b92915050565b6000819050919050565b6114fe816114eb565b811461150957600080fd5b50565b60008135905061151b816114f5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115748261152b565b810181811067ffffffffffffffff821117156115935761159261153c565b5b80604052505050565b60006115a6611479565b90506115b2828261156b565b919050565b600067ffffffffffffffff8211156115d2576115d161153c565b5b6115db8261152b565b9050602081019050919050565b82818337600083830152505050565b600061160a611605846115b7565b61159c565b90508281526020810184848401111561162657611625611526565b5b6116318482856115e8565b509392505050565b600082601f83011261164e5761164d611521565b5b813561165e8482602086016115f7565b91505092915050565b6000806000806080858703121561168157611680611483565b5b600061168f878288016114d6565b94505060206116a0878288016114d6565b93505060406116b18782880161150c565b925050606085013567ffffffffffffffff8111156116d2576116d1611488565b5b6116de87828801611639565b91505092959194509250565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61171f816116ea565b82525050565b600060208201905061173a6000830184611716565b92915050565b60006020828403121561175657611755611483565b5b6000611764848285016114d6565b91505092915050565b60006020828403121561178357611782611483565b5b60006117918482850161150c565b91505092915050565b6117a3816114eb565b82525050565b60006020820190506117be600083018461179a565b92915050565b600080fd5b600080fd5b60008083601f8401126117e4576117e3611521565b5b8235905067ffffffffffffffff811115611801576118006117c4565b5b60208301915083602082028301111561181d5761181c6117c9565b5b9250929050565b60008083601f84011261183a57611839611521565b5b8235905067ffffffffffffffff811115611857576118566117c4565b5b602083019150836020820283011115611873576118726117c9565b5b9250929050565b60008060008060008060008060008060a08b8d03121561189d5761189c611483565b5b60008b013567ffffffffffffffff8111156118bb576118ba611488565b5b6118c78d828e016117ce565b9a509a505060208b013567ffffffffffffffff8111156118ea576118e9611488565b5b6118f68d828e01611824565b985098505060408b013567ffffffffffffffff81111561191957611918611488565b5b6119258d828e016117ce565b965096505060608b013567ffffffffffffffff81111561194857611947611488565b5b6119548d828e01611824565b945094505060808b013567ffffffffffffffff81111561197757611976611488565b5b6119838d828e01611824565b92509250509295989b9194979a5092959850565b60006040820190506119ac600083018561179a565b6119b9602083018461179a565b9392505050565b6119c9816114ad565b82525050565b60006020820190506119e460008301846119c0565b92915050565b6000819050919050565b6119fd816119ea565b82525050565b6000602082019050611a1860008301846119f4565b92915050565b6000608082019050611a33600083018761179a565b611a40602083018661179a565b611a4d604083018561179a565b611a5a606083018461179a565b95945050505050565b600080600080600060a08688031215611a7f57611a7e611483565b5b6000611a8d888289016114d6565b9550506020611a9e888289016114d6565b9450506040611aaf8882890161150c565b9350506060611ac08882890161150c565b925050608086013567ffffffffffffffff811115611ae157611ae0611488565b5b611aed88828901611639565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b34826114eb565b9150611b3f836114eb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b7857611b77611afa565b5b828202905092915050565b6000611b8e826114eb565b9150611b99836114eb565b9250828201905080821115611bb157611bb0611afa565b5b92915050565b600082825260208201905092915050565b7f4d61782069732035303000000000000000000000000000000000000000000000600082015250565b6000611bfe600a83611bb7565b9150611c0982611bc8565b602082019050919050565b60006020820190508181036000830152611c2d81611bf1565b9050919050565b7f596f75206e65656420746f20706179206d6f7265204554482e00000000000000600082015250565b6000611c6a601983611bb7565b9150611c7582611c34565b602082019050919050565b60006020820190508181036000830152611c9981611c5d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611cda826114eb565b9150611ce5836114eb565b925082611cf557611cf4611ca0565b5b828204905092915050565b6000604082019050611d1560008301856119c0565b611d22602083018461179a565b9392505050565b600069ffffffffffffffffffff82169050919050565b611d4881611d29565b8114611d5357600080fd5b50565b600081519050611d6581611d3f565b92915050565b611d74816119ea565b8114611d7f57600080fd5b50565b600081519050611d9181611d6b565b92915050565b600081519050611da6816114f5565b92915050565b600080600080600060a08688031215611dc857611dc7611483565b5b6000611dd688828901611d56565b9550506020611de788828901611d82565b9450506040611df888828901611d97565b9350506060611e0988828901611d97565b9250506080611e1a88828901611d56565b9150509295509295909350565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611e83602683611bb7565b9150611e8e82611e27565b604082019050919050565b60006020820190508181036000830152611eb281611e76565b9050919050565b7f436861696e6c696e6b207072696365203c3d2030000000000000000000000000600082015250565b6000611eef601483611bb7565b9150611efa82611eb9565b602082019050919050565b60006020820190508181036000830152611f1e81611ee2565b9050919050565b7f5374616c65207072696365000000000000000000000000000000000000000000600082015250565b6000611f5b600b83611bb7565b9150611f6682611f25565b602082019050919050565b60006020820190508181036000830152611f8a81611f4e565b9050919050565b7f526f756e64206e6f7420636f6d706c6574650000000000000000000000000000600082015250565b6000611fc7601283611bb7565b9150611fd282611f91565b602082019050919050565b60006020820190508181036000830152611ff681611fba565b9050919050565b7f4665652075706461746520657665727920323420687273000000000000000000600082015250565b6000612033601783611bb7565b915061203e82611ffd565b602082019050919050565b6000602082019050818103600083015261206281612026565b9050919050565b7f466565207377696e6720746f6f20686967680000000000000000000000000000600082015250565b600061209f601283611bb7565b91506120aa82612069565b602082019050919050565b600060208201905081810360008301526120ce81612092565b9050919050565b6000602082840312156120eb576120ea611483565b5b60006120f984828501611d97565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612138602083611bb7565b915061214382612102565b602082019050919050565b600060208201905081810360008301526121678161212b565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006121a4601f83611bb7565b91506121af8261216e565b602082019050919050565b600060208201905081810360008301526121d381612197565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060608201905061221e60008301866119c0565b61222b60208301856119c0565b612238604083018461179a565b949350505050565b600061224b826114eb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361227d5761227c611afa565b5b600182019050919050565b600082825260208201905092915050565b50565b60006122a9600083612288565b91506122b482612299565b600082019050919050565b600060a0820190506122d460008301876119c0565b6122e160208301866119c0565b6122ee604083018561179a565b6122fb606083018461179a565b818103608083015261230c8161229c565b905095945050505050565b600081905092915050565b600061232f600083612317565b915061233a82612299565b600082019050919050565b600061235082612322565b9150819050919050565b7f455448205472616e73666572206661696c65642e000000000000000000000000600082015250565b6000612390601483611bb7565b915061239b8261235a565b602082019050919050565b600060208201905081810360008301526123bf81612383565b905091905056fea264697066735822122053132c0b2b62beeee8f52094c47c83a8b9908346c6f994a40070090e0d38bd6f64736f6c63430008100033";

type JayMartConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JayMartConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JayMart__factory extends ContractFactory {
  constructor(...args: JayMartConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _jayAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JayMart> {
    return super.deploy(_jayAddress, overrides || {}) as Promise<JayMart>;
  }
  override getDeployTransaction(
    _jayAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_jayAddress, overrides || {});
  }
  override attach(address: string): JayMart {
    return super.attach(address) as JayMart;
  }
  override connect(signer: Signer): JayMart__factory {
    return super.connect(signer) as JayMart__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JayMartInterface {
    return new utils.Interface(_abi) as JayMartInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JayMart {
    return new Contract(address, _abi, signerOrProvider) as JayMart;
  }
}
