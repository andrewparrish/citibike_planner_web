import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  baseUrl() {
    return { dev: "http://localhost:3000" };
  }
}
