/**
 * This module is responsible for organizing the high level functionalities of the block chain
 *
 * The hierarchy of dependencies is as follows:
 *  - A `BlockChain` has many `ChainOfTrust`s defining the merkle tree
 *  - A `ChainOfTrust`is a linked list of `Block`s
 *  - A `Block` is a `BlockData` with a hashing mechanism
 *  - A `BlockData` is a ledger of `Transaction`s
 */


class BlockChain {
  constructor() {
    this.version = '0.0.1'
    this.chainOfTrust = null
  }

  setupNewBlockChain() {
    this.chainOfTrust = new ChainOfTrust()

    let genesisBlockData = createGenesisBlockData()
    let genesisBlock = createGenesisBlock()
  }

  restoreBlockChain(rawData) {

  }

  mineNewBlock() {

  }

  importChainSegment(rawData) {

  }

  exportChainSegment(rawData) {

  }


}