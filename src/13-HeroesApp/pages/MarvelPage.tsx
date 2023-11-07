import {HeroList} from "../components/HeroList.tsx";

export const MarvelPage = () => {
    const heroPublisher = 'Marvel Comics';

    return (
        <>
            <h1>Marvel Comics</h1>
            <hr/>

            <HeroList publiser={heroPublisher}/>
        </>
    );
};