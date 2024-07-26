import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  imports:[CommonModule],
  styleUrl: './about-us.component.css',
  
})
export class AboutUsComponent {

  integrantes = [
    { nombre: 'Lolo Diaz', descripcion: 'Batería', foto: 'lolo.jpg',enlace:"https://www.instagram.com/lolo.diazz/" },
    { nombre: 'Dario Martinez', descripcion: 'Teclado', foto: 'dario.jpg',enlace:"https://www.instagram.com/dariomp.music/" },
    { nombre: 'Alfonso Valladares', descripcion: 'Percusión y Vocalista', foto: 'valladares.jpg',enlace:"https://www.instagram.com/avalladaresza/" },
    { nombre: 'Joselu Gavira', descripcion: 'Guitarra y Vocalista', foto: 'selu.jpg',enlace:"https://www.instagram.com/joselu_6d/" }
  ];

  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: true };
}
