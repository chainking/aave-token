/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { LendToAaveMigrator } from "./LendToAaveMigrator";

export class LendToAaveMigratorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    aave: string,
    lend: string,
    lendAaveRatio: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<LendToAaveMigrator> {
    return super.deploy(aave, lend, lendAaveRatio, overrides) as Promise<
      LendToAaveMigrator
    >;
  }
  getDeployTransaction(
    aave: string,
    lend: string,
    lendAaveRatio: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(aave, lend, lendAaveRatio, overrides);
  }
  attach(address: string): LendToAaveMigrator {
    return super.attach(address) as LendToAaveMigrator;
  }
  connect(signer: Signer): LendToAaveMigratorFactory {
    return super.connect(signer) as LendToAaveMigratorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendToAaveMigrator {
    return new Contract(address, _abi, signerOrProvider) as LendToAaveMigrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "aave",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "lend",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lendAaveRatio",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LendMigrated",
    type: "event"
  },
  {
    inputs: [],
    name: "AAVE",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "LEND",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "LEND_AAVE_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "_totalLendMigrated",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "migrateFromLEND",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "migrationStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60e06040526000805534801561001457600080fd5b5060405161065a38038061065a8339818101604052606081101561003757600080fd5b50805160208201516040909201516001600160601b0319606092831b81166080529290911b90911660a05260c05260805160601c60a05160601c60c0516105b46100a660003980610285528061035c5250806101db52806103e4525080610128528061025952506105b46000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638129fc1c1161005b5780638129fc1c14610106578063abb76be81461010e578063dde43cba14610116578063f301e7811461011e57610088565b806348ccda3c1461008d578063682356c0146100b1578063685cda02146100d05780637c6e94e3146100ea575b600080fd5b610095610126565b604080516001600160a01b039092168252519081900360200190f35b6100ce600480360360208110156100c757600080fd5b503561014a565b005b6100d861035a565b60408051918252519081900360200190f35b6100f261037e565b604080519115158252519081900360200190f35b6100ce610386565b6100d86103d7565b6100d86103dd565b6100956103e2565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000805411610198576040805162461bcd60e51b8152602060048201526015602482015274135251d490551253d397d393d517d4d51054951151605a1b604482015290519081900360640190fd5b6033546101ab908263ffffffff61040616565b603355604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916323b872dd9160648083019260209291908290030181600087803b15801561022357600080fd5b505af1158015610237573d6000803e3d6000fd5b505050506040513d602081101561024d57600080fd5b50506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb336102af847f000000000000000000000000000000000000000000000000000000000000000063ffffffff61046716565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156102fe57600080fd5b505af1158015610312573d6000803e3d6000fd5b505050506040513d602081101561032857600080fd5b5050604051819033907f5c5c7a8e729fa9bfdd1ecad2e8f7f3db1d29acf43c1e6036f34fd68621d15c8190600090a350565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054151590565b60006103906104a9565b905060005481116103d25760405162461bcd60e51b815260040180806020018281038252602e815260200180610551602e913960400191505060405180910390fd5b600055565b60335481565b600181565b7f000000000000000000000000000000000000000000000000000000000000000081565b600082820183811015610460576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600061046083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506104ae565b600190565b6000818361053a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104ff5781810151838201526020016104e7565b50505050905090810190601f16801561052c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161054657fe5b049594505050505056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a26469706673582212203b6711587b3a71b6e3bee84f9fbbbd085bedd67d0b7f458eca44f4a0b7a159c764736f6c634300060a0033";
