var navbarList = document.getElementById("navbar-list");
var menuSection = document.getElementById("menu-sections");
var fragment = document.createDocumentFragment();

const menuItems = [
    { name: "American Classic" },
    { name: "Mexican Power" },
    { name: "La Boluda" },
    { name: "La Cubana" },
    { name: "La Panafish" },
    { name: "La Brazileña" }
];

// <section id="american-classic" class="p-section">
//    <div class="container position-relative">
//        <img src="/public/img/menu/americanclassic.jpg" alt="American Classic Burger" class="w-100">
//        <div class="vignette"></div>
//    </div>
// </div></section>

menuItems.forEach(function (item) {
        // Navbar List
        let a = document.createElement("a");
    let li = document.createElement("li");
    a.classList.add("nav-link", "text-center", "p-4");
    a.innerHTML = item.name;
    a.href = "#" + item.name.toLowerCase().replace(" ", "-");
    li.appendChild(a);
    li.classList.add("nav-item", "active");
    fragment.appendChild(li);

    // Menu Section
    let section = document.createElement("section");
});

navbarList.appendChild(fragment);