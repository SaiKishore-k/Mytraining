import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  private count =0;
  private subject : BehaviorSubject<number>;
  constructor() { 
    this.subject = new BehaviorSubject(this.count);
  }

  public getCount(): Observable<number>{
    return this.subject.asObservable();
  }

  public increment() : void {
    this.count++;
    this.show();
  }
  public decrement() : void{
    this.count--;
    this.show();
  }
  public reset(newCount : number): void{
    this.count = newCount;
    this.show();
  }
  public show(): void{
    this.subject.next(this.count);
  }

}
