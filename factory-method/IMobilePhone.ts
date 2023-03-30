interface IMobilePhone {
    call(phoneNumber: number | string): void;
    receive(): void;
}

export default IMobilePhone;