import {HeroList} from "../components/HeroList.tsx";
export const DcPage = () => {
    const heroPublisher = 'DC Comics';
    return (
        <>
            <h1>DC Comics</h1>
            <hr/>

            <HeroList publiser={heroPublisher}/>
        </>
    );
};