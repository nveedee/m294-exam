"use client"
import React, { useEffect, useState } from "react";

function StationBoardItem({ train }) {
    return (
        <tr>
            <td>{train.name}</td>
            <td>{new Date(train.stop.departure).toLocaleTimeString()}</td>
            <td>{train.to}</td>
            <td>{train.stop.platform}</td>
        </tr>
    );
}

function StationBoard() {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetch("http://transport.opendata.ch/v1/stationboard?station=Winterthur")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.stationboard) {
                    setTrains(data.stationboard);
                }
            })
            .catch((error) => console.error("Error fetching stationboard:", error));
    }, []);

    return (
        <div>
            <h1>Station Board - Winterthur</h1>
            <table>
                <thead>
                <tr>
                    <th>Train</th>
                    <th>Departure Time</th>
                    <th>Destination</th>
                    <th>Platform</th>
                </tr>
                </thead>
                <tbody>
                {trains.map((train, idx) => (
                    <StationBoardItem key={idx} train={train} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StationBoard;
