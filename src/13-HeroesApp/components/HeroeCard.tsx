import {Link} from "react-router-dom";
import {Heroe} from "../models";

export const HeroeCard = (hero: Heroe) => {

    const heroImageUrl = `/assets/13-HeroesApp/${hero.id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={hero.superhero}/>
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{hero.superhero}</h5>
                            <p className="card-text">{hero.alter_ego}</p>

                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            {/*<CharactersByHero characters={ characters } alter_ego={ alter_ego } />*/}

                            {
                                (hero.alter_ego === hero.characters)
                                    ? <></>
                                    : <p>{hero.characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{hero.first_appearance}</small>
                            </p>

                            <Link to={`hero/${hero.id}`}>
                                Más..
                            </Link>


                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};