export const initParams = () => {
    const urlParams = new URLSearchParams(location.search)

    const validParams = { q: '', sort: 'repositories', order: 'asc', page: 1 }

    validParams.page = Number(urlParams.get('page')) || 1
    validParams.sort = urlParams.get('sort') || 'repositories'
    validParams.order = urlParams.get('order') || 'asc'
    validParams.q = urlParams.get('q') || ''

    return validParams
}
