
 export const API = {
    // apiUrl: 'http://54.187.210.102:8080/royallife/api/rest/'
    apiUrl: 'http://localhost:9090/api/rest/',
    oauthUrl: 'http://localhost:9090/oauth/token'

  };

export const URLS = {
    
    userCommitURL: API.apiUrl + 'user/commit',
     userAddCommitUrl:  API.apiUrl + 'user/addCommit',
     userFriendsUrl: API.apiUrl + 'user/friend/all',
     userLoginUrl:  API.oauthUrl,
     userRegisterUrl:  API.apiUrl + 'public/register',
     userProfileUrl:  API.apiUrl + 'user/profile',
     userUpdateProfileUrl:  API.apiUrl + 'user/updateProfile',
     userUpdatePasswordUrl:  API.apiUrl + 'user/updatePassword',
     userGetAllBankDetailsUrl:  API.apiUrl + 'user/bank/all',
     userAddBankDetailsUrl:  API.apiUrl + 'user/addBank',
     userdeleteBankDetailsUrl:  API.apiUrl + 'user/deleteBank/',
     userdefaultBankDetailsUrl:  API.apiUrl + 'user/setDefaultBank/',
     userUpdateBankDetailsUrl:  API.apiUrl + 'user/updateBank'
  };

