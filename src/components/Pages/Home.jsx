import React from 'react';
import HomeBanner from "../molecules/HomeBanner";
import ItemList from '../organisms/ItemList';
import RecommendationList from '../organisms/RecommendationList';


function Home() {
  return (
    <div>
      <HomeBanner/>
      <RecommendationList/>
      <ItemList/>
    </div>
  )
}

export default Home
