import React, { Fragment } from 'react'
import { Navbar, NavbarBrand } from "@nextui-org/react";
import MehediLogo from './MehediLogo';

function Nav() {
    return (
        <Fragment>
            <Navbar shouldHideOnScroll>
                <MehediLogo />
                <NavbarBrand>
                    <p className='font-bold text-inherit -ms-4'>Mehedi Haque</p>
                </NavbarBrand>
            </Navbar>
        </Fragment>
    )
}

export default Nav
