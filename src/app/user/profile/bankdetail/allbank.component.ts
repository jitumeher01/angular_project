import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {LoadingService} from '../../../service/loading.service';

import {AuthService} from '../../../auth.service';

import {Router} from '@angular/router';

import {BankDetail} from '../../../model/bankdetail';

@Component({
  templateUrl: './allbank.component.html',
})
export class AllBankComponent implements  OnInit{

  bankDetails: BankDetail[]= [];
  editBank: BankDetail=new BankDetail();
  id: number;
  successMessage: string= '';
  isBankEdit: boolean= false;

  bank: BankDetail= new BankDetail();

   constructor(private _userService: UserService, private _route: Router, private _authService: AuthService, private _loadingService: LoadingService) {
  }

    ngOnInit(){
      this.refreshAllBank();
    }
    addBankDetails(bank: BankDetail){
      this._loadingService.openModal();
      this.successMessage = '';
      document.getElementById('close').click();
        console.log(bank);
        this._userService.userAddBankDetails(bank).subscribe(
            bankDetails => {
                this.bankDetails = bankDetails;
               console.log(bankDetails);
               this._loadingService.closeModal();
            },
            err => {
              console.log(err);
              this._loadingService.closeModal();
               this._route.navigate(['/logout']);
            }
        );
    }

    deleteBankDetails(id: number){
      this._loadingService.openModal();
      this.successMessage = '';
      this._userService.userdeleteBankDetail(id).subscribe(
        message => {

           this.successMessage = 'Bank Details Delete successfully !';
           this._loadingService.closeModal();
           this.refreshAllBank();
        },
        err => {
          console.log(err);
          this._loadingService.closeModal();
           this._route.navigate(['/logout']);
        }
    );
    }

    defaultBankDetails(id: number){
      this._loadingService.openModal();
      this.successMessage = '';
            this._userService.userDefaultBankDetail(id).subscribe(
              message => {

                 this.successMessage = 'Bank Details set default !';
                 this._loadingService.closeModal();
                 this.refreshAllBank();
              },
              err => {
                console.log(err);
                this._loadingService.closeModal();
                 this._route.navigate(['/logout']);
              }
          );
          }


          editBankDetails(editBank: BankDetail){
            this.isBankEdit=true;
            this.editBank=editBank;
          console.log(editBank);
          }

          updateBankDetails(editBank: BankDetail){
            this.isBankEdit = true;
            this._loadingService.openModal();
            this._userService.userUpdateBankDetails(this.editBank).subscribe(
              res => {
                this._loadingService.closeModal();
               this.refreshAllBank();
               this.isBankEdit = false;
              console.log('jitu');
          },
          err => {
            console.log(err);
            this._loadingService.closeModal();
             this._route.navigate(['/logout']);
          }
        );
          }


          refreshAllBank(){
            this._loadingService.openModal();
            this._userService.usergetAllBankDetails()
            .subscribe(
                    bankDetails => {
                     this.bankDetails = bankDetails;
                     this._loadingService.closeModal();
                     console.log(bankDetails);
                },
                err => {
                  console.log(err);
                  this._loadingService.closeModal();
                   this._route.navigate(['/logout']);
                }
              );
          }

          dynamicApi(url: string, ){

          }


}
