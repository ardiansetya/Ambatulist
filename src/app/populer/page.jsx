"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilites/Header"
import Pagination from "@/components/Utilites/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"

const page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page} setPage={setPage} />
    </>
  )
}

export default page