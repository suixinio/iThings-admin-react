export const TOKENKEY = 'iThings-token';

export const GUIDKEY = 'iThings-guid';

export const SETTOKENKEY = 'iThings-set-token';

export const iThingsSetToken = 'iThings-set-token';

export const deviceType = [
  { label: '设备', value: 1 },
  { label: '网关', value: 2 },
  { label: '子设备', value: 3 },
];

export const netType = [
  { label: '其他', value: 1 },
  { label: 'wi-fi', value: 2 },
  { label: '2G/3G/4G', value: 3 },
  { label: '5G', value: 4 },
  { label: 'BLE', value: 5 },
  { label: 'LoRaWAN', value: 6 },
];

export const authMode = [
  { label: '账密认证', value: 1 },
  { label: '秘钥认证', value: 2 },
];

export const autoRegister = [
  { label: '关闭', value: 1 },
  { label: '打开', value: 2 },
  { label: '打开并自动创建设备', value: 2 },
];
