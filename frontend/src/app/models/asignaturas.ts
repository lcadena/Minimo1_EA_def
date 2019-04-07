export class Asignaturas {
    _id: string;
    name: string;
    alumnos:string;  

    constructor(_id='',name ='', alumnos =''){
        this._id = _id;
        this.name = name;
        this.alumnos = alumnos;
    }
}