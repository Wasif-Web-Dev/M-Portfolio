import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";

const dashboards = {
    Dashboard2023Funds: "Dashboard2023Funds/Dashboard-Funds2023",
    Dashboard2022Welfare: "Dashboard2022Welfare/Dashboard-Welfare2022",
    Dashboard2016Welfare: "Dashboard2016Welfare/Dashboard-Welfare2016",
};

const TableauEmbed = () => {
    const {dashboardId} = useParams();
    const vizRef = useRef(null);

    useEffect(() => {
        if (!dashboardId || !dashboards[dashboardId]) return;

        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        script.onload = () => {
            if (vizRef.current) {
                let vizElement = vizRef.current.getElementsByTagName("object")[0];
                if (vizElement) {
                    vizElement.style.width = "100%";
                    vizElement.style.height = window.innerHeight - 100 + "px";
                }
            }
        };
        document.body.appendChild(script);
    }, [dashboardId]);

    if (!dashboards[dashboardId]) {
        return <div className="text-center text-red-500">Invalid Dashboard</div>;
    }

    return (
        <div className="w-full flex justify-center">
            <div ref={vizRef} className="tableauPlaceholder w-full max-w-[1200px] mt-[16vh]">
                <noscript>
                    <a href="#">
                        <img
                            alt="Dashboard"
                            src={`https://public.tableau.com/static/images/${dashboards[dashboardId]}/1.png`}
                            style={{border: "none"}}
                        />
                    </a>
                </noscript>
                <object className="tableauViz w-full" style={{minHeight: "900px"}}>
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="name" value={dashboards[dashboardId]} />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                </object>
            </div>
        </div>
    );
};

export default TableauEmbed;
