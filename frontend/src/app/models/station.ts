import { Bike } from './bike';

export class Station {
    _id: string;
    name: string;
    state: string;
    description: string;
    bikes: Bike[];

    constructor(_id: string, name: string, state: string, description: string, bikes: Bike[]) {
        this._id = _id;
        this.name = name;
        this.state = state;
        this.description = description;
        this.bikes = bikes;
    }
}
