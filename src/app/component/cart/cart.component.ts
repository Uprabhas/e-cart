import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showproduct:any=[];
  public totalamount: number=0;
  public myform:FormGroup|any;
  public addressform:false | any;
  constructor( private api:ApiService){}  
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct=res;
      this.totalamount = this.api.calprice();
      console.log(this.totalamount)
    })
    this.myform=new FormGroup({
      email:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required)

    })
  }
  deleteitem(item:product){
    this.api.removecartitem(item);
  }

  empty(){
    this.api.removeallitem()
  }

  cancel(){
    this.addressform=false
    this.myform.reset()
  }
  onsubmit(){
    this.myform.value;
    console.log(this.myform.value)
    this.myform.reset()
  }

}
