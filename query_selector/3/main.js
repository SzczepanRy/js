

const banner = document.querySelector("#page-banner")

console.log("#page-banner node type is :" + banner.nodeType)
console.log("#page-banner node name is :" + banner.nodeName)
console.log("#page-banner has chiled notes :" + banner.hasChildNodes())
const cloned_banner =  banner.cloneNode(true)
console.log(cloned_banner)
const cloned_banner2 =  banner.cloneNode(false)
console.log(cloned_banner2)