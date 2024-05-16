
// import Caraousel from "./Caraousel"
import Content from "./Content"
import CountryList from "./CountryList"
import SearchBar from "./SearchBar"
import Services from "./Services"


const HomePage = () => {
  return (
    <>

      <SearchBar />
      <CountryList />
      {/* <Caraousel /> */}
      <Content />
      <Services />
    </>
  )
}

export default HomePage