import React, { useState } from 'react'
import '../styles/ProductDetails.css'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { FaCaretDown, FaCaretUp, FaStar, FaArrowLeft } from 'react-icons/fa'
import coffeeData from '../../coffee-data/cof-db.json'

const ProductDetails = () => {
    const { id } = useParams()
    const coffeeDetails = useLoaderData()

    const [isFlavShowing, SetIsFlavShowing] = useState(false)
    const navigate = useNavigate()

    function starReview(starNo) {
        return (
            <div className="rating-review">
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} color={i < starNo ? "var(--clr-caramel, #c1733c)" : "#e0e0e0"} />
            ))}
            </div>
        );
    }

    const handleBackClick = () => {
        navigate(-1)
    }

    return (
    <div className='product-det-gen-div fade-in'>
        <button onClick={handleBackClick} className='prod-det-back-btn'>
            <FaArrowLeft /> Back to Selections
        </button>

        <div className="det-cont">
            <div className="det-img-div">
                <img src={coffeeDetails.path} alt={coffeeDetails.name} loading="lazy" />
            </div>
            
            <div className="det-desc-div">
                <div className="det-main-desc">
                    <h1 className="det-product-name">{coffeeDetails.name}</h1>
                    <p className="det-pro-country">Origin: <span>{coffeeDetails.country}</span></p>
                    <p className="product-desc-write-up">{coffeeDetails.description}</p>
                </div>

                <div className='avail-and-price'>
                    <div className="price-block">
                        <div className="price-tag">
                            <span className="currency">$</span>
                            <span className="amount">{coffeeDetails.price}</span>
                        </div>
                        {coffeeDetails.isAvailable ?
                            <span className="det-pro-avail in-stock">In Stock</span> :
                            <span className="det-pro-avail out-stock">Out of Stock</span>
                        }
                    </div>

                    <div className="flavours-container">
                        <div className="det-flavours" onClick={() => SetIsFlavShowing(!isFlavShowing)}>
                            <h3>Flavor Notes</h3>
                            {isFlavShowing ? <FaCaretUp /> : <FaCaretDown />}
                        </div>
                        
                        <div className={`flavours-list ${isFlavShowing ? 'show' : ''}`}>
                            {coffeeDetails.flavorNotes && coffeeDetails.flavorNotes.map((coffeeFlavour, index) => (
                                <span className="flavour-pill" key={index}>{coffeeFlavour}</span>
                            ))}
                        </div>
                    </div>
                    
                    <button className="add-to-cart-btn" disabled={!coffeeDetails.isAvailable}>
                        {coffeeDetails.isAvailable ? 'Add To Cart' : 'Currently Unavailable'}
                    </button>
                </div>
            </div>
        </div>

        <div className="review-cont">
            <h2>Customer Reviews</h2>
            <div className="review-details">
                {coffeeDetails.reviews && coffeeDetails.reviews.map((coffeeReviews, index) => (
                    <div className="review1" key={index}>
                        <div className="reviewer-header">
                            <div className="reviewer-avatar">
                                {coffeeReviews.name.charAt(0)}
                            </div>
                            <div className="reviewer-info">
                                <p className="review-name">{coffeeReviews.name}</p>
                                <p className="date-review">{coffeeReviews.date}</p>
                            </div>
                            <div className="rate-and-date">
                                {starReview(coffeeReviews.rating)}
                            </div>
                        </div>
                        <p className="review-comment">"{coffeeReviews.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
};

export const productDetailsLoader = async ({ params }) => {
    const { id } = params
    const coffee = coffeeData.coffee.find(c => c.id.toString() === id.toString());
    
    if (!coffee) {
        throw new Response("Not Found", { status: 404 });
    }
    
    return coffee;
}

export default ProductDetails