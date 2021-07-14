export class CurrentUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    auth_token?: string;
    permissions: string[] = [];
    expiresIn?: number;
    role?: string;
    photo?:string;
}

export class ChangePasswordModel {
    oldPassword = '';
    newPassword = '';
    confirmpassword = '';
}

export class ForgotPasswordModel {
    email = '';
}

export class ResetPasswordModel {
    email = '';
    userid = '';
    password = '';
    confirmpassword = '';
    code = '';
    actionType = '';
}
