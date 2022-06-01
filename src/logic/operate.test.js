import operate from './operate';

it('adds 1 + 2 = 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});
