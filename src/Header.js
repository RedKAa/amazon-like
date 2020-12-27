import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            {/* Amazon Logo */}
            <div>
            <img 
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </div>
            
            {/* Search box */}
            <div
            className="header__search">
                <input
                className="header__searchInput" type="text"/>

                <SearchIcon
                className="header__searchIcon"/>
            </div>

            {/* Nav bar */}
            <div
            className="header__nav">
                {/* Option 1: Sign in */}
                <div
                className='header__option'>
                    <span
                    className='header__optionLineOne'>
                        Hello,
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>

                {/* Option 2: Return & Order */}
                <div
                className='header__option'>
                    <span
                    className='header__optionLineOne'>
                        Returns
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>

                {/* Option 3: Your Prime */}
                <div
                className='header__option'>
                    <span
                    className='header__optionLineOne'>
                        Your
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                
                {/* Option 4: Cart */}
                <div
                className='header__optionCart'>
                        <ShoppingBasketIcon
                        className="header__optionCartIcon" />
                    <span
                    className='header__optionLineTwo header__CartCount'>0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
