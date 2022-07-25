interface IOption {
    value: string | number | IOption[],
    label: string,
    data?: object
}