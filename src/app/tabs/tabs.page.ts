import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  // Array das tabs, se for criar mais so adicionar aqui
  public tabsters: Array<any> = [
    {tab:'tab1', icon:'home-outline',label:'Home'},
    {tab:'tab2', icon:'gift-outline',label:'Resgate de Pontos'},
    {tab:'tab3', icon:'wallet-outline',label:'Transferência'}
  ]
  constructor() {}

}
