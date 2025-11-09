export default function indexOutOfBounds(x,y,amount){
    if (x >= amount || y >= amount){
        return true
    } else {
        return false
    }
}