export class Alumnos {
    _id: string;
    name: string;
    address: string;
    phone: string //Array<String>;

    constructor(_id: string ='',name: string ='', address: string ='', phone: string =''/*phoneArray: Array<String> = []*/){
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        //this.phone = phoneArray;
    }

}
