// Toggle mobile navbar
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function normalizeCompanyName(name) {
    return name.trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}
// Internship Checker
const redList = {
    "codesoft": "Multiple concerns have been raised regarding the legitimacy of their projects.",
    "internmart": "Reported to issue fake certificates with little to no real work involved.",
    "skillcrafttech": "Offers only 4 basic projects, payment is required solely for certification.",
    "skillcrafttechnology": "Offers only 4 basic projects, payment is required solely for certification.",
    "skillcraft": "Offers only 4 basic projects, payment is required solely for certification.",
    "bharat": "Involves basic projects, certificate is issued only upon payment.",
    "bharath": "Involves basic projects, certificate is issued only upon payment.",
    "acmegrade": "Primarily a course, not a genuine internship experience.",
    "Intrnforte": "Only provides courses and basic projects like Tic-Tac-Toe; lacks real-world work.",
    "bharatintern": "Involves basic projects, certificate is issued only upon payment.",
    "plasmid": "Provides simple projects and charges money for the certificate.",
    "prodigy": "Provides simple projects and charges money for the certificate.",
    "prodigyinfo": "Provides simple projects and charges money for the certificate.",
    "prodigyinfotech": "Provides simple projects and charges money for the certificate.",
    "codealpha": "Lacks mentorship or supervision, requires payment for certification.",
    "octanet": "Demands payment for certificate issuance.",
    "encryptix": "Projects are basic, and certification comes with a fee.",
    "oasisinfobyte": "Offers simple projects and charges for certificates.",
    "oasisinfo": "Offers simple projects and charges for certificates.",
    "internpe": "Provides basic projects and requires payment for the certificate.",
    "codeevo": "Basic project work with payment required for certification.",
    "learnsmasher": "Limited to simple projects, certification is behind a paywall.",
    "coderscave": "Involves simple projects and charges for the certificate.",
    "coincent": "Only basic projects, certificate requires payment.",
    "1stop": "Offers simple projects with a paid certification model.",
    "corizo": "Project work is minimal, charges money for certificate issuance."
};


function checkCompany() {
    let searchInput = document.getElementById("companyName");  // Define the search input field
    let company = normalizeCompanyName(searchInput.value);
    let resultDiv = document.getElementById("result");
    if (company == "")
    {
        resultDiv.innerHTML = `<p> Enter a Company Name</p>`;
    }
    else if (company in redList) {
        resultDiv.innerHTML = `<p style='color: red; font-weight: bold;'>⚠️ ${company.toUpperCase()} is in our RED LIST!</p><p>${redList[company]}</p>`;
    } else {
        resultDiv.innerHTML = `<p style='color: green;'>✅ No scam reports found for ${company.toUpperCase()}.</p><p style="color: yellow;">But always do your own research.</p>`;
    }
    searchInput.value = "";
}
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    checkCompany();  
});