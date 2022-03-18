import Link from 'next/link'
import {NavStyles} from './styles/Nav.styled'

const Nav = () =>{
    return(
        <NavStyles>
            <Link href="/"  passHref>Logo</Link>
            <input placeholder='Search...'/>
            <Link href="/shoppingCard" passHref>Shopping Card</Link>
        </NavStyles>
    )
}

export default Nav
