import store from 'store';

export const fetchDecor = async (url, args) => {
    const state = store.getState()
    const {token} = state.user;
    const {language} = state.localizations;
    return fetch(url, {
        ...args,
        headers: (token) ? {
            ...(args && args.headers && args.headers || {}),
            'Accept-Language': language,
            'Authorization': `Bearer ${token}`
        } : {
            ...(args && args.headers && args.headers || {})
        }
    })
}