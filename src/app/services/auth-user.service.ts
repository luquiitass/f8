import { Injectable } from '@angular/core';
import { Model } from '../api/models/model';
import { RequestService } from '../api/request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  public user = null;
  public errorsLogin : string =  '';


  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
  }



  login(data){
    this.errorsLogin = '';
    return this.http.post(`${environment.server_url}/login`,data).subscribe(data => {
      console.log(data);
      if(data['status'] &&  data['status'] == 'success'){
        this.saveData(data)
        this.getUser();
        this.redirect();
      }else{
        this.errorsLogin = 'Error de credenciales, intente nuevamente';
      }
    },
    error => {
      this.errorsLogin = error.message;// 'Error de credenciales, intente nuevamente';
    });
  }

  saveData(data){
      localStorage.setItem('isAuthenticated','true');
      localStorage.setItem('User', JSON.stringify( data['User'] ));
      localStorage.setItem('token',data['api_token'])
  }

  removeData(){
    localStorage.setItem('isAuthenticated','true');
    localStorage.removeItem('User');
    localStorage.removeItem('token');
    this.user = null;
  }

  isAuthenticated(){
    return localStorage.getItem('isAuthenticated') == 'true';
  }

  updateUser(user){
    localStorage.setItem('User', user);
    return this.getUser();
  }

  getUser(){
    return this.user = JSON.parse(localStorage.getItem('User')) ?? null;
  }

  redirect() {
    this.getUser();

    if( ! this.user)
      return;

    if(this.user['role'] == 'admin'){
        this.router.navigate(['admin_home']);
    }
    else if( this.user['role'] == 'user' ){
      this.router.navigate(['/']);
    }
  }

  logout(){
    this.removeData();
    this.router.navigate(['login']);
  }

}
