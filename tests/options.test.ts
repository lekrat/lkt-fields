import {OptionsValue} from "../src/value-objects/OptionsValue";

const optionsHaystack = [
  {value: 1, label: 'One'},
  {value: 2, label: 'Two'},
  {value: 3, label: 'Three'},
  {value: 4, label: 'Four'},
  {value: 5, label: 'Five'},
  {value: 6, label: 'Six'},
  {value: 7, label: 'Seven'},
  {value: 8, label: 'Eight'},
  {value: 9, label: 'Nine'},
];

const optionsHaystackFromApi = [
  {value: 1, label: 'OneApi'},
  {value: 2, label: 'TwoApi'},
  {value: 3, label: 'ThreeApi'},
  {value: 4, label: 'FourApi'},
  {value: 5, label: 'FiveApi'},
  {value: 6, label: 'SixApi'},
  {value: 7, label: 'SevenApi'},
  {value: 8, label: 'EightApi'},
  {value: 9, label: 'NineApi'},
];


test('basic options', () => {
  const value = new OptionsValue(optionsHaystack);

  const t = JSON.stringify(value.filter('One'));
  expect(t).toEqual(JSON.stringify([{value: 1, label: 'One'}]))
});

test('basic options + API data', () => {
  const value = new OptionsValue(optionsHaystack);
  value.receiveOptions(optionsHaystackFromApi);

  const t = JSON.stringify(value.filter('One'));
  expect(t).toEqual(JSON.stringify([{value: 1, label: 'One'}, {value: 1, label: 'OneApi'}]))
});

test('basic options + multiple API data flow', () => {
  const value = new OptionsValue(optionsHaystack);
  value.receiveOptions([...optionsHaystackFromApi]);
  value.receiveOptions([...optionsHaystackFromApi]);
  value.receiveOptions([...optionsHaystackFromApi]);
  value.receiveOptions([...optionsHaystack]);

  const t = JSON.stringify(value.filter('One'));
  expect(t).toEqual(JSON.stringify([{value: 1, label: 'One'}, {value: 1, label: 'OneApi'}]))
});