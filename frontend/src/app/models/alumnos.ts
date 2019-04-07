export class Alumnos {
    _id: string;
    name: string;
    address: string;
    phone: string;

    constructor(_id='',name ='', address ='',phone=''){
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

}