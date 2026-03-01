// import YahooFinance from "yahoo-finance2";

// // On crée UNE instance globale
// const yf = new YahooFinance();

// export const getStockQuote = async (symbol) => {
//     if (!symbol) throw new Error("Symbole manquant");

//     try {
//         const quote = await yf.quote(symbol.toUpperCase());

//         if (!quote || quote.regularMarketPrice === undefined) {
//             throw new Error("Symbole invalide ou données indisponibles");
//         }

//         return {
//             symbol: quote.symbol,
//             price: quote.regularMarketPrice,
//             currency: quote.currency,
//             change: quote.regularMarketChange,
//             changePercent: quote.regularMarketChangePercent,
//             marketTime: quote.regularMarketTime
//         };

//     } catch (err) {
//         console.error("Erreur Yahoo Finance détaillée :", err);
//         throw new Error("Impossible de récupérer les données de l'action");
//     }
// };

import YahooFinance from "yahoo-finance2";
const yf = new YahooFinance();

export const getStockQuote = async (query) => {
    if (!query) throw new Error("Recherche vide");

    try {
        // 1️⃣ Recherche par nom
        const searchResult = await yf.search(query);

        if (!searchResult.quotes || searchResult.quotes.length === 0) {
            throw new Error("Aucune action trouvée");
        }

        // 2️⃣ On prend le premier résultat
        const symbol = searchResult.quotes[0].symbol;

        // 3️⃣ On récupère le cours
        const quote = await yf.quote(symbol);

        return {
            name: searchResult.quotes[0].shortname,
            symbol: quote.symbol,
            price: quote.regularMarketPrice,
            currency: quote.currency,
            change: quote.regularMarketChange,
            changePercent: quote.regularMarketChangePercent
        };

    } catch (err) {
        console.error(err);
        throw new Error("Impossible de récupérer les données de l'action");
    }
};
export default getStockQuote;