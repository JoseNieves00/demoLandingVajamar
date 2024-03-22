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

const header = document.getElementsByTagName("header")[0]
const footer = document.getElementsByTagName("footer")[0]

const button_rooms = document.getElementsByClassName("button-rooms")[0]
const button_inst=document.getElementsByClassName("button-inst")[0]

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



for (let i = 0; i < links_nav.length; i++) {
    const index = i
    let section = links_nav[index].textContent.toLowerCase()
    links_nav[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeSections(section)
    })
}


for (let i = 0; i < sections.length; i++) {
    const index = i
    let section = footer_navs[index].textContent.toLowerCase()
    footer_navs[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeSections(section)  
    })
}

for (let i = 0; i < nav_mobile.length; i++) {
    const index = i
    let section = nav_mobile[i].textContent.toLowerCase()
    nav_mobile[i].addEventListener("click", (e) => {
        e.preventDefault()
        changeSectionsMobile(section)
    })
}

button_booking.addEventListener("click",()=>{
    let tCuarto= select_cuarto.value;
    let personas = select_personas.value
    let fIngreso= ingreso_date.value;
    let fSalida = salida_date.value;
    enviarReserva(tCuarto,personas,fIngreso,fSalida)
})

button_rooms.addEventListener("click",()=>{
    scroll()
})

button_inst.addEventListener("click",()=>{
    let section = explore_nav.textContent.toLowerCase()
    changeSections(section)
})


function changeSections(section) {
    limpiadoSections()
    for (let i = 0; i < sections.length; i++) {
        if (sectionsM[i] == section) {
            const index = i
            sections[index].style.display = "block"
            navs[i].className="nav-active"
        }else{
            navs[i].className="links-nav"
        }
        scrollUp()
    }
}

function changeSectionsMobile(section) {
    limpiadoSections()
    limpiadoNavsMobile()
    for (let i = 0; i < sections.length; i++) {
        if (sectionsM[i] == section) {
            const index = i
            sections[index].style.display = "block"
            console.log(nav_mobile[i])
            nav_mobile[i].className="nav-active"
        }
        scrollUp()
        cerrarMenu()
    }
}

function limpiadoSections() {
    home_page.style.display = "none";
    explore_page.style.display = "none";
    rooms_page.style.display = "none";
    about_page.style.display = "none";
    contact_page.style.display = "none";
}

function limpiadoNavsMobile() {
    home_navMobile.className = "nav-mobile"
    explore_navMobile.className = "nav-mobile"
    rooms_navMobile.className = "nav-mobile"
    about_navMobile.className = "nav-mobile"
    contact_navMobile.className = "nav-mobile"
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
    scrollYPos = window.scrollY; 
    document.body.style.position = ''; // Restaurar la posición del cuerpo
    document.body.style.overflowY = ''; // Restaurar el desplazamiento vertical
    document.body.style.top = ''; // Restaurar la posición del cuerpo
    window.scrollTo(0, scrollYPos); // Desplazar la ventana a la posición original
}

function abrirMenu(){
    filter_cont.style.display="block"
    menu_mobile.style.display="flex"
    menu_icon.style.display="none"
    exit_icon.style.display="flex"
    bloquearDesplazamiento()
}

function cerrarMenu(){
    filter_cont.style.display="none"
    menu_mobile.style.display="none"
    menu_icon.style.display="flex"
    exit_icon.style.display="none"
    desbloquearDesplazamiento()
}

function scroll(){
        const cont_rooms = document.getElementsByClassName('cont-rooms')[0];
        const posicion = cont_rooms.getBoundingClientRect();
    
        window.scrollTo({
            top: posicion.top + window.scrollY, behavior:'smooth'
        });
}

function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });  
}