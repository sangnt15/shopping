export enum PRODUCT_MAPPING_FIELD{
    id = "id",
    name = "name",
    price = "price",
    description = "description"
}
export class product{
    id : number;
    name : string;
    price : number;
    description : string;
    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.price = params.price;
        this.description = params.description;
    }
}