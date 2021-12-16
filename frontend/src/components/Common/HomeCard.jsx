import React from 'react';
import '../../assets/style.css';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function HomeCard({ tag }) {
    const dispatch = useDispatch();
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');

    const pushTotag = tagId => {
        if (key) {
            if (tag.type === 'Sell') {
                dispatch(push('/sale'));
            } else {
                dispatch(push(`/search?tag_id=${tagId}&tag_type=${tag.type}`));
            }
        } else {
            dispatch(push('/signup'));
        }
    };

    console.log('tag', tag);

    return (
        <>
            <div className="card" key={tag.id}>
                <img src={tag.image} alt="" />
                <div className="contenido">
                    <h3>{tag.name}</h3>
                    <p>{tag.description}</p>
                    <a href={() => pushTotag(tag.id)}>Search Home</a>
                </div>
            </div>
        </>
    );
}
