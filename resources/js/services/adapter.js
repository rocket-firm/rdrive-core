export const schemaAdapter = ({data}) => {
    let obj = {}
    data.map((item) => {
        for (let key in item) {
            obj[key] = item[key]
        }
    })
    return obj
}