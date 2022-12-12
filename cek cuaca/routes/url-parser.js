const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLocaleLowerCase();
        return `/${url}`;
    },


}

export default UrlParser;