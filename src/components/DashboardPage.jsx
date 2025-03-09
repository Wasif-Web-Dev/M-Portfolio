import React from "react";
import {useParams} from "react-router-dom";
import TableauEmbed from "./TableauEmbed";

const DashboardPage = () => {
    const {dashboardName} = useParams();

    return (
        <div className="container mx-auto py-8 pt-64">
            <h1 className="text-2xl font-bold text-center mb-4">{dashboardName.replace(/Dashboard/g, " ")}</h1>
            <TableauEmbed dashboardName={dashboardName} />
        </div>
    );
};

export default DashboardPage;
