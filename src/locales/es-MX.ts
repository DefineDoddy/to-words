import { LocaleConfig, LocaleInterface } from '../types';
export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Peso Mexicano',
      plural: 'Pesos Mexicanos',
      symbol: '$',
      fractionalUnit: {
        name: 'Centavo',
        plural: 'Centavos',
        symbol: '¢',
      },
    },
    texts: {
      and: 'Y',
      minus: 'Menos',
      only: '',
      point: 'Punto',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'Trillon' },
      { number: 1000000000000, value: 'Billon' },
      { number: 1000000, value: 'Millon' },
      { number: 1000, value: 'Mil' },
      { number: 900, value: 'Novecientos' },
      { number: 800, value: 'Ochocientos' },
      { number: 700, value: 'Setecientos' },
      { number: 600, value: 'Seiscientos' },
      { number: 500, value: 'Quinientos' },
      { number: 400, value: 'Cuatrocientos' },
      { number: 300, value: 'Trescientos' },
      { number: 200, value: 'Doscientos' },
      { number: 100, value: 'Ciento' },
      { number: 90, value: 'Noventa Y' },
      { number: 80, value: 'Ochenta Y' },
      { number: 70, value: 'Setenta Y' },
      { number: 60, value: 'Sesenta Y' },
      { number: 50, value: 'Cincuenta Y' },
      { number: 40, value: 'Cuarenta Y' },
      { number: 30, value: 'Treinta Y' },
      { number: 29, value: 'Veintinueve' },
      { number: 28, value: 'Veintiocho' },
      { number: 27, value: 'Veintisiete' },
      { number: 26, value: 'Veintiseis' },
      { number: 25, value: 'Veinticinco' },
      { number: 24, value: 'Veinticuatro' },
      { number: 23, value: 'Veintitrés' },
      { number: 22, value: 'Veintidos' },
      { number: 21, value: 'Veintiuno' },
      { number: 20, value: 'Veinte' },
      { number: 19, value: 'Diecinueve' },
      { number: 18, value: 'Dieciocho' },
      { number: 17, value: 'Dieciciete' },
      { number: 16, value: 'Dieciseis' },
      { number: 15, value: 'Quince' },
      { number: 14, value: 'Catorce' },
      { number: 13, value: 'Trece' },
      { number: 12, value: 'Doce' },
      { number: 11, value: 'Once' },
      { number: 10, value: 'Diez' },
      { number: 9, value: 'Nueve' },
      { number: 8, value: 'Ocho' },
      { number: 7, value: 'Siete' },
      { number: 6, value: 'Seis' },
      { number: 5, value: 'Cinco' },
      { number: 4, value: 'Cuatro' },
      { number: 3, value: 'Tres' },
      { number: 2, value: 'Dos' },
      { number: 1, value: 'Uno' },
      { number: 0, value: 'Cero' },
    ],
    ignoreOneForWords: [
      'Cien',
      'Ciento',
      'Doscientos',
      'Trescientos',
      'Cuatrocientos',
      'Quinientos',
      'Seiscientos',
      'Setecientos',
      'Ochocientos',
      'Novecientos',
      'Mil',
    ],
    pluralMark: 'es',
    pluralWords: ['Millon', 'Billon', 'Trillon'],
    exactWordsMapping: [
      { number: 100, value: 'Cien' },
      { number: 90, value: 'Noventa' },
      { number: 80, value: 'Ochenta' },
      { number: 70, value: 'Setenta' },
      { number: 60, value: 'Sesenta' },
      { number: 50, value: 'Cincuenta' },
      { number: 40, value: 'Cuarenta' },
      { number: 30, value: 'Treinta' },
      { number: 1, value: 'Un' },
    ],
  };
}
