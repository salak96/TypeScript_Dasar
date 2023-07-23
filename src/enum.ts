export enum CustomerType {
    PLATINUM  = 2,   // HARUS ADA id & name atau bentuk string  "PLATINUM"
    REGULAR = 0,    // HARUS ADA id & name atau bentuk string  "REGULAR"
    GOLD = 1        // HARUS ADA id & name atau bentuk string  "GOLD"
}

export type Customer = {
    id: string,
    name: string,
    type: CustomerType
}