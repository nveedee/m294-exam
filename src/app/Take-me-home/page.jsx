"use client"
import React, { useEffect, useState } from "react";

function TakeMeHome() {
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        // Funktion, um Verbindungen von Winterthur HB nach Hause zu finden
        const findConnections = () => {
            fetch(
                "http://transport.opendata.ch/v1/connections?from=Winterthur HB&to=home"
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.connections) {
                        setConnections(data.connections);
                    } else {
                        console.error("No connections found to home.");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching connections to home:", error);
                });
        };

        findConnections();
    }, []);

    return (
        <div>
            <h1>Take me home</h1>
            {connections.length > 0 ? (
                <div>
                    <h2>Connections from Winterthur HB to home:</h2>
                    <ul>
                        {connections.map((connection, idx) => (
                            <li key={idx}>
                                Departure: {new Date(connection.from.departure).toLocaleTimeString()}, Destination: {connection.to.station.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Finding connections...</p>
            )}
        </div>
    );
}

export default TakeMeHome;
