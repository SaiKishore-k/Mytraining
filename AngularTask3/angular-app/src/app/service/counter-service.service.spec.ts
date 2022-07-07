import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';

import { CounterServiceService } from './counter-service.service';

describe('CounterServiceService', () => {
  let service: CounterServiceService;

  function counterMethod(count : number): void{
    let counter : number | undefined;
    service.getCount().pipe(first()).subscribe((c)=>{
      counter=c;
    });
    expect(counter).toBe(count);
  }

  beforeEach(() => {
    service = new CounterServiceService();
  });
  it('returns the count',()=>{
    counterMethod(0);
  })
  it('increments the count', () => {
    service.increment();
    counterMethod(1);
  });

  it('decrements the count', () => {
    service.decrement();
    counterMethod(-1);
  });

  it('resets the count', () => {
    const newCount = 100;
    service.reset(newCount);
    counterMethod(newCount);
  });

});
