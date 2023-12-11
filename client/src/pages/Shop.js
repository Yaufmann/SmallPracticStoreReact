import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import PaginString from "../components/PaginString";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    useEffect(() => {
        fetchDevices(null, null, device.page,3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page]);
    //test git commit
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                  <TypeBar/>
                </Col>
                <Col md={9}>
                  <BrandBar/>
                  <DeviceList/>
                  <PaginString/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;