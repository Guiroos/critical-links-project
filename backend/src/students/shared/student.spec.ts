import { Student } from './student';

describe('Student', () => {
  it('should be defined', () => {
    expect(new Student()).toBeDefined();
  });
});
