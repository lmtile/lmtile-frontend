import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from '../../../config/axios';


function Appointment() {
    const [tableData, setTableData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [startDateFilter, setStartDateFilter] = useState(null);
    const [endDateFilter, setEndDateFilter] = useState(null);

    useEffect(() => {
        fetchData();
    }, [searchQuery, startDateFilter, endDateFilter]);

    async function fetchData() {
        const apiUrl = `/api/appointment/get-all-appointments?search=${searchQuery}&start_date=${startDateFilter}&end_date=${endDateFilter}`;
        const response = await axios.get(apiUrl);
        setTableData(response.data);
    }

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleStartDateFilterChange(date) {
        const formattedDate = date ? format(date, 'mm-DD-yyyy') : null;
        setStartDateFilter(formattedDate);
    }

    function handleEndDateFilterChange(date) {
        const formattedDate = date ? format(date, 'mm-DD-yyyy') : null;
        setEndDateFilter(formattedDate);
    }

    const filteredTableData = tableData.filter((item) => {
        const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStartDateFilter = !startDateFilter || item.date >= startDateFilter;
        const matchesEndDateFilter = !endDateFilter || item.date <= endDateFilter;
        return matchesSearchQuery && matchesStartDateFilter && matchesEndDateFilter;
    });

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between my-10 mx-10">
                <input
                    className="mr-4 input input-bordered w-full max-w-xs"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
                <div className="flex flex-row">
                    <input
                        className="mr-2 input input-bordered w-full max-w-xs"
                        type="date"
                        value={startDateFilter}
                        onChange={(event) => handleStartDateFilterChange(event.target.value)}
                        
                    />
                    <input
                        type="date"
                        value={endDateFilter}
                        onChange={(event) => handleEndDateFilterChange(event.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Property Type</th>
                        <th className="px-4 py-2">Office Name</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Customer</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">product</th>
                        <th className="px-4 py-2">Coupon Code</th>
                        <th className="px-4 py-2">City</th>
                        <th className="px-4 py-2">Street</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTableData.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.property_type}</td>
                            <td className="border px-4 py-2">{item.office_name}</td>
                            <td className="border px-4 py-2">{item.slot}</td>
                            <td className="border px-4 py-2">{item.customer}</td>
                            <td className="border px-4 py-2">{item.email}</td>
                            <td className="border px-4 py-2">{item.phone}</td>
                            <td className="border px-4 py-2">{item.product}</td>
                            <td className="border px-4 py-2">{item.coupon_code}</td>
                            <td className="border px-4 py-2">{item.city}</td>
                            <td className="border px-4 py-2">{item.street_address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Appointment;