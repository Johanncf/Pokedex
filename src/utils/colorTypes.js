export default function handleGenerateBg(type) {
    type = type.toLowerCase()
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
        default:
            return '#ddd'
    }
}