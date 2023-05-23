import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-registry-modal',
    templateUrl: 'registry.modal.html',
    styleUrls: ['registry.modal.scss']
})

export class RegistryModal implements OnInit{
    constructor(
        public activeModal: NgbActiveModal
    ){}

    ngOnInit(): void {
    }
}