
/**
 * This module is responsible for maintaining the block data and verifying the hash of the block
 */

class Block {
  constructor(
      hashFunction,
      verifyDifficulty,
      verifyCurrentBlockDataFromPrevious){

    this.hashFunction = hashFunction
    this.verifyDifficulty = verifyDifficulty
    this.verifyCurrentBlockDataFromPrevious = verifyCurrentBlockDataFromPrevious

    this.blockData = null //type: BlockData
    this.previousBlock = null //type: Block

    this.nonce = null //type: int32
    this.hash = null //type: string

    this.isInitialized = false //type: boolean
    this.isDataValid = false //type: boolean
    this.isVerified = false //type: boolean

  }

  setupBlock(
      blockData,
      previousBlock) {

    this.blockData = blockData
    this.previousBlock = previousBlock

    this.isInitialized = true
    this.isDataValid = false
    this.isVerified = false
  }

  verifyHash(nonce, hash) {
    if (this.isDataValid === false) {
      return false
    }

    // verify hash
    let calculatedHash = this.hashFunction(
      this.blockData.serialize(),
      this.previousBlock.getHash(),
      nonce
    )

    if (calculatedHash !== hash) {
      return false
    }

    if (this.verifyDifficulty(hash, this.blockData) === false) {
      return false
    }

    this.hash = hash
    this.nonce = nonce
    this.isVerified = true
    return true
  }

  getHash() {
    if (this.isVerified === false) {
      throw "hash is not yet verified"
    }

    return this.hash
  }

  serialize() {
    return {
      timestamp: this.timestamp,
      nonce: this.nonce,
      hash: this.hash,
      data: this.transactionGroup.serialize(),
    }
  }
}

function createVerifiedBlock(
    blockData,
    previousBlock,
    nonce,
    hash) {

  let block = new Block(
    hashFunction,
    verifyDifficulty,
    verifyCurrentBlockDataFromPrevious)

  block.setupBlock(
    blockData,
    previousBlock
  )

  let result = block.verifyDataIntegrity()
  if (!result) {
    return null
  }

  result = block.verifyHash(nonce, hash)
  if (!result) {
    return null
  }

  return block
}

function createUnverifiedBlock(
    blockData,
    previousBlock) {

  let block = new Block(
    hashFunction,
    difficultyVerifier,
    verifyCurrentBlockDataFromPrevious)

  block.setupBlock(
    blockData,
    previousBlock
  )

  let result = block.verifyDataIntegrity()
  if (!result) {
    return null
  }

  return block

}

function createGenesisBlock(
  blockData
)