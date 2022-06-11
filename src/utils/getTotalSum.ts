import { ICart } from "../models/ICart";

export const getTotalSum = (arr: ICart[]) => arr.map((item: ICart) => item.price).reduce((item, total) => total += item, 0)
