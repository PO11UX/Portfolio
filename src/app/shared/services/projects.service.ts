import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private dataUrl = 'assets/data/projects.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}


  getData(): Observable<any[]> { // Change the return type to any[]
    return this.http.get<any[]>(this.dataUrl);
  }

  getObjectById(id: number): Observable<any> {
    return this.getData().pipe(
      map((data) => data.find(item => item.id === id))
      
    );
  }
}