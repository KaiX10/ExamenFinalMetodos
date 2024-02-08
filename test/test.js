const { capitalizeFirstLetter, reverseString } = require('../index');

describe('Funciones de manipulación de cadenas', () => {
  describe('Función capitalizeFirstLetter', () => {
    test('debe capitalizar la primera letra de una cadena', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    test('no debe cambiar una cadena vacía', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });
  });

  describe('Función reverseString', () => {
    test('debe invertir una cadena correctamente', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('no debe cambiar una cadena vacía', () => {
      expect(reverseString('')).toBe('');
    });
  });
});
