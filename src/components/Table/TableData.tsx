import React, {useEffect, useState} from 'react';
import {orderAPI, TableItemsResponseType} from "../../api/table-api";
import Table from './Table';
import {tableModel} from "./TableModel";
import {Pagination} from "../Pagination/Pagination";


const TableData = () => {

    const [data, setData] = useState<TableItemsResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countPerPage] = useState<number>(5)


    useEffect(() => {
        setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    const lastOrderIndex = currentPage * countPerPage
    const firstOrderIndex = lastOrderIndex - countPerPage
    const currentOrders = data.slice(firstOrderIndex, lastOrderIndex)

    // Change page
    const paginate = (pageNumber: number ) => {
        setCurrentPage(pageNumber)
    }

    if (loading) {
        return <h1 style={{textAlign: 'center'}}>LOADING...</h1>
    }


    return (
        <div style={{display: 'table'}}>
            <Table data={currentOrders} model={tableModel()}/>

            <Pagination
                countPerPage={countPerPage}
                totalOrderCount={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {/*<Select options={countPerPage} onChangeOption={}/>*/}
        </div>
    );
};

export default TableData;
