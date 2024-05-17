import Content from "./Content"
import CountryList from "./CountryList"
import SearchBar from "./SearchBar"
import Services from "./Services"
import Carousel from "./Carousel"

const HomePage = () => {
  return (
    <>

      <SearchBar />
      <CountryList />
      <Content />
      <Carousel />
      <Content />
      <Services />
    </>
  )
}

export default HomePage