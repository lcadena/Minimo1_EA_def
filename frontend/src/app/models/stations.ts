export class Stations {
    _id: string;
    name: string;
    state: string;
    description: string;
    bikes:string;  

    constructor(_id='',name ='', state='', description='', bikes =''){
        this._id = _id;
        this.name = name;
        this.state = state;
        this.description = description;
        this.bikes = bikes;
    }
}
