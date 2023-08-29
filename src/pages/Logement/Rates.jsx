import React from "react";
import Rating from "react-rating";

const Rates = ({ logementRates }) => {
    const rating = parseFloat(logementRates);

    console.log(rating);
    return (
        <div className="logementDetail__rate" id="rateListLogement">
             <Rating
            initialRating={rating}
            emptySymbol={<i className="bi bi-star text-muted"></i>}
            fullSymbol={<i className="bi bi-star-fill text-warning"></i>}
            readonly
        />
        </div>
    );
};

export default Rates;
