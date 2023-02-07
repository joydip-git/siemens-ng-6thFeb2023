export class Product {
    /*
    private _id: number;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(_id: number, _name: string, _price: number, _description: string) {
        this._name = _name
        this._id = _id
        this._price = _price
        this._description = _description
    }
    */
    constructor(private _id: number, private _name: string, private _price: number, private _description: string) {

    }

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
    print() {
        return `${this._name}, ${this._price}, ${this._description}`
    }
}