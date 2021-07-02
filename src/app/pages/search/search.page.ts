import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  showCancelButton = false;
  model: string;
  function: string;
  multiple: boolean;
  public modelService : Model;
  minLenght: any;
  list : any = [];
  listSelect = [];

  constructor(
    requestService : RequestService,
    navParams: NavParams,
    public viewCtrl: ModalController,

  ) { 

    this.showCancelButton = navParams.get('cancellable') ?? false ;
    this.model = navParams.get('model');
    this.function = navParams.get('function')
    this.multiple = navParams.get('multiple') ?? false;
    this.minLenght = navParams.get('multiple') ?? 2 ;
    this.listSelect = navParams.get('listSelect') ?? []

    this.modelService = new Model(this.model,requestService);
  }

  ngOnInit() {
  }

  onInput(event){
    let text = event.target.value;
    if(text.lenght <= this.minLenght){
      return;
    }

    this.modelService.api_function(this.function,{text : text}).subscribe(response => {
      console.log('response function' , response);
      if(response['status'] == 'success'){
        this.list = response['data']
      }
    })

    console.log('onInput',event.target.value);
  }

  onCancel(event){
    console.log('onCancel');
  }

  select(item ){
    if(this.multiple){
      //this.addOrRemove(item);
      this.addItem(item)
    }else{
      
        this.viewCtrl.dismiss(
          {
            item : item,
          }
        );
      
    }
  }


  finalize(){
    this.viewCtrl.dismiss(
      {
        items : this.listSelect,
      }
    );
  }

  addItem(item){
    console.log(item);
    let inList = this.findList(item.id);

    if(! inList)
      this.listSelect.push(item)

    let index = this.list.findIndex(i => i['id'] === item.id);
    if(index >= 0)
      this.list.splice(index, 1);
    
  }

  removeItem(item){
    let index = this.findIndexList(item.id);
    if(index >= 0)
      this.listSelect.splice(index, 1);

    let inList = this.list.find(i => i['id'] === item.d);

    if(! inList)
      this.list.push(item)
  }

  addOrRemove(item){
    let inList = this.findList(item.id);

    if(! inList){
      this.listSelect.push(item)
    }else{
      let index = this.findIndexList(item.id);
      if(index >= 0)
        this.listSelect.splice(index, 1);
    }

  }

  findList(id){
    return this.listSelect.find(item => item['id'] === id);
  }

  findIndexList(id){
    return this.listSelect.findIndex(item => item['id'] === id);
  }

  inList(id){
    return this.findList(id) ? true : false;
  }

  getColor(id){
    return this.inList(id) ?  'success' : '';
  }
}
