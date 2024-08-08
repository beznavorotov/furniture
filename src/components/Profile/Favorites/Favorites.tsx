import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { removeFavorite } from '@/store/slices/favoritesSlice';
import { addToCart } from '@/store/slices/cartSlice';
import { X } from 'lucide-react';

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    setFavoriteProducts(favorites);
  }, [favorites]);

  const removeProduct = (id) => {
    dispatch(removeFavorite(id));
    setFavoriteProducts(
      favoriteProducts.filter((product) => product.id !== id),
    );
  };

  const addToCartFromFavorites = (product) => {
    dispatch(addToCart(product));
    removeProduct(product.id);
  };

  return (
    <div className="favorites">
      <div className="title_favorites">
        <h1>Список обраного</h1>
      </div>
      <div className="favorites_details_blok">
        {favoriteProducts.map((product) => (
          <div className="favorites_details" key={product.id}>
            <div className="product_details">
              <div className="img_name">
                <div className="icon_product">
                  <img
                    src={product.photo[0]}
                    alt={product.title}
                    className="photo"
                  />
                </div>
                <div className="name_product">
                  <h3>{product.title}</h3>
                  <span className="color_product">
                    Колір: <span>{product.colour}</span>
                  </span>
                  <span className="order_product_price">
                    <span>{product.discount?.toFixed()}</span> грн
                  </span>
                </div>
              </div>
              <div className="order_price">
                <span className="order_article">
                  Код товару: {product.article_code}
                </span>
                <button
                  className="button button__white d-none d-md-block"
                  onClick={() => addToCartFromFavorites(product)}
                >
                  Додати в кошик
                </button>
              </div>
            </div>
            <div
              className="remove_product"
              onClick={() => removeProduct(product.id)}
            >
              <X strokeWidth={1.5} size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
