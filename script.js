// Toggle mobile navbar
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Internship Checker
const redList = {
    "codesoft": "This company has raised multiple red flags regarding project legitimacy.",
    "internmart": "Several reports suggest fake certificates and no real work.",
};


function checkCompany() {
    let searchInput = document.getElementById("companyName");  // Define the search input field
    let company = searchInput.value.trim().toLowerCase();
    let resultDiv = document.getElementById("result");

    if (company in redList) {
        resultDiv.innerHTML = `<p style='color: red; font-weight: bold;'>⚠️ ${company.toUpperCase()} is in our RED LIST!</p><p>${redList[company]}</p>`;
    } else {
        resultDiv.innerHTML = `<p style='color: green;'>✅ No scam reports found for ${company.toUpperCase()}.</p><p style="color: yellow;">But always do your own research.</p>`;
    }

    // Clear the search bar
    searchInput.value = "";
}

