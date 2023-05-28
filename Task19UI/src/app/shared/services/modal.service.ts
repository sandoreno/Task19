import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MessageModal } from '../modals/message-modal/message.modal';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

    modalRef: NgbModalRef;
    
    constructor(private modalService: NgbModal) { }
    
    public showErrorModal(errorMessage: string){
        let t = this;
        t.modalRef = t.modalService.open(MessageModal,
            {
                modalDialogClass: 'main-modal-custom',
                centered: true,
                size: 'md',
                windowClass: 'super-modal-delete-users very-nice-shadow',
                animation: true
            });

        t.modalRef.componentInstance.message = errorMessage;
        return
        //   t.modalRef
        //     .result.then((result) => {
        //       if (result) {
        //       }
        //     });
    }


}

