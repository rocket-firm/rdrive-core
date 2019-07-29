import {fetchDecor} from 'services'

export const getUserLogin = async (e) => {
    console.log('zahodiut', fetchDecor)
    const formData = new FormData();
    formData.append('email', e.email);
    formData.append('password', e.password);
    console.log(fetchDecor())
    let res = await fetchDecor('/api/admin/auth/login', {
        method: 'POST',
        body: formData
    })
    console.dir(res)
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