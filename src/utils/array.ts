export const concatArrayOfStringToSingleString = (
    stringArray: Array<string>,
    joinChar: string = " "): string =>
    stringArray.reduce((acc: string, item: string, index: number) => {
        if (index === 0) {
            return acc + item
        }
        return acc + joinChar + item;
    }, " ");