import React from 'react';
import PropTypes from 'prop-types';

const Zamowienia = ({ shoppingCartItems }) => {
    return (
        <div>
            <h2>Zamówienia</h2>
            <ul>
                {shoppingCartItems.map(item => (
                    <li id={item.id}>
                        {item.valueOf()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Zamowienia.propTypes = {
    shoppingCartItems: PropTypes.array.isRequired
};

export default Zamowienia;