import { ICart } from "../models/ICart";

export const setCountProduct = (arr: ICart[], item: ICart) => arr.map((item) => item.name).includes(item.name)
