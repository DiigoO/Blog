import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public artigos = new Array<Artigo>();
  constructor(private http: Http, private zone :NgZone) { }

  ngOnInit(): void{
    console.log("OnInit");
    this.http.get('api/artigos')
    .subscribe(artigos =>{
      this.zone.run( () => {
        this.resultadoArtigos(artigos);
      });
    });
  }
  resultadoArtigos(artigos){
    console.log(artigos);
    this.artigos = JSON.parse(artigos._body);
  }
}
export class Artigo{
  id:number;
  titulo:string;
  resumo:string;
}
