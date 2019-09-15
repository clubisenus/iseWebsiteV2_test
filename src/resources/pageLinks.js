/*
central record of websites we link to
makes it easier to set relative links
let xyz = domain+"xyz"
*/

//external domains
let instagram = "https://www.instagram.com/nus_ise/"
let facebook = "https://www.facebook.com/pg/NUSISEClub/"
let linkedin = "https://www.linkedin.com/company/14617038/"
let email = "mailto:club.ise.nus@gmail.com"
//internal domains
let domain = "http://localhost:3000/"   //for development
//let domain = "https://nusiseclub.com/"    //for deployment
let about = domain + "about"
let mc18 = domain + "18mc"
let shop = domain + "shop"
let sponsors = domain + "sponsorship"
let contact = domain + "contact"
//event pages
let foc = domain + "isefoc"
let day = domain + "iseday"
let night = domain + "isenight"
let cycling = domain + "isenightcycling"
let welfare = domain + "welfare"
let cip = domain + "cip"
let careertalk = domain + "careertalk"
let bacc = domain + "nusisebacc"

let pageLinks = {
    external: {
        instagram,
        facebook,
        linkedin,
        email
    },
    internal: {
        domain,
        about,
        mc18,
        shop,
        sponsors,
        contact
    },
    events: {
        foc,
        day,
        night,
        cycling,
        welfare,
        cip,
        careertalk,
        bacc
    }
}
export default pageLinks