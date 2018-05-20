
/**
 * This module is responsible for handling the linked list of blocks
 */

class ChainOfTrust {
  constructor() {
    this.head = null
  }

  hashFunction() {

  }

  difficultyVerifier() {

  }

  verifyCurrentBlockDataFromPrevious(currentData, previousData) {

  }

  verifyDataIntegrity() {
    let block = this.head

    if (block.isInitialized === false) {
      return false
    }

    // verify previous block
    if (block.previousBlock !== null && block.previousBlock.isVerified === false) {
      return false
    }

    // verify transactions
    let currentBlockData = block.blockData
    let previousBlockData = block.previousBlock.getBlockData()
    if (block.verifyCurrentBlockDataFromPrevious(currentBlockData, previousBlockData) === false) {
      return false
    }

    block.isDataValid = true
    return true
  }
}