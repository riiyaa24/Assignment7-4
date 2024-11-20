import { Component } from '@angular/core';

@Component({
  selector: 'app-infosystems',
  standalone: true,
  imports: [],
  templateUrl: './infosystems.component.html',
  styleUrl: './infosystems.component.css'
})
export class InfosystemsComponent 
{
  public Information : string = "";
  public information : string = "";

  public upper()
  {
    this.Information = "MARVELLOUS INFOSYSTEMS";
  }

  public lower()
  {
    this.information = "marvellous infosystems";
  }
}
