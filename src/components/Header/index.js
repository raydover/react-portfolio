import React from 'react'
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from "./Resume";
import NavTabs from "./NavTabs";


const Header = () => {
  const [currentPage, setPage] = useState("About");

  const displayPage = () => {

    if (currentPage === "About") {
      return <About />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else if (currentPage === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  };

  return (
    <>
     <div className="header">
        <h1>Raymond Dover</h1>
        <NavTabs currentPage={currentPage} setPage={setPage}/>
      </div>
      <hr></hr>

      <main>
        {displayPage(currentPage)}
      </main>
    </>
  )
}


export default Header;