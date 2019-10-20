import { CursorPipe } from './cursor.pipe';

describe('Cursor', () => {
  it('create an instance', () => {
    const pipe = new CursorPipe();
    expect(pipe).toBeTruthy();
  });
});
