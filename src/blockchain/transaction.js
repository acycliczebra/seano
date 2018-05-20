
class AbstractTransaction {
  constructor() {
    this.senderAddress = 0
    this.payload = {}
    this.signature = null
  }

  serialize() {
    return {
      sender: this.senderAddress,
      payload: this.payload,
      signature: this.signature,
    }
  }
}


class DummyTransaction extends AbstractTransaction {
  setupAndSignTransaction(senderPublicKey, senderPrivateKey) {
  }

  setupAndVerifyTransaction(senderPublicKey, signature) {
  }
}

class PaymentTransaction extends AbstractTransaction {

}

class CommentTransaction extends AbstractTransaction {

}