import Image from "next/image";

interface Props {
  image: string,
  description: string,
  price: string
}

export function ServicesCard({ image, description, price }: Props) {
  return (
    <div className="services-card">
      <div><Image src={ image } alt={description} /></div>
      <div>
        <p>{description}</p>
        <button>{`R$ ${price}`}</button>
      </div>
    </div>
  )
}