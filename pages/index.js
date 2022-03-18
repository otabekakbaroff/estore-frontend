import Meta from '../components/MetaTags'
import ItemList from './itemList'


export default function Home() {
  return (
    <secition >
      <Meta title="Home" keyword="Home page" description="Home page. Introduction."/>
      <ItemList/>
    </secition>
  )
}

