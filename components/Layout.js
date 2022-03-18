import Nav from './Nav'
import Meta from './MetaTags'

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <Nav/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout