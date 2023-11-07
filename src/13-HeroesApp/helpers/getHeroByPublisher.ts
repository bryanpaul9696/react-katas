import {heroes} from "../data/heroes.ts";
import {Heroe} from "../models";

export const getHeroByPublisher = (publisher: string): Heroe[] => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher) as Heroe[];
}