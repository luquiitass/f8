import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/api/request.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-notificatio-selected',
  templateUrl: './notificatio-selected.component.html',
  styleUrls: ['./notificatio-selected.component.scss'],
})
export class NotificatioSelectedComponent implements OnInit {

  @Input('object') object
  @Input('table_name') table_name
  @Input('table_id') table_id

  public favoriteModel : Model;


  constructor(
    public requesService : RequestService,

  ) {
    this.favoriteModel = new Model('Favorite',requesService)

   }

  ngOnInit() {}

  toggleFavorite(){
    if(this.object){
      if(this.isFavorite()){

        this.favoriteModel.api_delete(this.object.favorite.id).subscribe(
          response => {
            this.object.favorite = null
            console.log(response)
          },error => {
            console.error(error)
          }
        )

      }else{

        let parms = {
          table_id : this.table_id,
          table_name : this.table_name
        }

        this.favoriteModel.api_function('addFavorite',parms).subscribe(
          response => {
            if(response['status'] == 'success'){
              this.object.favorite = response['data'];
            }
            
          },error => {
            console.error(error)
          }
        )

      }
    }
   }

   isFavorite(){
     return this.object && this.object.favorite  ? true : false;
   }

  getNameIcon(){
    return this.isFavorite() ? 'notifications-off-outline' : 'notifications-outline' ;
  }
}
