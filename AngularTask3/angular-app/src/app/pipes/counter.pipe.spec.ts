import { CounterPipe } from './counter.pipe';

describe('CounterPipe', () => {
  let pipe : CounterPipe;
  beforeEach(()=>{
     pipe = new CounterPipe();
  })


  it('counter pipe', () => {
    expect(pipe.transform('Angular')).toBe('It is a Pipe,Angular');
  });
});