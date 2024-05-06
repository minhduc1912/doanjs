import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
        <CategoryList/>
        <BannerProduct/>

        <HorizontalCardProduct category={"hoabo"} heading={"Những bó hoa bán chạy"}/>
        <HorizontalCardProduct category={"hoatulip"}/>

        <VerticalCardProduct category={"hoababy"}/>
        <VerticalCardProduct category={"hoacuoi"}/>

    </div>
  )
}

export default Home