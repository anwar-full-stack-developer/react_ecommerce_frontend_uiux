
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { listProducts } from "./../../actions/productActions";
import DownloadAppFromAppStore from "./DownloadAppFromAppStore";
import HomePopularProducts from './HomePopularProducts';
import HomeOurBrand from './HomeOurBrand';
import HomeRecomendedProducts from './HomeRecomendedProducts';
import HomeNewArrivedProducts from './HomeNewArrivedProducts';
import HomeBanner from "./HomeBanner";
import HomeFeature from "./HomeFeature";

export default function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
    <HomeBanner/>
    <HomeFeature/>
    <HomePopularProducts/>
    <HomeNewArrivedProducts/>
    <HomeRecomendedProducts/>
    <HomeOurBrand/>
    </>
  );
}
