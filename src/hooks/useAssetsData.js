import { useQuery } from "react-query";
import { fetchLocationData, fetchAssetsData } from "../api/api";

export const useLocations = (companyId) => {
    return useQuery(
        ["locations", companyId],
        () => fetchLocationData(companyId),
        {
            enabled: !!companyId, // Only run the query if companyId is truthy
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
            onError: (error) => {
                console.error("Error fetching location data:", error);
            },
        }
    );
};

export const useAssets = (companyId) => {
    return useQuery(
        ["assets", companyId],
        () => fetchAssetsData(companyId),
        {
            enabled: !!companyId, // Only run the query if companyId is truthy
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
            onError: (error) => {
                console.error("Error fetching assets data:", error);
            },
        }
    );
};