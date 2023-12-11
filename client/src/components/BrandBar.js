import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row>
          <Col className="d-flex flex-wrap">
              {device.brands.map(brand =>
                  <Card
                      style={{cursor:'pointer'}}
                      onClick={()=>device.setSelectedBrand(brand)}
                      key={brand.id}
                      className="p-3"
                      border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                  >
                      {brand.name}
                  </Card>
              )}
          </Col>
        </Row>

    );
});

export default BrandBar;