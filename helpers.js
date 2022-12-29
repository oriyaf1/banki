import { lists } from "./consts.js";
export const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const randomFirstName = () => {
    return randomItem(lists.firstName)
}
export const randomLastName = () => {
    return randomItem(lists.lastName)
}
export const randomAmount = () => {
    return randomInRange(-2000, 2000)
}
export const randomBalance = () => {
    return randomInRange(-100000, 100000)
}
export const randomAvatar = () => {
    return randomItem(lists.avatar)
}

export const randomItem = (list) => list[Math.floor(Math.random() * list.length)]

export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}