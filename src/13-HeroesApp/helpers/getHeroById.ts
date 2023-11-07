import {heroes} from "../data/heroes.ts";
import {Heroe} from "../models";

export const getHeroById = (id: string): Heroe => {
    return heroes.find(heroe => heroe.id == id) as Heroe;
}