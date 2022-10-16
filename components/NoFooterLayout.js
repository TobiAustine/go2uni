import Navbar from "./Navbar"


const NoFooterLayout = ({children}) => {
  return (
    <>
    <Navbar></Navbar>
    {children}
    </>
  )
}

export default NoFooterLayout