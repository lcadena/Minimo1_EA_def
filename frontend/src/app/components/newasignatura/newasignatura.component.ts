import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AsignaturaService} from "../../services/asignatura.service";


@Component({
  selector: 'app-newasignatura',
  templateUrl: './newasignatura.component.html',
  styleUrls: ['./newasignatura.component.css']
})
export class NewasignaturaComponent implements OnInit {

  newasignaturaForm: FormGroup;

  validation_messages: any;

  constructor(private newasignaturaService: AsignaturaService,
              private router: Router, private formBuilder: FormBuilder) {

    this.newasignaturaForm = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{3,15}$/)])),

        price: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^((?!(0))[0-9]{2,4})$/)])),

        category: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{3,25}$/)])),

        description: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{3,250}$/)])),

      }
    )
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 3 and 15 characters long'}
      ],
      'category': [
        { type: 'required', message: 'Category is required'},
        { type: 'pattern', message: 'It has to be between 3 and 25 characters long'}
      ],
      'price': [
        { type: 'required', message: 'Price is required'},
        { type: 'pattern', message: 'It can not begin by a 0 and has to be between 2 and 4 numbers long'}
      ],
      'description': [
        { type: 'required', message: 'Description is required' },
        { type: 'pattern', message: 'It has to be between 3 and 250 characters long' }
      ]
    }
  }

  /*addProduct() {
    console.log(this.newasignaturaForm.value);
    //let product2 = new Product("", this.addproductForm.value.name, "",parseInt(this.addproductForm.value.price), this.addproductForm.value.category, this.addproductForm.value.description);
    let product = new Product();
    product._id = "";
    product.name = this.newasignaturaForm.value.name;
    product.picture = "";
    product.price = this.newasignaturaForm.value.price;
    product.category = this.newasignaturaForm.value.category;
    product.description = this.newasignaturaForm.value.description;

    this.newasignaturaService.addAsignatura(product)
      .subscribe(
        res => {
          console.log(res);
          let token = res['token'];
          localStorage.setItem('token', token);

          this.router.navigateByUrl("/api/product");
        },

        err => {
          console.log(err);
          this.handleError(err);
        });

  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    } else if ( err.status == 404 ) {
      alert('404 not found');
    }

  }*/

}
