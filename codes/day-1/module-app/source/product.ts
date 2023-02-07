export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _description: string;

    public get id(): number {
        return this._id
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    constructor(id: number, name: string, price: number, description: string) {
        this._name = name
        this._id = id
        this._price = price
        this._description = description
    }

    print() {
        return `${this._name}, ${this._price}, ${this._description}`
    }
}