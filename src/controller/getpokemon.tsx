import {Pokemon} from '../models/pokemon.ms'
export async function getPokemons(): Promise<Pokemon[]>{
    /* Llamado de API REST */
    /* API FETCH la API FETCH proporciona una interfaz JS para acceder y manipular  partes del canal HTTP, tales como 
       peticiones y respuestas */
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any) => ({
        /*Esta es la respuesta a la petición, los datos despues del : se traen la pagina web */
        name: pokemon.name,
        id: pokemon.national_number,
        imggif:  CorregirtNombre(pokemon.sprites['animated']),
        imglarge: CorregirtNombre(pokemon.sprites['large']),
        imgnormal: CorregirtNombre(pokemon.sprites['normal']),
        total: pokemon.total,
        hp:  pokemon.hp,
        attack:  pokemon.attack,
        defense:  pokemon.defense,
        sp_atk:  pokemon.sp_atk,
        sp_def:  pokemon.sp_def,
        speed:  pokemon.speed,
        type: pokemon.type[0]

    }));
    /*Con esta funcion solo muestra los pokemones con id unicos, para que no salgan duplicados */
    const unicosPokemons = pokemons.filter(
        (pokemon:any,index: number)=>
            pokemons.findIndex((other:any)=> other.id=== pokemon.id) === index
    );
    return unicosPokemons;
}

export function CorregirtNombre(name:string):string{
    if (name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd");
    }else if (name.includes("mr.-mime")){
        return name.replace("mr.-mime","mr-mime")
    }else if (name.includes("♂")){
        return name.replace("♂","-m")
    }else if (name.includes("♀")){
        return name.replace("♀","-f")
    }
    else{
        return name;
    }
    
}