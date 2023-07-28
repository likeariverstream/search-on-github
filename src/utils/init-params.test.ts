import { describe, test, expect } from 'vitest'
import { initParams } from './init-params'

describe('initParams test', () => {

    // Tests that validParams object is returned
    test('test_valid_params_returned', () => {
        const result = initParams()
        expect(result).toEqual({ q: '', sort: 'repositories', order: 'asc', page: 1 })
    })

    // Tests that default values are set when no query params are provided
    test('test_default_values_set', () => {
        const result = initParams()
        expect(result.page).toBe(1)
        expect(result.sort).toBe('repositories')
        expect(result.order).toBe('asc')
        expect(result.q).toBe('')
    })


    // Tests that page is set to 1 when page query param is not a number
    test('test_page_set_to_1_when_not_a_number', () => {
        const urlParams = new URLSearchParams()
        urlParams.set('page', 'abc')

        const result = initParams()

        expect(result.page).toBe(1)
    })

    // Tests that sort is set to 'repositories' when sort query param is not provided
    test('test_sort_set_to_repositories_when_not_provided', () => {
        const urlParams = new URLSearchParams()
        urlParams.set('sort', 'repositories')
        const result = initParams()

        expect(result.sort).toBe('repositories')
    })

    // Tests that order is set to 'asc' when order query param is not provided
    test('test_order_set_to_asc_when_not_provided', () => {
        const urlParams = new URLSearchParams()
        urlParams.set('order', 'asc')

        const result = initParams()
        expect(result.order).toBe('asc')
    })
})
