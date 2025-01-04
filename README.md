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
