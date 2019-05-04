import React, { Component } from 'react';
import './Header.css'
import { Grid, Row, Col } from 'react-bootstrap';
import img from '../../graphics/home_img.png';
import main_logo from '../../graphics/evn_logo.png';
export default class Header extends Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var content = document.getElementsByClassName('show-grid');
            content[0].style.transform = 'translate(0px,' + wScroll / 2 + 'px)';
        }, { passive: true })
    }

    render() {
        return (
            <div id='header'>
                <div className='overlay'>
                    <Grid id='header-container' fluid>
                        <Row className='show-grid header-row'>
                            <Col className='title' lg={6} md={6}>
                                <div className='content'>

                                    <img id='itc_main' src={main_logo} />


                                </div>
                            </Col>
                            <Col mdHidden xsHidden smHidden>
                                <img src={img} className='graphics'></img>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}