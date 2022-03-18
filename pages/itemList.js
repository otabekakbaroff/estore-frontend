import Item from './item'

export default function ItemList() {
    let array = [
    {
        name:'Jeans',
        price:'14.99',
        imgUrl:'/jeans.png',
        description:'These are jeans'
    },
    {
        name:'Leather Jacket',
        price:'24.99',
        imgUrl:'/jacket.png'
    },
]
    return (
      <secition >
          {array.map(item=>(
              <Item props={item}/>
          ))}
      </secition>
    )
  }


  
  
  