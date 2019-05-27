export class Bike {
    _id: string;
    name: string;
    kms: number;
    state: boolean;
    description: string;

    constructor(_id: string, name: string, kms: number, state: boolean, description: string) {
        this._id = _id;
        this.name = name;
        this.kms = kms;
        this.state = state;
        this.description = description;

    }
}
