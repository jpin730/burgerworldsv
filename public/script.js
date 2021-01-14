const menuItems = [
    { name: "American Classic" },
    { name: "Mexican Power" },
    { name: "La Boluda" },
    { name: "La Cubana" },
    { name: "La Panafish" },
    { name: "La Brazileña" }
];

var navbarList = document.getElementById("navbar-list");
var menuSection = document.getElementById("menu-sections");
var navbarFragment = document.createDocumentFragment();
var menuSectionFragment = document.createDocumentFragment();

function getNavbarLI(item, id) {
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.classList.add("nav-link", "text-center", "p-4");
    a.innerHTML = item.name;
    a.href = "#" + id;
    li.appendChild(a);
    li.classList.add("nav-item", "active");
    return li;
}

function getMenuSection(item, id) {
    let img = document.createElement("img");
    let divVignette = document.createElement("div");
    let divContainer = document.createElement("div");
    let section = document.createElement("section");
    img.src = "/public/img/menu/" + item.name.toLowerCase().replace(" ", "") + ".jpg";
    img.alt = item.name + "Burger";
    img.classList.add("w-100");
    divVignette.classList.add("vignette");
    divContainer.appendChild(img);
    divContainer.appendChild(divVignette);
    divContainer.classList.add("container", "position-relative");
    section.appendChild(divContainer);
    section.classList.add("p-section");
    section.id = id;
    return section
}

menuItems.forEach(function (item) {
    let id = item.name.toLowerCase().replace(" ", "-");
    navbarFragment.appendChild(getNavbarLI(item, id));
    menuSectionFragment.appendChild(getMenuSection(item, id));
});

navbarList.appendChild(navbarFragment);
menuSection.appendChild(menuSectionFragment)