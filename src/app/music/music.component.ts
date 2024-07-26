import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  videos: { url: string}[] = [];


  ngOnInit(): void {
    this.videos = [
      {
        
        url: '../../assets/video/Snapinsta.app_video_An_CtA-och3cBayJU4sK1s1_ykScP8g2sqFh_A2iGeHmd7TqNjb4kyv9UG5I7nraKoSe6LgOQkqFTVJgaQJ0qgc.mp4'
      },
      {
        
        url: '../../assets/video/Snapinsta.app_video_9D4999D72030CA97278D769920EC1385_video_dashinit.mp4'
      },
      {
        
        url: '../../assets/video/video3.mp4'
      },
      {
        
        url: '../../assets/video/video4.mp4'
      },{
        
        url: '../../assets/video/video5.mp4'
      },{
        
        url: '../../assets/video/video7.mp4'
      },
      {
        
        url: '../../assets/video/video8.mp4'
      },{
        
        url: '../../assets/video/video9.mp4'
      },
      {
        
        url: '../../assets/video/video10.mp4'
      },
      {
        
        url: '../../assets/video/video11.mp4'
      },{
        
        url: '../../assets/video/video12.mp4'
      },{
        
        url: '../../assets/video/video13.mp4'
      },{
        
        url: '../../assets/video/video14.mp4'
      },{
        
        url: '../../assets/video/video15.mp4'
      },{
        
        url: '../../assets/video/video16.mp4'
      }

      
    ];
  }
}
