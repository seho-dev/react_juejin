import React, { Component } from 'react';
import "../index/header.css"

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            navList: ["首页", "沸点", "话题", "小册", "活动"]
        };
    };
    handelNavItem(index) {
       this.setState(() => {
           return {
             activeIndex: index
           }
       })
    };
    render() {
        return (
            <div className="header">
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo" />
                <ul className="nav">
                    {this.state.navList.map((e, index) => {
                        return (<li key={index} onClick={() => {this.handelNavItem(index)}} className={this.state.activeIndex === index ? `navItemActive navItem` : `navItem`}>{e}</li>)
                    })}
                </ul>
                {/* 搜索框 */}
                <input className="searchInput" placeholder="搜索掘金"></input>
            </div>
        );
    }
}

export default header;