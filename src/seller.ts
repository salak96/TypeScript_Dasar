export interface Seller {
    id      : number;
    name    : string;
    address?: string;
    readonly nib: string;   // data read only tidak bisa di ubah
    readonly npwp: string;
}