const apiUrl = 'https://fake-api.tractian.com/';

export async function fetchCompanyData() {
    try {
        const response = await fetch(`${apiUrl}companies`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export async function fetchLocationData(companyId) {
    try {
        const response = await fetch(`${apiUrl}companies/${companyId}/locations`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export async function fetchAssetsData(companyId) {
    try {
        const response = await fetch(`${apiUrl}companies/${companyId}/assets`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}