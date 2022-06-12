import { ICart } from "../models/ICart";

export const getTotalCountProduct = (arr: ICart[]): number => arr.map(item => item.count).reduce((item, total) => total += item, 0)