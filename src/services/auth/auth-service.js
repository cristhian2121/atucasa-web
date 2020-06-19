/* File from product services */
import apiBussines from "./../api";

/* Request for clients autenticate */
export const LoginService = (dataAuth) => {
    return apiBussines.post('/auth/', dataAuth)
    .then(response => {
      window.localStorage.setItem('username', response.data.username)
      window.localStorage.setItem('full_name', response.data.first_name + ' ' + response.data.last_name)
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('group', response.data.groups.length ? response.data.groups[0] : '' )
      window.localStorage.setItem('store', response.data.store )
      apiBussines.defaults.headers.common.Authorization = 'JWT ' + response.data.token /** estructura del token */
    })
    .catch(error => {
      return error.response.data
    })
    
}