'use client'
import { useEffect, useState } from "react";

export default function TransportConnections() {
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        fetch("https://transport.opendata.ch/v1/connections?from=Winterthur&to=Zürich")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data && data.connections) {
                    setConnections(data.connections)
                } else {
                    console.error('No connections found');
                }
            })
            .catch(error => console.error('Error fetching connections:', error));
    }, []);

    return (
        <div>
            <h1>Transport Connections - Winterthur to Zürich</h1>
            <ul>
                {connections.length > 0 ? (
                    connections.map((connection, idx) => (
                        <li key={idx}>
                            <p>Departure: {connection.from.station.name} at {new Date(connection.from.departure).toLocaleTimeString()}</p>
                            <p>Arrival: {connection.to.station.name} at {new Date(connection.to.arrival).toLocaleTimeString()}</p>
                            <p>Duration: {Math.round(connection.duration / 60)} minutes</p>
                            <p>Transfers: {connection.transfers}</p>
                        </li>
                    ))
                ) : (
                    <li>No connections found</li>
                )}
            </ul>
        </div>
    )
}
