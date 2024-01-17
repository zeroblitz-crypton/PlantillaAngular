import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plantillaAdmin';
  rutas=[
    {icon:'now-ui-icons design_app',
     link:'/',
     name:'Dashboard'
    },
    {icon:'now-ui-icons education_atom',
     link:'/icons',
     name:'ICONS'
    },
    {icon:'now-ui-icons location_map-big',
     link:'/maps',
     name:'MAPS'
    },
    {icon:'now-ui-icons ui-1_bell-53',
     link:'/notifications',
     name:'NOTIFICATIONS'
    },
    {icon:'now-ui-icons users_single-02',
     link:'/user',
     name:'USER'
    },
    {icon:'now-ui-icons design_bullet-list-67',
     link:'/table',
     name:'TABLE'
    },
    {icon:'now-ui-icons text_caps-small',
     link:'/typography',
     name:'TYPOGRAPHY'
    },
  ]
  
  constructor(private router: Router){
    console.log(this.rutas);
    
  }

  redirigir(link:any){
    this.router.navigate([link]);
  }
}
