export default function handleGenerateBg(types) {
    

    if (types.length === 1) {
        return setColor(types[0])
    }

    if (types.length > 1) {
        return (
            `linear-gradient(155deg, ${setColor(types[0])} 10%, ${setColor(types[1])} 100%)`
        ) 
    }

    function setColor(type) {
        switch(type) {
            case 'fire':
                return '#ff9046'
            case 'electric':
                return 'yellow'
            case 'grass':
                return '#83ba36'
            case 'rock':
                return '#9f806f'
            case 'water':
                return '#5abcd8'
            case 'bug':
                return '#c3d21f' 
            case 'poison':
                return '#a95ca2'
            case 'ground':
                return '#efc957'
            case 'normal':
                return '#bdbdaf'
            case 'flying':
                return '#7ba4ff'
            case 'ice':
                return '#95f1ff'
            case 'fairy':
                return '#f9aeff'
            case 'dark':
                return '#8e6956'
            case 'dragon':
                return '#8a75fe'
            case 'ghost':
                return '#7975d6'
            case 'steel':
                return '#c4c2da'
            case 'fighting':
                return '#aa5540'
            case 'psychic':
                return '#fb62b4'
            default:
                return '#ddd'
        }
    }
}