import { baseClass } from "./baseClass"
import Filter from '../assets/data/Filter.json'

export class directionClass extends baseClass {
    constructor(value: string){
        const tempDirection = Filter.filter_directions_list.find((direction:baseClass) => {
            return (direction.value === value);
        });

        super(tempDirection?.label, value);
    }
}
export class categoryClass extends baseClass {
    constructor(value: string){
        const tempCategoryLabel = Filter.filter_categories_list.find((category:baseClass) => {
            return category.value === value;
        });
        super(tempCategoryLabel?.label, value);
    }
}
export class sortByClass extends baseClass{
    "category": categoryClass;
    "direction": directionClass;
    constructor(category: categoryClass, direction: directionClass){
        const label = `${category.label}.${direction.label}`
        const value = `${category.value}.${direction.value}`
        super(label, value);
        this.category = category;
        this.direction = direction;
    }
}

export class filterClass {
    "sort_by": sortByClass;
    "include_adult": boolean;
    "page":number;
}