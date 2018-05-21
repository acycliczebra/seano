

class AbstractBlockData {

}

class BlockData extends AbstractBlockData {
  constructor() {
    this.sender = 0
    this.data = {}
    this.signature = null
  }

  setBlockData(data) {
    this.data = {}
  }

  setSender(sender) {
    this.sender = sender
  }

  serialize() {
    return {
      sender: this.sender,
      data: this.data,
      signature: this.sign()
    }
  }
}