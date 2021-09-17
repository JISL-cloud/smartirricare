import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { allowedFileExtensions, Attachment, UploadModel } from './upload.model';

@Component({
  selector: 'app-uploadconfiguration',
  templateUrl: './uploadconfiguration.component.html',
  styleUrls: ['./uploadconfiguration.component.css']
})
export class UploadconfigurationComponent implements OnInit {
  attachmentInfo: UploadModel = new UploadModel();
  //Atachment type array
  attachmentTypesArray: any;
  // attachments
  vendorAttachments: Attachment[] = [];
  // model to hold new attachment in the table footer.
  fileAttachmentModel = new Attachment();

  // stores attachment record ids of the existing files that are selected for deletion
  deletedAttachmentRecordIds: number[] = [];
  // stores existing attachment record that is being deleted. (this can be a new or existing attachment record)
  attachmentRecordBeingDeleted = new Attachment();
  // stores index of the attachment file being deleted. (this can be a new or existing attachment file)
  indexOfAttachedFileBeingRemoved: number | null = null;
  //Closed Result
  closeResult: string = ""

  constructor(private modalService: NgbModal, public router: Router, public toastr: ToastrService,) { }

  ngOnInit(): void {
  }


  // Dropped files
  public droppedFiles(files: NgxFileDropEntry[], index: number | null = null) {
    if (files.length > 0) {
      const droppedFile = files[0];
      // Is it a file?
      if (droppedFile.fileEntry.isFile && this.isFileAllowed(droppedFile.fileEntry.name)) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: any) => {
          if (files.length === 0) {
            return;
          }
          // Validation for same file name. Not allowing to add file with same name
          if (
            this.attachmentInfo.attachmentViewModels.some(
              X => X.fileName === file.name
            )
          ) {
            this.toastr.error('Estimate attachment with same name already exists.');
            return;
          }
          if (index !== null) {
            // attachement record already added to list
            const attachmentRecord = this.attachmentInfo.attachmentViewModels[
              index
            ];
            if (attachmentRecord) {
              attachmentRecord.fileName = file.name;
              attachmentRecord.file = file;
            }
          } else {
            // attachment record from footer
            this.fileAttachmentModel.file = file;
            this.fileAttachmentModel.fileName = file.name;
          }
        });
      } else {
        this.toastr.error('File format not supported');
      }
    }
  }

  // Check File extension
  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);
    if (undefined !== extension && null !== extension) {
      for (const ext of allowedFileExtensions) {
        if (ext === extension[0].toLowerCase()) {
          isFileAllowed = true;
        }
      }
    }
    return isFileAllowed;
  }


  openDeleteModal(template: TemplateRef<any>, index: number) {
    this.indexOfAttachedFileBeingRemoved = index;
    this.modalService.open(template, { size: 'sm' });
  }

  // check if attachement present
  isFooterAttachmentRecordPresent() {
    return (

      this.fileAttachmentModel.file !== null
    );
  }
  // add button click on attachments grid
  validateAndAddAttachmentRecord(): boolean {
    const copyFileAttachment = { ...this.fileAttachmentModel };
    this.attachmentInfo.attachmentViewModels.push(copyFileAttachment);
    // reset
    this.fileAttachmentModel = new Attachment();
    return true;

  }
  // show attachment record delete confirmation modal (delete file from table list)
  showAttachmentRecordDeleteConfirmation(irAttachment: Attachment, content:any) {
    this.attachmentRecordBeingDeleted = irAttachment;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // Attachment record delete confirm (delete file from table list)
  onAttachmentRecordDeleteConfirm() {
    this.attachmentInfo.attachmentViewModels.splice(
      this.attachmentInfo.attachmentViewModels.indexOf(
        this.attachmentRecordBeingDeleted
      ),
      1
    );
    this.modalService.dismissAll();
    // reset
    this.attachmentRecordBeingDeleted = new Attachment();
  }
  // Attachment record delete cancel (delete file from table list)
  onAtatchmentRecordDeleteCancel() {
    this.attachmentRecordBeingDeleted = new Attachment();
    this.modalService.dismissAll();
  }
  // Remove added file (from footer or table list)
  showAttachedFileRemoveConfirmation(index: number | null = null, content: any) {
    this.indexOfAttachedFileBeingRemoved = index;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // Remove confirmation modal (gets called on confirmation of deleting file from footer or table list)
  onAttachedFileRemoveConfirm() {
    if (this.indexOfAttachedFileBeingRemoved !== null) {
      const attachmentRecord = this.attachmentInfo.attachmentViewModels[
        this.indexOfAttachedFileBeingRemoved
      ];
      if (attachmentRecord) {
        attachmentRecord.file = null;
        attachmentRecord.fileName = '';
      }
    } else {
      this.fileAttachmentModel.file = null;
      this.fileAttachmentModel.fileName = '';
    }
    // reset index
    this.indexOfAttachedFileBeingRemoved = null;
    // hide modal
    this.modalService.dismissAll();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
