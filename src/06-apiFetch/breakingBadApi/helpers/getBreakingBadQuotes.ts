export const getBreakingBadQuotes = async (counter: number) => {
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const resp = await fetch(url);
    if (!url || url.length == 0) {
        throw new Error("La url no debe ser valida")
    }
    return resp.json();

}