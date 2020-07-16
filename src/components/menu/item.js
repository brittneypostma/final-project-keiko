import React from 'react'
import { formatCurrencyString } from 'use-shopping-cart'
import AddToCart from '../cart/add-to-cart'
import NumberOfItems from '../cart/number-of-items'

const Item = ({ item }) => {
  const cartInfo = {
    item: item.id,
    name: item.product.name,
    price: item.unit_amount,
    currency: item.currency
  }
  return (
    <div className="grid lg:grid-cols-carousel items-stretch xxl:items-center justify-between">
      <div>
        <h2 className="text-2xl sm:text-5xl whitespace-no-wrap">{item.product.name}</h2>
        <p className="font-body text-xs sm:text-sm xl:text-lg">
          Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger. Yokohama soy milk soy milk seasoned egg ground black pepper chopped onions roasted pork slices spinach seasoned egg kamaboko chicken stock pork bones sesame oil chicken stock Hakata minced garlic Wakayama ramen burger toasted sesame seeds. Abura soba abura soba butter Hakata ramen burger Hakata Kumamoto tsukemen curry Asahikawa. Soy milk Kagoshima yuzu butter salt Nissin instant cup ramen Wakayama soy sauce chicken stock Hakata toasted sesame seeds ramen burger flavoured oil. Seasoned egg Tokushima Sapporo butter ramen burger minced garlic Tokyo wood ear mushroom soy milk bamboo slices Asahikawa Nagoya pork bones Kagoshima leek vinegar Kagoshima Tokyo leek. Kagoshima lard Asahikawa mustard greens Sapporo yuzu fish broth wood ear mushroom Wakayama tsukemen soy milk yuzu nori yuzu curry Tokyo bean sprouts Kagoshima corn. Soy sauce pork bones fish broth Tokushima chilli vinegar vinegar nori vinegar soy sauce.
        </p>
        <h2 className="text-red">
          {formatCurrencyString({
            value: parseInt(item.unit_amount),
            currency: item.currency,
          })}
        </h2>
        <div className="grid md:flex items-center">
          <NumberOfItems />
          <div className='mt-5 md:ml-5 md:mt-0'>
            <AddToCart item={cartInfo} />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex ml-5 xxl:h-450">
        <img src={item.product.images[0]} alt={item.name} className="object-cover w-full" />
      </div>
    </div>
  )
}

export default Item