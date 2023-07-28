import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Select } from '../../components/select'
import { Input } from '../../components/input'
import { UserItem, UserResponseData } from '../../interfaces/interfaces'
import { UserCard } from '../../components/user-card'
import { setParams } from '../../utils/set-params'
import { Pagination } from '../../components/pagination'
import { initParams } from '../../utils/init-params'
import { ListLayout } from '../../components/layouts/list-layout'
import { PageLayout } from '../../components/layouts/page-layout'
import { searchUrl } from '../../api/urls'
import { Modal } from '../../components/modal'
import { resultsLimit, selectOptions } from '../../utils/constants'
import { UserInfo } from '../../components/user-info'

export const Main = memo(() => {
  const [search, setSearch] = useState(initParams().q)
  const [order, setOrder] = useState(initParams().order)
  const [sort,] = useState(initParams().sort)
  const [page, setPage] = useState<number | null>(initParams().page)
  const [data, setData] = useState<UserResponseData>()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentUserItem, setCurrentUserItem] = useState<UserItem | null>(null)
  0
  const options = {
    sort: useMemo(() => (selectOptions), [])
  }

  useEffect(() => {
    const { q, sort, order, page } = initParams()
    const fetchData = async () => {
      const options = {
        headers: {
          accept: ' application/vnd.github+json'
        }
      }
      try {
        const response = await fetch(`${searchUrl}/users?q=${q}&sort=${sort}&order=${order}&page=${page}`, options)
        const data = await response.json()
        setData(data)
        return data
      } catch (e: unknown) {
        console.warn(e)
      }
    }
    fetchData()
  }, [order, page, search])
  const callbacks = {
    openModal: useCallback((id: number) => {
      const item = data?.items.find((item) => item.id === id)
      if (item) {
        setCurrentUserItem(item)
      }
      setIsOpenModal(true)
    }, [data?.items]),
    closeModal: useCallback(() => {
      setIsOpenModal(false)
      setCurrentUserItem(null)
    }, []),
    makePaginatorLink: useCallback((page: number) => {
      return `?${new URLSearchParams({ q: search, sort: sort, order: order, page: `${page}` })}`;
    }, [order, search, sort]),
    onPaginate: useCallback((page: number | null) => {
      setParams(search, order, page)
    }, [order, search]),
    onSearch: useCallback((value: string) => {
      setSearch(value)
      setPage(1)
      setParams(value, order, 1)
    }, [order]),
    onChange: useCallback((value: string) => {
      setOrder(value)
      setParams(search, value, page)
    }, [page, search])
  }

  return (
    <PageLayout>
      <Input
        type='text'
        placeholder='Поиск по логину...'
        inputValue={search}
        onChange={callbacks.onSearch} />
      <Select
        options={options.sort}
        value={order}
        onChange={callbacks.onChange}
        description='Сортировать по количеству репозиториев:' />
      <ListLayout>
        {data?.items && data?.items.map((item) => {
          return <UserCard key={item.id} callback={callbacks.openModal} item={item} />
        })
        }
        {data?.items && <Pagination
          count={data.total_count < resultsLimit ? data.total_count : resultsLimit}
          page={page}
          onChange={callbacks.onPaginate}
          makeLink={callbacks.makePaginatorLink} />}
      </ListLayout>
      {isOpenModal && <Modal callback={callbacks.closeModal}>
        < UserInfo
          item={currentUserItem}
          callback={callbacks.closeModal} />
      </Modal>}
    </PageLayout>
  )
})
