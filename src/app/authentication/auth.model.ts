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
    dateTime:string =""
}

export class AddEditUserViewModel {
    UserId: string="";
    UserName: string="";
    mobileNo: string="";
    firstName: string="";
    lastName: string="";
    roleId: string="";
    isRestrictedUser: boolean = false; 
    UserNo:number=0;
    isUserNoEdit:boolean = false;
    password:string=""
    confirmPassword:string=""

}

export interface AspNetRoles {
        Id: string;
        Name: string;
        userType: boolean | null;
        concurrencyStamp: string;
        normalizedName: string;
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
