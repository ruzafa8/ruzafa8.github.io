import React, { useEffect, useState } from 'react'
import Item, { IItem } from './Item.tsx'
import { list } from '../../data/articleList.tsx'

const PAGE_SIZE = 50

const getPage = (page: number) => list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

const numPages = Math.ceil(list.length / PAGE_SIZE)

const List = (): JSX.Element => {
  const [page, setPage] = useState(0)
  const [myList, setMyList] = useState([])

  useEffect(() => {
    setMyList(getPage(page))
  }, [page])

  return (
    <div>
    {
      myList.map((item: IItem, i: number) => <Item key={i} {...item} />)
    }
    <button onClick={() => setPage(page - 1)} disabled={page === 0} >Previous</button>
    <button onClick={() => setPage(page + 1)} disabled={page === numPages - 1}>Next</button>
    </div>
  )
}

export default List
