export default function(app, inject){
    const scrollToTop =(identifier) => {
        console.log("scroll", identifier)
        const component = document.querySelector(identifier);
        if(!component){
            return
        }
        window.scrollTo({
            top: component.offsetTop - 72,
            behavior: 'smooth'
        })
    }
    inject('scrollToTop', identifier => scrollToTop(identifier))
}