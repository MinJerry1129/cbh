import Link from 'next/link';
import { slide as Menu } from "react-burger-menu";
import React, { Component } from 'react';



class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }
    render() {
        return (
            <div className={"hamburger"}>
                <Menu noOverlay width={'85%'}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                    <ul className={"nav_parent"}>
                        <li className={"has-submenu nav_item"}>
                            <Link href="/">Calgary Area Real estate</Link>
                        </li>
                        <li className={"has-submenu nav_item"}>
                            <Link href="/edmonton-area">Edmonton area real estate</Link>
                        </li>
                        <li className={"has-submenu nav_item"}>
                            <Link href="/sellers">Seller</Link>
                        </li>
                        <li className={"has-submenu nav_item"}>
                            <Link href="/mortgage">Mortgage</Link>
                        </li>
                        <li className={"has-submenu nav_item"}>
                            <Link href="/commercial">Commercial</Link>
                        </li>
                    </ul>
                </Menu>
            </div>
        )
    }
}

export default Nav;