export const getUserLogin = async (e) => {
    const formData = new FormData();
    formData.append('email', e.email);
    formData.append('password', e.password);
    let res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        body: formData
    })
    return res;
}

export const logoutUser = async (token) => {
    
    let res = await fetch('/api/admin/auth/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return res
}