import React from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, name: 'Hillary', text: 'Amazing service! Highly recommended.', image: '/user1.png', rating: 5 },
    { id: 2, name: 'Jane Smith', text: 'Professional and very responsive.', image: '/user1.png', rating: 4 },
    { id: 3, name: 'Alice Johnson', text: 'Great experience, mncconcepts delivers.', image: '/user1.png', rating: 5 },
    { id: 4, name: 'Bob Brown', text: 'Exceptional quality and timely delivery.', image: '/user1.png', rating: 4 }
];

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <div data-aos="fade-down" className='reviews-header'>
                <h1>What Our Clients Says</h1>
            </div>
            <div className='reviews-slider'>
                {reviews.map((review) => (
                    <div key={review.id} className='review-card'>
                        <div className='review-content'>
                            <img src={review.image} alt={review.name} className='reviewer-image' />
                            <h4 className='reviewer-name'>- {review.name}</h4>
                            <p className='review-text'>"{review.text}"</p>
                            <div className='star-rating'>{'⭐'.repeat(review.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
