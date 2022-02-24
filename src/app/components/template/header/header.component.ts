import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  busca = "Busca";
  titleApp = "MagaNets";
  city = "Cidade: São Paulo-SP";
  callCenter = "Central de Atendimento";
  wishlist = "Lista de Desejos";

  constructor() { }

}
