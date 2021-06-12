import { Injectable } from '@angular/core';
import { Model } from '../api/models/model';
import { RequestService } from '../api/request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  public user = null;
  public errorsLogin : string =  '';
  public userModel : Model;


  constructor(
    private http: HttpClient,
    private router: Router,
    public navCtrl : NavController,
    public request : RequestService

  ) { 
    this.userModel = new Model('User',request)

  }



  async login(data){
    this.errorsLogin = '';
    return this.http.post(`${environment.server_url}/login`,data).subscribe(async data => {
      console.log(data);
      if(data['status'] &&  data['status'] == 'success'){
        await this.saveData(data)
        await this.getUser();
        this.redirect();
      }else{
        this.errorsLogin = 'Error de credenciales, intente nuevamente';
      }
    },
    error => {
      this.errorsLogin = error.message;// 'Error de credenciales, intente nuevamente';
    });
  }

  async setUser(user){
    this.user = user;
    await this.saveUser();
  }

  async saveUser(){
    await localStorage.setItem('User', JSON.stringify( this.user ));
  }

  async saveData(data){
      await localStorage.setItem('isAuthenticated','true');
      await localStorage.setItem('User', JSON.stringify( data['User'] ));
      await localStorage.setItem('token',data['api_token'])
  }

  async removeData(){
    await localStorage.setItem('isAuthenticated','true');
    await localStorage.removeItem('User');
    await localStorage.removeItem('token');
    this.user = null;
  }

  isAuthenticated(){
    return localStorage.getItem('isAuthenticated') == 'true';
  }

  updateUser(user){
    localStorage.setItem('User', user);
    return this.getUser();
  }

  async getUser(){
    return this.user = await JSON.parse(localStorage.getItem('User')) ?? null;
  }

  async redirect() {
    await this.getUser();

    if( ! this.user)
      return;

    if(this.user['role'] == 'admin'){
        this.router.navigate(['admin_home']);
    }
    else if( this.user['role'] == 'user' ){
      this.router.navigate(['/']);
    }
  }

  async logout(){
    await this.removeData();
    //this.router.navigate(['login']);
    
    this.navCtrl.navigateRoot('login');
  }

  isAdmin(){
    this.user.role == 'admin';
  }


  async updateUserApi(){
    if(this.user){
      await this.userModel.api_function('dataGlobal').subscribe(
        async response => {
          if(response['status'] == 'success'){
            this.user = response['data'];
            await this.saveUser();
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
