import { describe, test, expect } from 'vitest'
import { act, render, renderHook, screen } from '@testing-library/react'
import { useState } from 'react'
import { Main } from '.'
import { Pagination } from '../../components/pagination'

describe('Main component test', () => {

    // Tests that the main components render without crashing
    test('test_render_main_components', () => {
        render(<Main />)
        expect(screen.getByPlaceholderText('Поиск по логину...')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByRole('main')).toBeInTheDocument()
    })

    // Tests that null page value is handled correctly
    test('test_handle_null_page_value', () => {
        const { result } = renderHook(() => useState<number | null>(null))
        const [page, setPage] = result.current
        expect(page).toBeNull()

        act(() => setPage(1))
        expect(result.current[0]).toBe(1)
    })

    // Tests that the pagination component renders correctly with different input values
    test('test_pagination_component_renders_correctly', async () => {
        render(<Pagination count={300} page={1} onChange={() => { }} makeLink={() => ''} />)
        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('...')).toBeInTheDocument()
        expect(screen.getByText('10')).toBeInTheDocument()
    })
})
