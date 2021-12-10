import React from 'react';
import SearchInput from '../Common/SearchInput';
function MainImage() {
    return (
        <>
            <div className="Main-img">
                <SearchInput />
                <div className="text-content">
                    <h1>
                        Discover a place <br />
                        you'll love to live.
                    </h1>
                    <h6>
                        Check out the latest homes <br />
                        base on your personal preferences.
                    </h6>
                </div>
            </div>
        </>
    );
}

export default MainImage;
