export const sortingTable = (rows, sorting, newDecending) => {
    let newRows = rows.slice()

    newRows.sort((a, b) => {
        let compare = 0
        if(typeof a[sorting] === 'number' && typeof b[sorting] === 'number'){
            compare = a[sorting] - b[sorting]
        }else{
            compare = String(a[sorting]).localeCompare(String(b[sorting]))
        }
        return newDecending ? -1 * compare : compare

    })

    return newRows
}