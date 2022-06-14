import NavBar from '../../components/NavBar/NavBar'
import ProductsShowcase from '../../components/ProductsShowcase/'


export default () => {
   return (
      <div className='catalog-page__wrapper'>
         <NavBar/>
      <div className="catalog-page">
         <div className="catalog-page__categories">
            <div className="catalog-page__categories__cakes">
               <img src="./cake.avif" alt="cake image"/>
               <div className="catalog-page__categories__cakes__category">
                  <p className="catalog-page__categories__cakes__category__name">Torturi</p>
               </div>
            </div>
            <div className="catalog-page__categories__cookies">
               <img src="./macarons.avif" alt="cake"/>
               <div className="catalog-page__categories__cookies__category">
                  <p className="catalog-page__categories__cookies__category__name">Prajituri</p>
               </div>
            </div>
            <div className="catalog-page__categories__candy-bar">
               <img src="https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg"
                    alt="cake"/>
               <div className="catalog-page__categories__candy-bar__category">
                  <p className="catalog-page__categories__candy-bar__category__name">Candy Bar</p>
               </div>
            </div>
            <div className="catalog-page__categories__bakery">
               <img src="./bakery.avif" alt="cake"/>
               <div className="catalog-page__categories__bakery__category">
                  <p className="catalog-page__categories__bakery__category__name">Brutărie </p>
               </div>
            </div>
            <div className="catalog-page__categories__ice-cream">
               <img
                  src="https://www.foodiecrush.com/wp-content/uploads/2017/05/No-Churn-Ice-Cream-foodiecrush.com-31.jpg"
                  alt="cake"/>
               <div className="catalog-page__categories__ice-cream__category">
                  <p className="catalog-page__categories__ice-cream__category__name">Inghetata </p>
               </div>
            </div>
         </div>
         <div className='catalog-page__products-showcase'>
            <ProductsShowcase />
         </div>
      </div>
      </div>
   )
}