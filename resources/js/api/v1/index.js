import {fetchDecor} from 'services'

export const getUserLogin = async (e) => {
    const formData = new FormData();
    formData.append('email', e.email);
    formData.append('password', e.password);
    let res = await fetchDecor('/api/admin/auth/login', {
        method: 'POST',
        body: formData
    })
    return res;
}

export const logoutUser = async () => {
    
    let res = await fetchDecor('/api/admin/auth/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return res
}

export const getSchemasList = async () => {
    let res = await fetchDecor('/api/admin/schemas', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}

export const getModelsFetch = async (name) => {
    let res = await fetchDecor(`/api/admin/${name}/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}

export const getModelsFetchId = async ({schema, id}) => {
    let res = await fetchDecor(`/api/admin/${schema}/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}