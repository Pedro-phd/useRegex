const useRegex = (regex,value) =>{
    if(regex === "telephone"){
        // eslint-disable-next-line no-useless-escape
        const regexTelephone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
        return regexTelephone.test(value)
    }if(regex === "email"){
        // eslint-disable-next-line no-useless-escape
        const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        return regexEmail.test(value)
    }else{
        console.log("Error useRegex")
        return false
    }
}

export default useRegex;