import { Injectable } from "@angular/core";
import { Day } from "../types/Day";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DayService {
    constructor(private http: HttpClient) {}

    // В js/ts принято использовать camelCase для названий методов и переменных
    public GetDay(date: Date): Observable<Day> {
        /*
        * 1. Не стоит использовать globalThis, так как это нестандартное свойство и может привести к коллизиям. Просто создай константу serverAddress и импортируй её везде где тебе нужно
        * 2. Касательно запроса все хорошо, но можно лучше. Можно создать отдельный сервис для работы с http запросами (RestService например) и вынести туда логику работы с сервером.
        *    В нем будут методы типа get(endpoint: string, body: T) и т.д. Внутри себя они будут работать с HttpClient и возвращать Observable<T>.
        *    Таким образом ты сможешь избавиться от дублирования кода и вся логика по запросам будет инкапсулирована в одном месте
        * 3. Можно создать класс для работы с датами, который будет содержать методы для форматирования даты и т.д.
        * */
        const url: string = `${globalThis.serverAddress}api/getday?date=${globalThis.formatDate(date)}`;
     
        return this.http.get<Day>(url);
    }
}
