import React from 'react';


const RecommendedBeers = ({ recommendedName, recommendedThumbnail }) => {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12 recommended-beer-box">
            <img className="recommended-beer-thumbnail" src={recommendedThumbnail} alt={recommendedName} />
            <p className="recommended-beer-title" title={recommendedName}>{recommendedName}</p>
        </div>
    );
}

export default RecommendedBeers;