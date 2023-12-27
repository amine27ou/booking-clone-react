import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx"
import Footer from "../../components/footer/Footer.jsx"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList.jsx"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList.jsx"

import "./home.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="home-container">
        <Featured/>
        <h1 className="home-title">
          Browse by property type
        </h1>
        <PropertyList/>
        <h1 className="home-title">
          Homes guests love
        </h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
