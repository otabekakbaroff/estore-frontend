import Image from "next/image"

export default function Item({props}) {
    return (
      <section >
          <h1>{props.name}</h1>
          <Image 
              src={props.imgUrl}
              width={300}
              height={300}
          />
          <h3>{props.price}</h3>
          <p>{props.description}</p>
          <button>Buy</button>
      </section>
    )
  }

  
  
  