
import cryptico from 'cryptico'
import  crypto  from 'crypto-js'


class Address {
  constructor() {
    this.publicKey = null
    this.privateKey = null
  }

  getPrivateKey() {
    return JSON.stringify(this.privateKey)
  }

  getPublicKey() {
    return JSON.stringify(this.publicKey)
  }

  store() {
    localStorage.setItem('seeano-address', JSON.stringify(this))
  }
}

class AddressV1 extends Address {
}


function generateRandomString() {
  function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  let rString = randomString(128, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

  return rString
}

function loadAddress() {
  let address = new AddressV1()

  let data = localStorage.getItem('seeano-address')
  if (! data) {
    return null
  }

  let parsedData = JSON.parse(data)
  address.publicKey = parsedData.publicKey
  address.privateKey = parsedData.privateKey

  return address

}

function createNewAddress() {
  console.log('createNewAddress is creating new key...')

  let address = new AddressV1()
  let randomString = generateRandomString()

  let key = cryptico.generateRSAKey(randomString, 1024);
  address.privateKey = key
  address.publicKey = cryptico.publicKeyString(key);

  return address
}

export { createNewAddress, loadAddress }