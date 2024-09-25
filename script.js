const translations = {
    en: {
        home: "Home",
        attractions: "Attractions",
        title: "Welcome to Vienna",
        description: "Vienna, the capital of Austria, is known for its cultural heritage, stunning architecture, and historical significance.",
        titleAttractions: "Vienna Attractions",
        schonbrunn: "Schönbrunn Palace",
        schonbrunnDesc: "One of the most beautiful Baroque palaces in Europe.",
        schonbrunnLoc: "Location: Schönbrunner Schloßstraße 47, 1130 Wien, Austria",
        stStephen: "St. Stephen's Cathedral",
        stStephenDesc: "A Gothic masterpiece and Vienna's most important religious building.",
        stStephenLoc: "Location: Stephansplatz 3, 1010 Wien, Austria",
        belvedere: "Belvedere Palace",
        belvedereDesc: "A historic building complex consisting of two Baroque palaces.",
        belvedereLoc: "Location: Prinz Eugen-Straße 27, 1030 Wien, Austria"
    },
    de: {
        home: "Startseite",
        attractions: "Sehenswürdigkeiten",
        title: "Willkommen in Wien",
        description: "Wien, die Hauptstadt von Österreich, ist bekannt für ihr kulturelles Erbe, ihre beeindruckende Architektur und ihre historische Bedeutung.",
        titleAttractions: "Wiener Sehenswürdigkeiten",
        schonbrunn: "Schloss Schönbrunn",
        schonbrunnDesc: "Eines der schönsten Barockschlösser Europas.",
        schonbrunnLoc: "Ort: Schönbrunner Schloßstraße 47, 1130 Wien, Österreich",
        stStephen: "Stephansdom",
        stStephenDesc: "Ein gotisches Meisterwerk und das wichtigste religiöse Gebäude Wiens.",
        stStephenLoc: "Ort: Stephansplatz 3, 1010 Wien, Österreich",
        belvedere: "Schloss Belvedere",
        belvedereDesc: "Ein historischer Gebäudekomplex, bestehend aus zwei Barockpalästen.",
        belvedereLoc: "Ort: Prinz Eugen-Straße 27, 1030 Wien, Österreich"
    }
};

function switchLanguage(lang) {
    // Перевод элементов меню
    document.getElementById('home').textContent = translations[lang].home;
    document.getElementById('attractions').textContent = translations[lang].attractions;
    
    // Перевод заголовков и описаний на главной странице
    if (document.getElementById('title')) {
        document.getElementById('title').textContent = translations[lang].title;
    }
    if (document.getElementById('description')) {
        document.getElementById('description').textContent = translations[lang].description;
    }
    
    // Перевод заголовков и описаний на странице с достопримечательностями
    if (document.getElementById('schonbrunn')) {
        document.getElementById('title').textContent = translations[lang].titleAttractions;
        document.getElementById('schonbrunn').textContent = translations[lang].schonbrunn;
        document.getElementById('schonbrunn-desc').textContent = translations[lang].schonbrunnDesc;
        document.getElementById('schonbrunn-loc').textContent = translations[lang].schonbrunnLoc;
        document.getElementById('st-stephen').textContent = translations[lang].stStephen;
        document.getElementById('st-stephen-desc').textContent = translations[lang].stStephenDesc;
        document.getElementById('st-stephen-loc').textContent = translations[lang].stStephenLoc;
        document.getElementById('belvedere').textContent = translations[lang].belvedere;
        document.getElementById('belvedere-desc').textContent = translations[lang].belvedereDesc;
        document.getElementById('belvedere-loc').textContent = translations[lang].belvedereLoc;
    }
}
