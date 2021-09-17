export class UploadModel {
    public attachmentViewModels: Attachment[] = [];
}

export class Attachment {
    public filePath = '';
    public fileName = '';
    public file: File | null = null;
}

export const allowedFileExtensions = [
    '.xls',
    '.xlsx'
   ];