import { CartItemType } from '@store/Cart'
import Link from 'next/link'
import { Button, Item, Loader, Message } from 'semantic-ui-react'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />

  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Your cart is empty</Message.Header>
        <div>
          You will need to add some items to the cart before you can checkout.
        </div>
      </Message>
    )

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem

      return {
        childKey: id,
        header: (
          <Link href="/product/[id]" as={`/product/${id}/`} passHref>
            <Item.Header as="a">{name}</Item.Header>
          </Link>
        ),
        image: (
          <Item.Image
            src={image}
            alt={name}
            size="small"
            style={{ background: '#f2f2f2' }}
          />
        ),
        meta: `${quantity} x ${price}`,
        description: 'Some more information goes here....',
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(cartItem)}
          />
        ),
      }
    })

  return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList
