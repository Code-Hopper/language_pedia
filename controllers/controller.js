import { languages } from "../database.js"

let getHome = (req, res) => {
    res.status(200).json({
        message: "Welcome to languagePedia",

        actions: [
            { method: "get", route: "/getalllanguages", path: false, query: false },

            { method: "get", route: "/language/name/:name", path: "name", query: false },

            { method: "get", route: "/language/id:/id", path: "id", query: false },

            { method: "get", route: "/languages/scope?scope='value'", path: false, query: "scope", scope: ["web development", "mobile development", "database management", "engineering simulations", "system administration", "system scripting", "data analysis", "statistics", "system programming", "game development", "big data", "enterprise applications", "cloud development", "game development", "desktop applications", "data science", "AI", "iOS development", "android development"] },

            { method: "get", route: "/languages/scope?level='value'", path: false, query: "level", level: ["basic", "higher", "mid"] },

            { method: "get", route: "/languages/scope?duration_month_limit='value'", path: false, query: "duration_month_limit", value: "less than what" },

            { method: "get", route: "/languages/scope?forBeginner='value'", path: false, query: "forBeginner", value: "true/false" },

            { method: "get", route: "/languages/scope?difficuly='value'", path: false, query: "forBeginner", value: "easy/mid/hard" }
        ]
    })
}


let getalllanguages = (req, res) => {
    res.status(200).json({ length: languages.length, languages })
}

let getLanguageByName = (req, res) => {

    let { name } = req.params

    console.log(name)

    if (!name) {
        res.status(400).json({ result: "invalid or missing name !" })
    }

    let result = languages.filter((language) => {
        return language.name.toLowerCase() == name.toLowerCase()
    })

    if (result.length != 0) {
        res.status(200).json({ message: `you were looking for ${name} language`, result: result })
    } else {
        res.status(404).json({ message: `you were looking for ${name} language`, result: "language you were looking for is not found !" })
    }
}

let getLanguageById = (req, res) => {

    let { id } = req.params

    console.log(id)

    if (!id) {
        res.status(400).json({ result: "invalid or missing id !" })
    }

    let result = languages.filter((language) => {
        return language.id == id
    })

    if (result.length != 0) {
        res.status(200).json({ message: `you were looking for id ${id} language`, result: result })
    } else {
        res.status(404).json({ message: `you were looking for id ${id} language`, result: "id does not exists !" })
    }
}

export { getHome, getalllanguages, getLanguageByName,getLanguageById }