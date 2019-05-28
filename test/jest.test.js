test('Devo conhecer as principais assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com Objetos', () => {
  const obj = { name: 'Israel', mail: 'Israel@gmail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Israel');
  expect(obj.name).toBe('Israel');

  const obj2 = { name: 'Israel', mail: 'Israel@gmail.com' };
  expect(obj).toEqual(obj2);
  expect(obj.name).toBe(obj2.name);
});
