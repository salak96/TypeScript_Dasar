export type ID = string | number; // Tipe data boleh di ubah string atau number

export type Category = {
    id : ID;    
    name : string;
}

export type Product = {
    id : ID;
    name : string;
    price : number;
    category : Category;
}