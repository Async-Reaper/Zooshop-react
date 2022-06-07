import { ICart } from "../models/ICart";

export const getTotalSum = (arr: ICart[]) => {
    return arr.map((item: ICart) => item.price *= item.count).reduce((item, total) => total += item, 0)
}