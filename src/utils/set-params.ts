export const setParams = (search: string, order: string, page: number | null = 1, replaceHistory = false) => {
    const params = new URLSearchParams({q: search.trim(), sort: 'repositories', order: order, page: page ? page.toString() : ''})
    const url = `${window.location.pathname}${params ? `?${params}` : ''}${window.location.hash}`
    if (replaceHistory) {
        window.history.replaceState({}, '', url)
      } else {
        window.history.pushState({}, '', url)
      }
  }
