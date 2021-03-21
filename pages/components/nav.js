import Link from 'next/link';
import { slide as Menu } from "react-burger-menu";
import styled from '../../styles/Home.module.css'
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
                    <ul class={"nav_parent"}>
                        <li class={"has-submenu nav_item"}>
                            <a href="/">Calgary Area Real estate</a>
                        </li>
                        <li class={"has-submenu nav_item"}>
                            <a href="/all/menu/edmonton">Edmonton area real estate</a>
                        </li>
                        <li class={"has-submenu nav_item"}>
                            <a href="/all/menu/seller">Seller</a>
                        </li>
                        <li class={"has-submenu nav_item"}>
                            <a href="/all/menu/mortgage">Mortgage</a>
                        </li>
                        <li class={"has-submenu nav_item"}>
                            <a href="/all/menu/commercial">Commercial</a>
                        </li>
                    </ul>
                </Menu>
            </div>
        )
    }

}

export default Nav;