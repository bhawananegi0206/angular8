import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../modal/Message';
import { Observable } from 'rxjs';
const localUrl = 'assets/data/employee.json';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDetailsService {
    constructor(private http: HttpClient) {
    }
     executeEmployeeDetailService() {
        return this.http.get<MessageModel>(localUrl);
    }
}