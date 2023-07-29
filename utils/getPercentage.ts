export const getPercentage = (regular: number | string, sale: number | string) => {
    const hundredth = Number(regular) / 100;
    const remainder = Number(regular) - Number(sale);
    const percent = remainder / hundredth;
    return Math.ceil(percent);
};
