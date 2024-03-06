
import Navbar from "../components/Navbar.component"



function NavbarHoc (Comp){

return function NavbarAttacher()
{
return(
<>

<Navbar/>
<Comp/>

</>)

}


}

export default NavbarHoc;