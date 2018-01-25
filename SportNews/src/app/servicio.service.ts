import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioService {

  constructor(private http:HttpClient) {
      setInterval(()=>{
        this.peticion();
      }, 3*1000);
  }
    peticion(num):Observable<any> {
      return this.http.get('https://newsapi.org/v2/everything?sources=marca&apiKey=2ffd355eb84949a89c8ec5f30020acc9&query=+betis&page=' + num);
    }

    peticionLigas():Observable<any> {
      return this.http.get('http://api.football-data.org/v1/competitions/?season=2017&apikey=14f83df897ba4993ab1c64c2aa460137');
    }

    peticionEquipos(id):Observable<any> {
      return this.http.get('http://api.football-data.org/v1/competitions/' + id + '?season=2017&apikey=14f83df897ba4993ab1c64c2aa460137');
    }
}
