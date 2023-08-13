import { nanoid } from "nanoid";

export const createId = (prefix?: string) => {
    return prefix ? `${prefix}_${nanoid(21)}` : nanoid(21);
}