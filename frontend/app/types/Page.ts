


type Page = {
    title:string,
    slug:{
        current:string
    },
    image:{
        url:string
    }
    excerpt:string,
    body:[any],
    shouldShowOnHome:true
}

export default Page