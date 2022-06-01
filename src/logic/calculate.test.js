import calculate from './calculate';

it('calculates correctly', () => {
  expect(calculate({
    total: '234',
    next: '34',
    operation: null,
  }, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
