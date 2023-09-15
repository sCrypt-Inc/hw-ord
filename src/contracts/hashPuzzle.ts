import { method, prop, assert, ByteString, sha256, Sha256 } from 'scrypt-ts'

import { BSV20V1 } from 'scrypt-ord'

export class HashPuzzle extends BSV20V1 {
    @prop()
    hash: Sha256

    constructor(
        tick: ByteString,
        max: bigint,
        lim: bigint,
        amt: bigint,
        hash: Sha256
    ) {
        super(tick, max, lim, amt)
        this.setConstructor(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(this.hash == sha256(message), 'hashes are not equal')
    }
}
