import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Footer = () => {
    const currentYear = new  Date().getFullYear()
    return(
        <Footer>
            <Row>
                <Col>
                       VTU &copy;{currentYear}
                </Col>
            </Row>

        </Footer>
    )
}
export default Footer;