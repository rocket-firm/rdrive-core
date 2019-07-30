export const schemaAdapter = ({data}) => {
    let obj = {}
    data.map((item) => {
        for (let key in item) {
            obj[key] = item[key]
        }
    })
    return obj
}

export const modelAdapter = ({data, links, meta}, name) => {
    const obj = {}
    const array = data;
    array.map((item) => {
        obj[item.id] = item;
    })
    return {
        data: obj,
        links,
        meta,
        name
    }
}

export const modelIdAdapter = (params, data) => {
    console.dir(params)
    console.dir(data)
    return {
        [params.schema]: {
            data: {
                [params.id]: {
                    ...data
                }
            }
        }
    }
}