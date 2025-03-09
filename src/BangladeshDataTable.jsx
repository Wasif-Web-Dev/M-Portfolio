import React from "react";

const BangladeshDataTable = () => {
    const data = [
        {
            sl: 1,
            datasetName: "Soil_Temperature from Bangladesh Meteorological Department",
            objective:
                "Soil temperature refers to the measurement of the ground's inherent warmth. Temperature measured at different depths. It depends upon the heat flux into the soil and the heat transfer processes between the soil and the atmosphere.",
            unitOfObservation: "°C",
            sampleSize: "Data from 21 meteorological stations nationwide for 21 years (2001-2022)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "12 hour interval",
            lastUpdated: "December,2022",
        },
        {
            sl: 2,
            datasetName: "Soil_Moisture from BMD",
            objective:
                "Soil moisture, sometimes also called soil water, represents the water present in soil. Measured at different depths.",
            unitOfObservation: "%",
            sampleSize: "Data from 12 meteorological stations nationwide for 19 years (2003-2022)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Daily",
            lastUpdated: "December,2022",
        },
        {
            sl: 3,
            datasetName: "Evapotranspiration from BMD",
            objective:
                "Evapotranspiration refers to the combined processes that move water from the Earth's surface into the atmosphere through evaporation and transpiration.",
            unitOfObservation: "mm/day",
            sampleSize: "Data from 13 meteorological stations nationwide for 8 years (2015-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Daily",
            lastUpdated: "December,2023",
        },
        {
            sl: 4,
            datasetName: "Evaporation from BMD",
            objective:
                "Evaporation rate is the rate at which water changes into vapor. Influenced by temperature, surface area, and humidity.",
            unitOfObservation: "mm/day",
            sampleSize: "Data from 13 meteorological stations nationwide for 22 years (2001-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "12 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 5,
            datasetName: "Cloud from BMD",
            objective:
                "Cloud cover is defined as the estimated fraction of the sky covered by clouds; i.e., how many portions are covered in eight parts.",
            unitOfObservation: "Octa",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 6,
            datasetName: "Dew point temperature from BMD",
            objective:
                "The dew point is the temperature to which air must be cooled to become saturated with water vapor, achieving relative humidity.",
            unitOfObservation: "°C",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 7,
            datasetName: "Rainfall from BMD",
            objective: "Records the amount of precipitation collected in the rain gauge over the last 24 hours.",
            unitOfObservation: "mm",
            sampleSize: "Data from 43 meteorological stations nationwide for 20 years (2003-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 8,
            datasetName: "Relative Humidity from BMD",
            objective:
                "Relative humidity is defined as the ratio of the water vapor present in the atmosphere to the total water holding capacity at a given temperature.",
            unitOfObservation: "%",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 9,
            datasetName: "Mean_Sea_Level_Pressure from BMD",
            objective:
                "Mean Sea Level Pressure (MSLP) is the surface pressure reduced to sea level. Standard sea level pressure is 1013.25 hPa (or mb).",
            unitOfObservation: "mb",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 10,
            datasetName: "Station Level Pressure from BMD",
            objective:
                "Station level pressure is observed at a specific elevation and represents the true barometric pressure of that location.",
            unitOfObservation: "mb",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 11,
            datasetName: "Sunshine from BMD",
            objective:
                "Sunshine duration is typically expressed in hours per day; i.e., how long the sun gives rays in a day.",
            unitOfObservation: "Hour",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Daily",
            lastUpdated: "December,2023",
        },
        {
            sl: 12,
            datasetName: "Temperature(Dry-bulb) from BMD",
            objective:
                "Temperature measures the average heat of the molecules in a substance, indicating its degree of hotness or coldness.",
            unitOfObservation: "°C",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 13,
            datasetName: "Thunder Storm from BMD",
            objective: "The total frequency of thunderstorms in a month.",
            unitOfObservation: "Number",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Monthly",
            lastUpdated: "December,2023",
        },
        {
            sl: 14,
            datasetName: "Visibility from BMD",
            objective:
                "Visibility measures how far one can see horizontally, either during the day or at night, in kilometers.",
            unitOfObservation: "Km",
            sampleSize: "Data from 43 meteorological stations nationwide for 42 years (1981-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 15,
            datasetName: "Wet-bulb temp from BMD",
            objective:
                "Measures the average heat of molecules in a substance, indicating the degree of hotness or coldness.",
            unitOfObservation: "°C",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 16,
            datasetName: "Wind from BMD",
            objective:
                "Wind speed, or wind flow, is caused by air moving from high to low pressure due to temperature differences. Measured with an anemometer (in knots).",
            unitOfObservation: "Knots, Degree",
            sampleSize: "Data from 43 meteorological stations nationwide for 52 years (1971-2023)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "3 hour interval",
            lastUpdated: "December,2023",
        },
        {
            sl: 17,
            datasetName: "Cyclone from BMD",
            objective:
                "Contains date of occurrence, nature, landfall area, wind speed/direction, tidal surge height, and central pressure during a cyclone.",
            unitOfObservation: "Km/hr, Degree, Feet, hpa",
            sampleSize: "Time frame: 1960-2022; Coverage: Bangladesh",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Event",
            lastUpdated: "December,2023",
        },
        {
            sl: 18,
            datasetName: "Tornedo from BMD",
            objective:
                "Details the date, location, area, duration, and maximum wind speed during the event; also includes data on property loss and casualties.",
            unitOfObservation: "sq. km, minute, km/hr",
            sampleSize: "Time frame: 1969-2013; Coverage: Bangladesh",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Event",
            lastUpdated: "December,2023",
        },
        {
            sl: 19,
            datasetName: "Seismic from BMD",
            objective:
                "Contains the date and time of occurrence, epicentre location, and earthquake magnitude and intensity.",
            unitOfObservation: "hr/minute/second, °N, °E, Richter scale, Km",
            sampleSize: "Time frame: 1918-2024; Coverage: Bangladesh",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Event",
            lastUpdated: "December,2023",
        },
        {
            sl: 20,
            datasetName: "Upper Air from BMD",
            objective:
                "Determines atmospheric pressure, temperature, relative humidity, dew-point, wind direction, and wind speed at various heights.",
            unitOfObservation: "Meter, hpa, °C, %, °C, ° (Degree), Knots",
            sampleSize: "Data from 5 meteorological stations nationwide for 18 years (2006-2024)",
            coverage: "National",
            link: "https://live6.bmd.gov.bd/p/Apply-for-Data",
            linkText: "BMD Data Request Info",
            dataFrequency: "Daily",
            lastUpdated: "March,2024",
        },
        {
            sl: 21,
            datasetName: "Water Level from Hydrology Bangladesh",
            objective: "Measures the high-low (non-tidal) water level of rivers on a daily basis.",
            unitOfObservation: "m",
            sampleSize: "Data from all rivers through various stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Daily",
            lastUpdated: "2019",
        },
        {
            sl: 22,
            datasetName: "Water discharge from Hydrology Bangladesh",
            objective: "Measures water discharge per record from rivers.",
            unitOfObservation: "(m)³/s",
            sampleSize: "Data from all rivers through various stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Per Record",
            lastUpdated: "From 2019 to 2021",
        },
        {
            sl: 23,
            datasetName: "Water Salinity from Hydrology Bangladesh",
            objective: "Measures water salinity from rivers.",
            unitOfObservation: "micromho/cm & Chloride PPM",
            sampleSize: "Data from all rivers through various stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Daily",
            lastUpdated: "From 2021",
        },
        {
            sl: 24,
            datasetName: "Water Sediment from Hydrology Bangladesh",
            objective: "Measures water sediment from rivers.",
            unitOfObservation: "Total sediment kg/s",
            sampleSize: "Data from all rivers through various stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Weekly",
            lastUpdated: "From 2021",
        },
        {
            sl: 25,
            datasetName: "Surface Water from Hydrology Bangladesh",
            objective:
                "Measures various surface water characteristics (temperature, iron, chlorine, TDS, etc.) from rivers.",
            unitOfObservation: "Temp (°C), PH, FE (Mg/L), TDS (Mg/L), etc.",
            sampleSize: "Data from all rivers through various stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Varies",
            lastUpdated: "From 2020",
        },
        {
            sl: 26,
            datasetName: "Ground Water Quality Hydrology Bangladesh",
            objective:
                "Measures ground water characteristics like temperature, depth, chlorine, turbidity, TDS, and dissolved oxygen from wells.",
            unitOfObservation: "Temp (°C), PH, TDS (Mg/L), Dissolved Oxygen (Mg/L), etc.",
            sampleSize: "Data from various wells through multiple stations",
            coverage: "National",
            link: "http://www.hydrology.bwdb.gov.bd/index.php",
            linkText: "Hydrology data request info",
            dataFrequency: "Varies",
            lastUpdated: "From 2020",
        },
        {
            sl: 27,
            datasetName: "Household Income and Expenditure Survey (HIES)",
            objective: "Measures household income, expenditure, and poverty trends in Bangladesh.",
            unitOfObservation: "Household",
            sampleSize: "14,400 households - two-stage stratified cluster sampling",
            coverage: "National",
            link: "http://203.112.218.101/en/microdata",
            linkText: "BBS Data request info",
            dataFrequency: "Every 5 years",
            lastUpdated: "2022",
        },
        {
            sl: 28,
            datasetName: "Demographic and Health Survey (DHS) Bangladesh",
            objective: "Provides data on fertility, family planning, maternal and child health, and nutrition.",
            unitOfObservation: "Household, Individual, Children (0-5), Woman (15-49)",
            sampleSize: "30,330 households, two-stage stratified cluster sample design",
            coverage: "National",
            link: "https://dhsprogram.com/data/dataset/Bangladesh_Standard-DHS_2022.cfm?flag=0",
            linkText: "DHS 2022 BD",
            dataFrequency: "Every 5 years",
            lastUpdated: "2022",
        },
        {
            sl: 29,
            datasetName: "Global Financial Inclusion (Global Findex) Database",
            objective:
                "Comprehensive database on financial inclusion; covers how adults save, borrow, make payments, and manage financial risks.",
            unitOfObservation: "Individual",
            sampleSize: "Sample size for Bangladesh is 1000",
            coverage: "National",
            link: "https://www.worldbank.org/en/publication/globalfindex/Data",
            linkText: "Data",
            dataFrequency: "Every 4 years",
            lastUpdated: "2021",
        },
        {
            sl: 30,
            datasetName: "Joint Protection Monitoring",
            objective:
                "Six UN agencies conducted protection monitoring for programming and advocacy through standardized evidence-based data collection.",
            unitOfObservation: "Incidents",
            sampleSize: "Cox's Bazar, 33 Rohingya camps",
            coverage: "Regional",
            link: "https://microdata.unhcr.org/index.php/auth/login/?destination=catalog/1048/get-microdata",
            linkText: "Data",
            dataFrequency: "Every quarter",
            lastUpdated: "Q4 2023",
        },
        {
            sl: 31,
            datasetName: "Youth Census in Cox’s Bazar",
            objective:
                "The project explores NEET status among youth, their skill training aspirations, and collects key demographic data to build a comprehensive profile.",
            unitOfObservation: "Individual",
            sampleSize: "Size: 23,477; Census (approached all households with target population aged 14-25)",
            coverage: "District: Cox’s Bazar, Upazila: Teknaf, Union: Hnila and Baharchhar",
            link: "mailto:khadija.akter@bracu.ac.bd",
            linkText: "Contact Person",
            dataFrequency: "N/A",
            lastUpdated: "April 2025",
        },
        {
            sl: 32,
            datasetName: "Arsenic in groundwater",
            objective: "Provides arsenic level in groundwater.",
            unitOfObservation: "micrograms per liter (µg/L)",
            sampleSize:
                "Data compiled from 4 surveys: 1. National Hydrochemical Survey 2. BWDB Water-Quality Monitoring Network Survey 3. Special Study Areas 4. Mandari Village Survey",
            coverage: "64 districts",
            link: "https://www2.bgs.ac.uk/groundwater/health/arsenic/Bangladesh/reports.html",
            linkText: "Data",
            dataFrequency: "N/A",
            lastUpdated: "February 2001",
        },
        {
            sl: 33,
            datasetName: "Bangladesh Environment and Migration Survey",
            objective:
                "Household & Individual-level migration and demographic data; tracks crossing numbers, locations, etc.",
            unitOfObservation: "Crossing numbers, etc.",
            sampleSize: "4,000 HHs; 23,500 Individuals",
            coverage: "Southwest Bangladesh",
            link: "https://www.icpsr.umich.edu/web/ICPSR/studies/38846/variables?start=100&STUDYQ=38846&EXTERNAL_FLAG=1&ARCHIVE=ICPSR&sort=VARLABEL_SORT%20asc&rows=50",
            linkText: "Data",
            dataFrequency: "N/A",
            lastUpdated: "2019",
        },
        {
            sl: 34,
            datasetName: "Bangladesh Integrated Household Survey (BIHS) 2019",
            objective: "Measures household agriculture, dietary intake, HH members, and women's empowerment.",
            unitOfObservation: "- Height, weight of HH members, Agriculture production, etc.",
            sampleSize:
                "-5604 households in 325 primary sampling units. (a) Nationally representative of rural Bangladesh; (b) Representative of rural areas of each administrative division",
            coverage: "Multiple divisions",
            link: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/NXKLZJ",
            linkText: "2019 Data",
            dataFrequency: "3 rounds completed",
            lastUpdated: "2019",
        },
    ];

    return (
        <div className="font-sans mx-5 my-5 bg-gray-100 text-gray-800 mt-[16vh]">
            <h1 className="text-3xl font-bold mb-5">Bangladesh Micro and Observational Data Directory</h1>
            <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-[#2d5f94] text-white">
                            <th className="p-3 text-left">SL</th>
                            <th className="p-3 text-left">Dataset Name</th>
                            <th className="p-3 text-left">Objective</th>
                            <th className="p-3 text-left">Unit of Observation</th>
                            <th className="p-3 text-left">Sample Size and Sampling Method</th>
                            <th className="p-3 text-left">Coverage</th>
                            <th className="p-3 text-left">Link</th>
                            <th className="p-3 text-left">Data Frequency</th>
                            <th className="p-3 text-left">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-blue-50 even:bg-gray-50">
                                <td className="p-3 border">{row.sl}</td>
                                <td className="p-3 border">{row.datasetName}</td>
                                <td className="p-3 border">{row.objective}</td>
                                <td className="p-3 border">{row.unitOfObservation}</td>
                                <td className="p-3 border">{row.sampleSize}</td>
                                <td className="p-3 border">{row.coverage}</td>
                                <td className="p-3 border">
                                    <a href={row.link} className="text-blue-600 hover:underline">
                                        {row.linkText}
                                    </a>
                                </td>
                                <td className="p-3 border">{row.dataFrequency}</td>
                                <td className="p-3 border">{row.lastUpdated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BangladeshDataTable;
