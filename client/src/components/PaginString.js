import React, {useContext} from 'react';
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const PaginString = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount/device.limit)
    const pagin = []

    for (let i = 0; i < pageCount; i++) {
        pagin.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
        {pagin.map( item =>
           <Pagination.Item
             key={item}
             active={device.page === item}
             onClick={()=>device.setPage(item)}
           >
             {item}
           </Pagination.Item>
        )}
        </Pagination>
    );
});

export default PaginString;