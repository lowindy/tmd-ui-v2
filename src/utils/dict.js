export function sourcesType() {
  return [
    {
      label: '急诊',
      value: 'JZ',
    },
    {
      label: '门诊',
      value: 'MZ',
    },
    {
      label: '住院',
      value: 'ZY',
    },
    {
      label: '体检',
      value: 'TJ',
    },
  ];
}
export function orderType() {
  return [
    {
      label: '最低',
      value: 1000,
    },
    {
      label: '低',
      value: 500,
    },
    {
      label: '普通',
      value: 100,
    },
    {
      label: '高',
      value: 50,
    },
    {
      label: '最高',
      value: 1,
    },
  ];
}
