import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModelImage } from 'src/app/api/models/modelImage';
import { SearchPage } from '../../search/search.page';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public serviceTeam : Model
  public serviceImageCoverPage : ModelImage;
  public photoService : ModelImage;
  public team : any;
  private id : any;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    navParams: NavParams,
    public modalController: ModalController,

  ) {
    //this.serviceTeam.setModel('Team');
    this.serviceTeam = new Model('Team',request);

    this.photoService = new ModelImage(request,viewCtrl);
    this.photoService.setAspectRatioCrop('1 / 1');

    this.serviceImageCoverPage = new ModelImage(request,viewCtrl);
    this.serviceImageCoverPage.init('images/team/cover_page/',false);
    this.serviceImageCoverPage.setAspectRatioCrop('16 / 9')

    this.id = navParams.get('id');
    this.photoService.init('images/team/',true);
   }

  ngOnInit() {
    this.initObject()
  }

  initObject(){
    this.team = { 
      name : '',
      shield_id:null,
      cover_page_id:null,
      admins : []
    };

    if(this.id){
      this.serviceTeam.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.team = data['Team'];
          this.photoService.setImage(this.team.shield);
          this.serviceImageCoverPage.setImage(this.team.cover_page);
        }
      })
    }
  }

  submit(){

    if(!this.photoService.isLoadPthoto()){
      this.saveCoverPage();
      return;
    }
      this.photoService.uploadImage().subscribe(data=>{
        if(data['status'] == 'success'){
          let image = data['Image'];
          this.team.shield_id = image.id;
        }
        this.saveCoverPage();
        console.log('save image')
      },
      error => {
        this.dialogService.showToast('Error al subir escudo','Error','danger');
        this.saveCoverPage();
      });
   

  }

  saveCoverPage(){
    if(!this.serviceImageCoverPage.isLoadPthoto()){
      this.saveTeam();
      return;
    }
    this.serviceImageCoverPage.uploadImage().subscribe( data => {
      if(data['status'] == 'success'){
        let image = data['Image'];
        this.team.cover_page_id = image.id;
      }
      this.saveTeam()
    },
    error => {
      this.dialogService.showToast('Error al subir Portada','Error','danger');
      this.saveTeam();
    })
  }

  saveTeam(){
    if(this.team.id){
      this.serviceTeam.api_update(this.team).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          let team = data['Team']
          this.dismiss(team);
        }
      });

    }else{
      this.serviceTeam.api_create(this.team).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Team'])
        }
    })
    }
  }

  dismiss(team) {
    this.viewCtrl.dismiss(
      {
        team : team,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  async addAdmins(e){
    e.preventDefault();
    console.log('Add admins');

    const modal = await this.modalController.create({
      component: SearchPage ,
      componentProps: { 
        cancellable: false,
        model : 'User',
        function : 'searchUser',
        multiple : true
      }
    });

    modal.onDidDismiss().then(data=>{
      const list = data.data['items'];
      console.log('users_select' , list);
      this.team.admins = list;
    })

    return await modal.present();
  }

}
