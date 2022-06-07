import { ICart } from "../models/ICart";

export const getTotalSum = (arr: ICart[]) => {
    const price = arr.map((item: ICart) => item.price *= item.count)
    return price.reduce((item, total) => total += item, 0)
}