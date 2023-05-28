import {Component, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../../models';

@Component({
    selector: 'app-registry-modal',
    templateUrl: 'registry.modal.html',
    styleUrls: ['registry.modal.scss']
})

export class RegistryModal implements OnInit{
    public user: UserModel = new UserModel;

    public userForm: FormGroup;
    constructor(
        public activeModal: NgbActiveModal,
        formBuilder: FormBuilder
    ){
        let t = this;
        t.userForm = formBuilder.group({
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthDate: ['', Validators.required]
        });
    }

    get firstName() { return this.userForm.get('firstName');}
    get middleName() { return this.userForm.get('middleName');}
    get lastName() { return this.userForm.get('lastName');}
    get birthDate() {return this.userForm.get('birthDate');}

    ngOnInit(): void {
    }

    public markFormGroupTouchedAndDirty(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
          control.markAsTouched();
          control.markAsDirty();
          control.updateValueAndValidity();

          if (control.controls) {
            this.markFormGroupTouchedAndDirty(control);
          }
        });
      }

    SendUserIindo(){
        let t = this;
        if(!t.userForm.valid){
            t.markFormGroupTouchedAndDirty(t.userForm);
            return;
        }
        t.user.firstName = t.firstName.value;
        t.user.middleName = t.middleName.value;
        t.user.lastName = t.lastName.value;
        t.user.birthDate = t.birthDate.value;
        t.activeModal.close(t.user);
    }

    public checkIsInvalid(input: any): boolean {
        return input.invalid && input.dirty && !input.untouched;
      }
}
