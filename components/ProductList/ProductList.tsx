import Image from 'next/image'
import Link from 'next/link'

import { Card } from 'semantic-ui-react'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        header={name}
        image={<Image src={image} width={290} height={333} alt="" />}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable className="center-items">
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
