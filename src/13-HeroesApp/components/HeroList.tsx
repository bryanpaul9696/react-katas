import {useMemo} from "react";
import {getHeroByPublisher} from "../helpers/getHeroByPublisher.ts";
import {HeroeCard} from "./HeroeCard.tsx";

export const HeroList = ({publiser = ""}) => {
    const heroes = useMemo(() => getHeroByPublisher(publiser), [publiser]);


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroeCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    );
};