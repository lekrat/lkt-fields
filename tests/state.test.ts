import {StateConfig} from "../src/types/StateConfig";
import {StateConfigValue} from "../src/value-objects/StateConfigValue";

const textConfig: StateConfig = {
  reset: true,
  warn: true,
  info: true,
  link: true,
  add: true,
  password: true,
  mandatory: true,
  error: true,
  open: true
}

const textConfig2: StateConfig = {
  reset: true,
  warn: false,
  info: true,
  link: false,
  add: false,
  password: false,
  mandatory: true,
  error: false,
  open: false
}




test('state config', () => {
  const value = new StateConfigValue(textConfig);

  const t = JSON.stringify(value.enabled());
  expect(t).toEqual(JSON.stringify(Object.keys(textConfig)))
});

test('state config 2', () => {
  const value = new StateConfigValue(textConfig2);

  const t = JSON.stringify(value.enabled());
  expect(t).toEqual(JSON.stringify(['reset', 'info', 'mandatory']))
});

test('state config 3 (disabled)', () => {
  const value = new StateConfigValue(textConfig2, true);

  const t = JSON.stringify(value.enabled());
  expect(t).toEqual(JSON.stringify(['info', 'mandatory']))
});