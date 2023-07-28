
import { setParams } from './set-params'
import { describe, expect, test } from 'vitest'

describe('setParams test', () => {

    // Tests that all parameters are set correctly
    test('test_set_all_params', () => {
        setParams('search', 'order', 2, true)
        expect(window.location.pathname + window.location.search + window.location.hash).toBe('/?q=search&sort=repositories&order=order&page=2')
    })

    // Tests that search and order parameters are set correctly
    test('test_set_search_and_order_params', () => {
        setParams('search', 'order')
        expect(window.location.pathname + window.location.search + window.location.hash).toBe('/?q=search&sort=repositories&order=order&page=1')
    })

    // Tests that search and page parameters are set correctly
    test('test_set_search_and_page_params', () => {
        setParams('search', 'order', 2)
        expect(window.location.pathname + window.location.search + window.location.hash).toBe('/?q=search&sort=repositories&order=order&page=2')
    })

    // Tests that order and page parameters are set correctly
    test('test_set_order_and_page_params', () => {
        setParams('', 'order', 2)
        expect(window.location.pathname + window.location.search + window.location.hash).toBe('/?q=&sort=repositories&order=order&page=2')
    })

    // Tests that order parameter is set correctly
    test('test_set_order_param_only', () => {
        setParams('', 'order')
        expect(window.location.pathname + window.location.search + window.location.hash).toBe('/?q=&sort=repositories&order=order&page=1')
    })
})
