async function fetchAndDisplayBrands() {
  try {
    const response = await fetch("./data/BrandsRetailers.json");
    if (!response.ok)
      throw new Error("Network response was not ok: " + response.statusText);

    let data = await response.json();
    const cardContainer = document.getElementById("card-container");

    // Initial display of all brands
    displayBrands(data);

    // Event listeners for filtering
    document.getElementById("categorySelect").addEventListener("change", () => {
      filterAndDisplayBrands(data);
    });
    document.getElementById("searchInput").addEventListener("input", () => {
      filterAndDisplayBrands(data);
    });
  } catch (error) {
    console.error("Error fetching the JSON data:", error);
  }
}

// Function to filter and display brands
function filterAndDisplayBrands(data) {
  const category = document.getElementById("categorySelect").value;
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();

  // Filter data by category and search query
  const filteredData = data.filter((brand) => {
    const matchesCategory = category === "all" || brand.category === category;
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Display filtered data
  displayBrands(filteredData);
}

// Function to display brands or show "No results found" message
function displayBrands(brands) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing brands

  if (brands.length === 0) {
    cardContainer.innerHTML = `<p class="text-center text-gray-500">No results found</p>`;
    return;
  }

  brands.forEach((brand) => {
    const card = document.createElement("div");
    card.className =
      "relative bg-cover bg-center w-full h-screen m-4 rounded-xl";
    card.style.backgroundImage = `url('${brand.img}')`;

    card.innerHTML = `
        <a href="${brand.link}" target="_blank">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <div class="text-center text-white">
              <p class="text-lg md:text-xl">${brand.name}</p>
              <p class="text-sm">Visit our website</p>
            </div>
          </div>
        </a>
      `;

    cardContainer.appendChild(card);
  });
}

// Initialize fetch and display on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchAndDisplayBrands);

// -------------------For theme switcher-------------------
// Theme toggle with localStorage
const themeToggleButton = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load theme preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("darkMode", "disabled");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});
