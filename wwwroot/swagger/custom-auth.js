document.addEventListener("DOMContentLoaded", function () {
    const checkSwaggerInterval = setInterval(() => {
        console.log("checkSwaggerInterval");
        if (window.ui) {
            clearInterval(checkSwaggerInterval); 

            const originalFetch = window.fetch;
            window.fetch = async function (...args) {
                const response = await originalFetch(...args);

                if (args[0].includes("/api/account/login") && response.ok) {
                    const responseData = await response.clone().json();
                    
                    if (responseData.data && responseData.data.token) {
                        const token = responseData.data.token;

                        window.ui.preauthorizeApiKey("Bearer", `Bearer ${token}`);
                        console.log("JWT token");
                    }
                }
                return response;
            };
        }
    }, 500);
});
