import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ServicioService {
  private pj = new Subject<any>();
  public pj$ = this.pj.asObservable();

  private url = new Subject<any>();
  public url$ = this.url.asObservable();

  setvariable(value) {
    this.pj.next(value);
  }

  seturl(value){
    this.url.next(value);
  }

  constructor(private http:HttpClient) {}

  peticion(categoria, num):Observable<any> {
    return this.http.get('https://www.giantbomb.com/api/' + categoria + '/?api_key=81972e871e0e14b1af4b96d10089c8afd7d2745b&limit=20&format=json&offset=' + num);
  }

  buscarPersonaje(id):Observable<any> {
    return this.http.get('https://www.giantbomb.com/api/character/' + id + '/?api_key=81972e871e0e14b1af4b96d10089c8afd7d2745b&format=json');
  }

}
