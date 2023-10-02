import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private dataUrl = 'assets/data/skills.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Data>(this.dataUrl);
  }
}