import react,{useEffect,useState} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from '../models/pokemon.ms';
const Listado=()=>{

    const[pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery] = useState("");

    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarPokemon=pokemons?.slice(0,151).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })
    return(
        <>
            <h1>Pokemon JefferssonCode</h1>
            <header>
                <input
                value={query}
                placeholder="Buscar Pokemon ..."
                onChange={(event) => setQuery(event.target.value.trim())}
                />
            </header>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3"> 

                        {filtrarPokemon?.slice(0,151).map((pokemon)=>(
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b>Tipo:</b> {pokemon.type}</Card.Header>
                            <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50"/>
                                <Card.Body>
                                    <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                             <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/753/753252.png"
                                                /><b> HP:</b> {pokemon.hp}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                                <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/3943/3943622.png"
                                                />
                                                 <b> Ataque:</b> {pokemon.attack}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                                <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/10377/10377034.png"
                                                />
                                                <b> Defensa:</b> {pokemon.defense}
                                        </ListGroup.Item>
                                        <ListGroup.Item>                                                
                                                <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/16230/16230550.png"
                                                />
                                                <b> E. Ataque:</b> {pokemon.sp_atk}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                                <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/2084/2084022.png"
                                                />
                                                <b> E. Defensa:</b> {pokemon.sp_def}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                                <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/2455/2455905.png"
                                                />
                                                <b> Velocidad:</b> {pokemon.speed}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))};
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Listado;