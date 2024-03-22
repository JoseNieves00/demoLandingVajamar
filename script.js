const home_page = document.getElementsByClassName("home")[0]
const explore_page = document.getElementsByClassName("explore")[0]
const rooms_page = document.getElementsByClassName("rooms")[0]
const about_page = document.getElementsByClassName("about")[0]
const contact_page = document.getElementsByClassName("contact")[0]

const links_nav = document.getElementsByClassName("links-nav")
const home_nav = document.getElementsByClassName("links-nav")[0]
const explore_nav = document.getElementsByClassName("links-nav")[1]
const rooms_nav = document.getElementsByClassName("links-nav")[2]
const about_nav = document.getElementsByClassName("links-nav")[3]
const contact_nav = document.getElementsByClassName("links-nav")[4]

const footer_navs = document.getElementsByClassName("nav-footer")

const nav_mobile = document.getElementsByClassName("nav-mobile")
const home_navMobile = document.getElementsByClassName("nav-mobile")[0]
const explore_navMobile = document.getElementsByClassName("nav-mobile")[1]
const rooms_navMobile = document.getElementsByClassName("nav-mobile")[2]
const about_navMobile = document.getElementsByClassName("nav-mobile")[3]
const contact_navMobile = document.getElementsByClassName("nav-mobile")[4]


const select_cuarto = document.getElementById("select-cuarto")
const select_personas = document.getElementById("select-personas")
const ingreso_date = document.getElementById("ingreso-date")
const salida_date = document.getElementById("salida-date")
const button_booking = document.getElementsByClassName("button-booking")[0]

const filter_cont = document.getElementsByClassName("filter")[0]
const contenido = document.getElementsByClassName("contenido")[0]
const contenedor = document.getElementsByClassName("contenedor")[0]

const menu_icon= document.getElementsByClassName("menu-icon")[0]
const exit_icon= document.getElementsByClassName("exit-icon")[0]
const menu_mobile= document.getElementsByClassName("menu-mobile")[0]



console.log(nav_mobile)

home_nav.className = "nav-active"
home_navMobile.className = "nav-active"

filter_cont.style.display = "none";
exit_icon.style.display = "none";
explore_page.style.display = "none";
rooms_page.style.display = "none";
about_page.style.display = "none";
contact_page.style.display = "none";

ingreso_date.value = new Date(Date.now())

const sections = [home_page, explore_page, rooms_page, about_page, contact_page]
const navs = [home_nav, explore_nav, rooms_nav, about_nav, contact_nav]
const sectionsM = ["home", "explore", "rooms", "about", "contact"]


ingreso_date.value = fechaActual();

salida_date.value = fechaFictisia();

menu_icon.addEventListener("click",()=>{
    abrirMenu()
})

exit_icon.addEventListener("click",()=>{
    cerrarMenu()
})


for (let i = 0; i < sections.length; i++) {
    const index = i
    let section = links_nav[index].textContent.toLowerCase()
    links_nav[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeSections(section)
        changeNavs(section)
    })
}

for (let i = 0; i < sections.length; i++) {
    const index = i
    let section = footer_navs[index].textContent.toLowerCase()
    footer_navs[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeSections(section)
        changeNavs(section)
    })
}

for (let i = 0; i < nav_mobile.length; i++) {
    const index = i
    let section = nav_mobile[i].textContent.toLowerCase()
    nav_mobile[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeNavs(section)
        changeSections(section)
    })
}

button_booking.addEventListener("click",()=>{
    let tCuarto= select_cuarto.value;
    let personas = select_personas.value
    let fIngreso= ingreso_date.value;
    let fSalida = salida_date.value;
    enviarReserva(tCuarto,personas,fIngreso,fSalida)
})


function changeSections(section) {
    limpiadoSections()
    for (let i = 0; i < sections.length; i++) {
        if (sectionsM[i] == section) {
            const index = i
            sections[index].style.display = "block"
        }
        cerrarMenu()
    }
}

function changeNavs(section) {
    limpiadoNavs()
    for (let i = 0; i < navs.length; i++) {
        if (navs[i].getAttribute("id") == section) {
            const index = i
            navs[index].className = "nav-active"
        }
    }
}

function limpiadoSections() {
    home_page.style.display = "none";
    explore_page.style.display = "none";
    rooms_page.style.display = "none";
    about_page.style.display = "none";
    contact_page.style.display = "none";
}

function limpiadoNavs() {
    home_nav.className = "links-nav"
    explore_nav.className = "links-nav"
    rooms_nav.className = "links-nav"
    about_nav.className = "links-nav"
    contact_nav.className = "links-nav"
}

function limpiadoNavsMobile() {
    home_navMobile.className = "links-nav"
    explore_navMobile.className = "links-nav"
    rooms_navMobile.className = "links-nav"
    about_navMobile.className = "links-nav"
    contact_navMobile.className = "links-nav"
}

function fechaActual() {
    let fechaActual = new Date();

    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth() + 1;
    let anioActual = fechaActual.getFullYear();

    if (diaActual < 10) {
        diaActual = '0' + diaActual;
    }

    if (mesActual < 10) {
        mesActual = '0' + mesActual;
    }

    let fechaDefaultIngreso = anioActual + '-' + mesActual + '-' + diaActual;

    return fechaDefaultIngreso;
}

function fechaFictisia() {
    let fechaFutura = new Date();
    fechaFutura.setDate(fechaFutura.getDate() + 7);

    let diaFutura = fechaFutura.getDate();
    let mesFutura = fechaFutura.getMonth() + 1;
    let anioFutura = fechaFutura.getFullYear();

    if (diaFutura < 10) {
        diaFutura = '0' + diaFutura;
    }

    if (mesFutura < 10) {
        mesFutura = '0' + mesFutura;
    }

    let fechaDefaultSalida = anioFutura + '-' + mesFutura + '-' + diaFutura;

    return fechaDefaultSalida;
}

function enviarReserva(tCuarto,personas,fIngreso,fSalida) {
    alert(`Reserva \n  -Tipo de cuarto: ${tCuarto} \n  -Personas: ${personas} \n  -Fecha de Ingreso: ${fIngreso} \n  -Fecha de Salida: ${fSalida}`)
}
function bloquearDesplazamiento() {
    scrollYPos = window.scrollY; 
    document.body.style.position = 'fixed'; // Fijar la posición del cuerpo
    document.body.style.overflowY = 'hidden';
    document.body.style.top = -scrollYPos + 'px'
}

function desbloquearDesplazamiento() {
    document.body.style.position = ''; // Restaurar la posición del cuerpo
    document.body.style.overflowY = ''; // Restaurar el desplazamiento vertical
    document.body.style.top = ''; // Restaurar la posición del cuerpo
    window.scrollTo(0, scrollYPos); // Desplazar la ventana a la posición original
}

function abrirMenu(){
    filter_cont.style.display="block"
    menu_mobile.style.display="flex"
    menu_icon.style.display="none"
    exit_icon.style.display="block"
    bloquearDesplazamiento()
}

function cerrarMenu(){
    filter_cont.style.display="none"
    menu_mobile.style.display="none"
    menu_icon.style.display="block"
    exit_icon.style.display="none"
    desbloquearDesplazamiento()
}