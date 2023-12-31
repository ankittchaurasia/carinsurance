export const result = {
    "Gender": {
        "Female": 0.038229783550630426,
        "Male": 0.03331855245815571
    },
    "Car Model": {
        "93": 0.0031637527466499087,
        "95": -0.007791682691650824,
        "3 Series": -0.002555221765436897,
        "92x": 0.0063368327134906526,
        "A3": 0.006392014840234467,
        "A5": 0.001417746508211059,
        "Accord": -0.009799422259312502,
        "C300": 0.018597567461473213,
        "CRV": 0.017799576832460976,
        "Camry": -0.017501667281947624,
        "Civic": -0.0051241962509386485,
        "Corolla": 0.000758839473211499,
        "E400": -0.028329232440504667,
        "Escape": 0.02386078463410389,
        "F150": -0.013396598782875779,
        "Forrestor": 0.014828691471840355,
        "Fusion": 0.002084875826976107,
        "Grand Cherokee": -0.005015313604108503,
        "Highlander": 0.011207959494312586,
        "Impreza": -0.009505152637847921,
        "Jetta": 0.002930257549029545,
        "Legacy": -0.0005076752634958888,
        "M5": -0.01168881878248222,
        "MDX": -0.015641561026909705,
        "ML350": 0.016259017560402614,
        "Malibu": -0.004115476219662169,
        "Maxima": 0.0035130573772337984,
        "Neon": 0.0026879604501256235,
        "Passat": -0.002854260495793893,
        "Pathfinder": 0.0037701063057422406,
        "RAM": 0.0064232803276612176,
        "RSX": 0.02191344910435227,
        "Silverado": 0.004984451083593164,
        "TL": 0.002133461204383491,
        "Tahoe": 0.004902915877121687,
        "Ultima": -0.0054317052830520195,
        "Wrangler": 0.007216874037252447,
        "X5": 0.002441022689201234,
        "X6": 0.025181825225741458
    },
    "Car Company": {
        "Acura": 0.00840534928182607,
        "Audi": 0.007809761348445527,
        "BMW": 0.013378807367023588,
        "Chevrolet": 0.005771890741052677,
        "Dodge": 0.009111240777786852,
        "Ford": 0.012549061678204187,
        "Honda": 0.002875958322209789,
        "Jeep": 0.002201560433143978,
        "Mercedes-Benz": 0.00652735258137122,
        "Nissan": 0.001851458399924055,
        "Saab": 0.0017089027684896944,
        "Subaru": 0.0048158635704965615,
        "Toyota": -0.00553486831442356,
        "Volkswagen": 0.00007599705323564321
    },
    "Occupation": {
        "Administrative and Clerical": -0.011275734141634363,
        "Armed Forces": 0.0056655388188937145,
        "Artisans and Professional Specialties": 0.007808441332545262,
        "Management Roles or Transportation": 0.014026990576247293,
        "Sales or Other Services": -0.005146235115151106,
        "Handlers and Cleaners": 0.02670542957443353,
        "Machine Operations and Inspection": 0.009693105090485403,
        "Protective and Technical Support": 0.003266993243959636
    },
    "Education": {
        "Associate": 0.0012101493357719556,
        "College": 0.008315585621959698,
        "High School": 0.007252745439660681,
        "JD": 0.00707290368359593,
        "MD": 0.01923338794083261,
        "Masters": 0.012674776820427417,
        "PhD": 0.015788787166537914
    },
    "State": {
        "Illinois": 0.022328865611467956,
        "Indiana": 0.02481985096981051,
        "Ohio": 0.024399619427507742
    }
}

export const label1 = ['Specify your Gender','Your Education Level','Your Occupation']
export const stateData = [
    {value:"Illinois", label:"Illinois", image:"/flags/Illinois.png"},
    {value:"Indiana", label:"Indiana", image:"/flags/Indiana.png"},
    {value:"Ohio", label:"Ohio", image:"/flags/Ohio.png"},
]

export const car_models = {
    "Acura": ["TL", "RSX", "MDX"],
    "Audi": ["A5", "A3"],
    "BMW": ["3 Series", "X5", "M5", "X6"],
    "Chevrolet": ["Malibu", "Silverado", "Tahoe"],
    "Dodge": ["Neon", "RAM"],
    "Ford": ["Escape", "F150", "Fusion"],
    "Honda": ["Accord", "Civic", "CRV"],
    "Jeep": ["Wrangler", "Grand Cherokee"],
    "Mercedes": ["E400", "ML350", "C300"],
    "Nissan": ["Maxima", "Pathfinder", "Ultima"],
    "Saab": ["93", "95", "92x"],
    "Subaru": ["Impreza", "Legacy", "Forrestor"],
    "Toyota": ["Camry", "Highlander", "Corolla"],
    "Volkswagen": ["Jetta", "Passat"]
}

export const basePricefromModel = {
    "MDX": 44500,
    "RSX": 22000,
    "TL": 23483,
    "A3": 34700,
    "A5": 42000,
    "3 Series": 42690,
    "M5": 89575,
    "X5": 49970,
    "X6": 47799,
    "Malibu": 17080,
    "Silverado": 19863,
    "Tahoe": 44000,
    "Neon": 12840,
    "RAM": 22000,
    "Escape": 19995,
    "F150": 23290,
    "Fusion": 21270,
    "Accord": 20795,
    "Civic": 20010,
    "CRV": 25250,
    "Grand Cherokee": 44640,
    "Wrangler": 20795,
    "C300": 44850,
    "E400": 50000,
    "ML350": 37950,
    "Maxima": 35120,
    "Pathfinder": 28000,
    "Ultima": 25490,
    "92x": 23000,
    "93": 34340,
    "95": 31000,
    "Forrestor": 21390,
    "Impreza": 19220,
    "Legacy": 22790,
    "Camry": 22000,
    "Corolla": 14220,
    "Highlander": 14000,
    "Jetta": 19500,
    "Passat": 21280,
}


export const flags = {
    "9ff": {
        "name": "9ff",
        "logotype": {
            "uri": "https://vl.imgix.net/img/9ff-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7778
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/9ff-logo-2560x1400.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 46975
            }
        ]
    },
    "abadal": {
        "name": "Abadal",
        "logotype": {
            "uri": "https://vl.imgix.net/img/abadal-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9817
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/abadal-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 208837
            }
        ]
    },
    "abarth": {
        "name": "Abarth",
        "logotype": {
            "uri": "https://vl.imgix.net/img/abarth-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12450
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/abarth-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 184160
            }
        ]
    },
    "abbott-detroit": {
        "name": "Abbott Detroit",
        "logotype": {
            "uri": "https://vl.imgix.net/img/abbott-detroit-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10050
        },
        "alternatives": []
    },
    "abt-sportsline": {
        "name": "ABT Sportsline",
        "logotype": {
            "uri": "https://vl.imgix.net/img/abt-sportsline-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5327
        },
        "alternatives": []
    },
    "ac": {
        "name": "AC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11921
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ac-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 161682
            }
        ]
    },
    "acura": {
        "name": "Acura",
        "logotype": {
            "uri": "https://vl.imgix.net/img/acura-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10952
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/acura-logo-1990-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 34330
            }
        ]
    },
    "adler": {
        "name": "Adler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/adler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11091
        },
        "alternatives": []
    },
    "aito": {
        "name": "Aito",
        "logotype": {
            "uri": "https://vl.imgix.net/img/aito-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1083
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/aito-640x72.png",
                "width": 640,
                "height": 72,
                "mime": "image/png",
                "transparent": true,
                "size": 2538
            }
        ]
    },
    "aixam": {
        "name": "Aixam",
        "logotype": {
            "uri": "https://vl.imgix.net/img/aixam-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9521
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/aixam-logo-2010-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 285957
            }
        ]
    },
    "alfa-romeo": {
        "name": "Alfa Romeo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/alfa-romeo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14622
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/alfa-romeo-logo-2015-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 262051
            }
        ]
    },
    "allard": {
        "name": "Allard Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/allard-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8067
        },
        "alternatives": []
    },
    "alpina": {
        "name": "Alpina",
        "logotype": {
            "uri": "https://vl.imgix.net/img/alpina-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11497
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/alpina-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 137070
            }
        ]
    },
    "alpine": {
        "name": "Alpine",
        "logotype": {
            "uri": "https://vl.imgix.net/img/alpine-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1988
        },
        "alternatives": []
    },
    "alta": {
        "name": "Alta",
        "logotype": {
            "uri": "https://vl.imgix.net/img/alta-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6277
        },
        "alternatives": []
    },
    "alvis": {
        "name": "Alvis",
        "logotype": {
            "uri": "https://vl.imgix.net/img/alvis-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3511
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/alvis-logo-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 17126
            }
        ]
    },
    "american-motors": {
        "name": "American Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/american-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2371
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/american-motors-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 38462
            }
        ]
    },
    "amg": {
        "name": "AMG",
        "logotype": {
            "uri": "https://vl.imgix.net/img/amg-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1296
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/amg-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 141313
            }
        ]
    },
    "arash": {
        "name": "Arash",
        "logotype": {
            "uri": "https://vl.imgix.net/img/arash-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9457
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/arash-logo-640x410.png",
                "width": 640,
                "height": 410,
                "mime": "image/png",
                "transparent": true,
                "size": 20891
            }
        ]
    },
    "arcfox": {
        "name": "Arcfox",
        "logotype": {
            "uri": "https://vl.imgix.net/img/arcfox-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 20535
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/arcfox-367x311.png",
                "width": 367,
                "height": 311,
                "mime": "image/png",
                "transparent": true,
                "size": 46752
            }
        ]
    },
    "ariel": {
        "name": "Ariel",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ariel-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2495
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ariel-logo-2000-2500x2500.png",
                "width": 2500,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 44285
            }
        ]
    },
    "aro": {
        "name": "ARO",
        "logotype": {
            "uri": "https://vl.imgix.net/img/aro-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4974
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/aro-logo-640x567.jpg",
                "width": 640,
                "height": 567,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 24121
            }
        ]
    },
    "arrinera": {
        "name": "Arrinera",
        "logotype": {
            "uri": "https://vl.imgix.net/img/arrinera-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4154
        },
        "alternatives": []
    },
    "artega": {
        "name": "Artega",
        "logotype": {
            "uri": "https://vl.imgix.net/img/artega-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7082
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/artega-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 192006
            }
        ]
    },
    "ascari": {
        "name": "Ascari",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ascari-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2533
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ascari-logo-1995-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 25700
            }
        ]
    },
    "asia": {
        "name": "Asia Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/asia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3914
        },
        "alternatives": []
    },
    "askam": {
        "name": "Askam",
        "logotype": {
            "uri": "https://vl.imgix.net/img/askam-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2746
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/askam-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 15914
            }
        ]
    },
    "aston-martin": {
        "name": "Aston Martin",
        "logotype": {
            "uri": "https://vl.imgix.net/img/aston-martin-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5205
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/aston-martin-logo-2003-6000x3000.png",
                "width": 6000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 166584
            }
        ]
    },
    "atalanta-motors": {
        "name": "Atalanta Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/atalanta-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2014
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/atalanta-motors-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 19932
            }
        ]
    },
    "auburn": {
        "name": "Auburn",
        "logotype": {
            "uri": "https://vl.imgix.net/img/auburn-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 21018
        },
        "alternatives": []
    },
    "audi": {
        "name": "Audi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/audi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7989
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/audi-logo-1999-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 109738
            }
        ]
    },
    "aurus": {
        "name": "Aurus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/aurus-logo.jpg",
            "width": 240,
            "height": 180,
            "mime": "image/jpeg",
            "transparent": false,
            "size": 8967
        },
        "alternatives": []
    },
    "austin": {
        "name": "Austin",
        "logotype": {
            "uri": "https://vl.imgix.net/img/austin-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 11275
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/austin-logo-640x500.jpg",
                "width": 640,
                "height": 500,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 19588
            }
        ]
    },
    "austin-healey": {
        "name": "Austin-Healey",
        "logotype": {
            "uri": "https://vl.imgix.net/img/austin-healey-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3344
        },
        "alternatives": []
    },
    "autobacs": {
        "name": "Autobacs",
        "logotype": {
            "uri": "https://vl.imgix.net/img/autobacs-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6718
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/autobacs-logo-640x462.jpg",
                "width": 640,
                "height": 462,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 27231
            }
        ]
    },
    "autobianchi": {
        "name": "Autobianchi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/autobianchi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4571
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/autobianchi-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 25274
            }
        ]
    },
    "axon-automotive": {
        "name": "Axon Automotive",
        "logotype": {
            "uri": "https://vl.imgix.net/img/axon-automotive-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7318
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/axon-automotive-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 42888
            }
        ]
    },
    "bac": {
        "name": "BAC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1759
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bac-logo-black-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 6614
            }
        ]
    },
    "baic-motor": {
        "name": "BAIC Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/baic-motor-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13119
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/baic-motor-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 91472
            }
        ]
    },
    "bajaj": {
        "name": "Bajaj Auto",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bajaj-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1858
        },
        "alternatives": []
    },
    "baltijas-dzips": {
        "name": "Baltijas Dzips",
        "logotype": {
            "uri": "https://vl.imgix.net/img/baltijas-dzips-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3974
        },
        "alternatives": []
    },
    "baojun": {
        "name": "Baojun",
        "logotype": {
            "uri": "https://vl.imgix.net/img/baojun-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12313
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/baojun-logo-2010-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 73613
            }
        ]
    },
    "barkas": {
        "name": "Barkas",
        "logotype": {
            "uri": "https://vl.imgix.net/img/barkas-logo.jpg",
            "width": 240,
            "height": 180,
            "mime": "image/jpeg",
            "transparent": false,
            "size": 3024
        },
        "alternatives": []
    },
    "batmobile": {
        "name": "Batmobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/batmobile-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9030
        },
        "alternatives": []
    },
    "baw": {
        "name": "BAW",
        "logotype": {
            "uri": "https://vl.imgix.net/img/baw-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8060
        },
        "alternatives": []
    },
    "bentley": {
        "name": "Bentley",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bentley-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9007
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bentley-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 167099
            }
        ]
    },
    "berkeley": {
        "name": "Berkeley",
        "logotype": {
            "uri": "https://vl.imgix.net/img/berkeley-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14271
        },
        "alternatives": []
    },
    "berliet": {
        "name": "Berliet",
        "logotype": {
            "uri": "https://vl.imgix.net/img/berliet-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1802
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/berliet-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 26823
            }
        ]
    },
    "bertone": {
        "name": "Bertone",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bertone-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6084
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bertone-logo-4300x2600.png",
                "width": 4300,
                "height": 2600,
                "mime": "image/png",
                "transparent": true,
                "size": 212434
            }
        ]
    },
    "bharatbenz": {
        "name": "BharatBenz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bharatbenz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11727
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bharatbenz-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 124489
            }
        ]
    },
    "bitter": {
        "name": "Bitter",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bitter-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1039
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bitter-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 4782
            }
        ]
    },
    "bizzarrini": {
        "name": "Bizzarrini",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bizzarrini-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16889
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bizzarrini-logo-1920x1080.jpg",
                "width": 1920,
                "height": 1080,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 135271
            }
        ]
    },
    "bmw": {
        "name": "BMW",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bmw-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8836
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bmw-logo-2000-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 305830
            }
        ]
    },
    "bmw-m": {
        "name": "BMW M",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bmw-m-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6615
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bmw-m-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 171157
            }
        ]
    },
    "bogdan": {
        "name": "Bogdan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bogdan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9012
        },
        "alternatives": []
    },
    "borgward": {
        "name": "Borgward",
        "logotype": {
            "uri": "https://vl.imgix.net/img/borgward-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8414
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/borgward-logo-2016-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 107139
            }
        ]
    },
    "bowler": {
        "name": "Bowler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bowler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4737
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bowler-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 53111
            }
        ]
    },
    "brabus": {
        "name": "Brabus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/brabus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3502
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/brabus-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 30578
            }
        ]
    },
    "brammo": {
        "name": "Brammo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/brammo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2854
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/brammo-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 10750
            }
        ]
    },
    "brilliance": {
        "name": "Brilliance",
        "logotype": {
            "uri": "https://vl.imgix.net/img/brilliance-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11545
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/brilliance-logo-3840x2160.png",
                "width": 3840,
                "height": 2160,
                "mime": "image/png",
                "transparent": true,
                "size": 241909
            }
        ]
    },
    "bristol-cars": {
        "name": "Bristol Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bristol-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16280
        },
        "alternatives": []
    },
    "brooke-cars": {
        "name": "Brooke Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/brooke-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8078
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/brooke-cars-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 15898
            }
        ]
    },
    "bufori": {
        "name": "Bufori",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bufori-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6118
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bufori-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 126869
            }
        ]
    },
    "bugatti": {
        "name": "Bugatti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/bugatti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10055
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/bugatti-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 58401
            }
        ]
    },
    "buick": {
        "name": "Buick",
        "logotype": {
            "uri": "https://vl.imgix.net/img/buick-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15016
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/buick-logo-1980-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 225361
            }
        ]
    },
    "byd": {
        "name": "BYD",
        "logotype": {
            "uri": "https://vl.imgix.net/img/byd-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2713
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/byd-logo-2007-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 29726
            }
        ]
    },
    "byvin": {
        "name": "Byvin",
        "logotype": {
            "uri": "https://vl.imgix.net/img/byvin-logo.jpg",
            "width": 240,
            "height": 180,
            "mime": "image/jpeg",
            "transparent": false,
            "size": 6392
        },
        "alternatives": []
    },
    "cadillac": {
        "name": "Cadillac",
        "logotype": {
            "uri": "https://vl.imgix.net/img/cadillac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8111
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/cadillac-logo-2014-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 137102
            }
        ]
    },
    "callaway": {
        "name": "Callaway Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/callaway-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3040
        },
        "alternatives": []
    },
    "caparo": {
        "name": "Caparo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/caparo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5567
        },
        "alternatives": []
    },
    "carlsson": {
        "name": "Carlsson",
        "logotype": {
            "uri": "https://vl.imgix.net/img/carlsson-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8925
        },
        "alternatives": []
    },
    "caterham": {
        "name": "Caterham",
        "logotype": {
            "uri": "https://vl.imgix.net/img/caterham-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10730
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/caterham-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 287639
            }
        ]
    },
    "chana": {
        "name": "Changan Automobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/chana-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9452
        },
        "alternatives": []
    },
    "changan": {
        "name": "Changan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/changan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11578
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/changan-logo-2010-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 97285
            }
        ]
    },
    "changfeng": {
        "name": "Changfeng",
        "logotype": {
            "uri": "https://vl.imgix.net/img/changfeng-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7123
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/changfeng-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 43621
            }
        ]
    },
    "chaparral": {
        "name": "Chaparral Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/chaparral-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6727
        },
        "alternatives": []
    },
    "chery": {
        "name": "Chery",
        "logotype": {
            "uri": "https://vl.imgix.net/img/chery-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7604
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/chery-logo-2013-3840x2160.png",
                "width": 3840,
                "height": 2160,
                "mime": "image/png",
                "transparent": true,
                "size": 300421
            }
        ]
    },
    "chevrolet": {
        "name": "Chevrolet",
        "logotype": {
            "uri": "https://vl.imgix.net/img/chevrolet-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6437
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/chevrolet-logo-2013-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 204533
            }
        ]
    },
    "chrysler": {
        "name": "Chrysler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/chrysler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3515
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/chrysler-logo-2010-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 30576
            }
        ]
    },
    "ciimo": {
        "name": "Ciimo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ciimo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15933
        },
        "alternatives": []
    },
    "cisitalia": {
        "name": "Cisitalia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/cisitalia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 17504
        },
        "alternatives": []
    },
    "citroen": {
        "name": "Citroen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/citroen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9698
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/citroen-logo-2009-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 167500
            }
        ]
    },
    "cizeta": {
        "name": "Cizeta",
        "logotype": {
            "uri": "https://vl.imgix.net/img/cizeta-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10596
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/cizeta-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 36573
            }
        ]
    },
    "cole": {
        "name": "Cole",
        "logotype": {
            "uri": "https://vl.imgix.net/img/cole-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9963
        },
        "alternatives": []
    },
    "corre-la-licorne": {
        "name": "Corre La Licorne",
        "logotype": {
            "uri": "https://vl.imgix.net/img/corre-la-licorne-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16545
        },
        "alternatives": []
    },
    "corvette": {
        "name": "Corvette",
        "logotype": {
            "uri": "https://vl.imgix.net/img/corvette-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9822
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/corvette-logo-2014-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 73153
            }
        ]
    },
    "dacia": {
        "name": "Dacia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dacia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8076
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dacia-logo-2008-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 55435
            }
        ]
    },
    "dadi": {
        "name": "DADI",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dadi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10571
        },
        "alternatives": []
    },
    "daewoo": {
        "name": "Daewoo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/daewoo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9627
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/daewoo-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 107197
            }
        ]
    },
    "daf": {
        "name": "DAF",
        "logotype": {
            "uri": "https://vl.imgix.net/img/daf-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1086
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/daf-logo-6000x3000.png",
                "width": 6000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 90485
            }
        ]
    },
    "daihatsu": {
        "name": "Daihatsu",
        "logotype": {
            "uri": "https://vl.imgix.net/img/daihatsu-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1875
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/daihatsu-logo-1977-red-1600x1310.png",
                "width": 1600,
                "height": 1310,
                "mime": "image/png",
                "transparent": true,
                "size": 29260
            }
        ]
    },
    "daimler": {
        "name": "Daimler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/daimler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2056
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/daimler-logo-2200x500.png",
                "width": 2200,
                "height": 500,
                "mime": "image/png",
                "transparent": true,
                "size": 16214
            }
        ]
    },
    "dartz": {
        "name": "Dartz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dartz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 18251
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dartz-logo-yellow-1920x1080.jpg",
                "width": 1920,
                "height": 1080,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 140940
            }
        ]
    },
    "datsun": {
        "name": "Datsun",
        "logotype": {
            "uri": "https://vl.imgix.net/img/datsun-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10737
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/datsun-logo-2013-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 288033
            }
        ]
    },
    "david-brown": {
        "name": "David Brown",
        "logotype": {
            "uri": "https://vl.imgix.net/img/david-brown-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6048
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/david-brown-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 64912
            }
        ]
    },
    "de-tomaso": {
        "name": "De Tomaso",
        "logotype": {
            "uri": "https://vl.imgix.net/img/de-tomaso-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1904
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/de-tomaso-logo-2011-640x251.png",
                "width": 640,
                "height": 251,
                "mime": "image/png",
                "transparent": true,
                "size": 9193
            }
        ]
    },
    "delage": {
        "name": "Delage",
        "logotype": {
            "uri": "https://vl.imgix.net/img/delage-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7598
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/delage-logo-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 38826
            }
        ]
    },
    "derways": {
        "name": "Derways",
        "logotype": {
            "uri": "https://vl.imgix.net/img/derways-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13565
        },
        "alternatives": []
    },
    "detroit-electric": {
        "name": "Detroit Electric",
        "logotype": {
            "uri": "https://vl.imgix.net/img/detroit-electric-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12037
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/detroit-electric-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 191300
            }
        ]
    },
    "devel-sixteen": {
        "name": "Devel Sixteen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/devel-sixteen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9501
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/devel-sixteen-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 122489
            }
        ]
    },
    "diatto": {
        "name": "Diatto",
        "logotype": {
            "uri": "https://vl.imgix.net/img/diatto-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15892
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/diatto-logo-640x215.jpg",
                "width": 640,
                "height": 215,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 31339
            }
        ]
    },
    "dina": {
        "name": "DINA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dina-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2072
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dina-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 7644
            }
        ]
    },
    "dkw": {
        "name": "DKW",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dkw-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4652
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dkw-logo-black-640x550.jpg",
                "width": 640,
                "height": 550,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 13724
            }
        ]
    },
    "dmc": {
        "name": "DMC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dmc-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2515
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dmc-logo-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 15463
            }
        ]
    },
    "dodge": {
        "name": "Dodge",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dodge-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3117
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dodge-logo-2011-3840x2160.png",
                "width": 3840,
                "height": 2160,
                "mime": "image/png",
                "transparent": true,
                "size": 113813
            }
        ]
    },
    "dongfeng": {
        "name": "Dongfeng",
        "logotype": {
            "uri": "https://vl.imgix.net/img/dongfeng-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3870
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/dongfeng-logo-1920x1200.png",
                "width": 1920,
                "height": 1200,
                "mime": "image/png",
                "transparent": true,
                "size": 47230
            }
        ]
    },
    "doninvest": {
        "name": "Doninvest",
        "logotype": {
            "uri": "https://vl.imgix.net/img/doninvest-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5795
        },
        "alternatives": []
    },
    "donkervoort": {
        "name": "Donkervoort",
        "logotype": {
            "uri": "https://vl.imgix.net/img/donkervoort-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8474
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/donkervoort-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 242243
            }
        ]
    },
    "ds": {
        "name": "DS",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ds-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6336
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ds-logo-2009-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 43605
            }
        ]
    },
    "eagle-automobile": {
        "name": "Eagle automobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/eagle-automobile-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8535
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/eagle-automobile-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 67392
            }
        ]
    },
    "eco-motors": {
        "name": "Eco Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/eco-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6991
        },
        "alternatives": []
    },
    "edag": {
        "name": "EDAG",
        "logotype": {
            "uri": "https://vl.imgix.net/img/edag-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1100
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/edag-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 23583
            }
        ]
    },
    "edsel": {
        "name": "Edsel",
        "logotype": {
            "uri": "https://vl.imgix.net/img/edsel-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9618
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/edsel-logo-1200x1200.png",
                "width": 1200,
                "height": 1200,
                "mime": "image/png",
                "transparent": true,
                "size": 80805
            }
        ]
    },
    "eicher": {
        "name": "Eicher",
        "logotype": {
            "uri": "https://vl.imgix.net/img/eicher-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2027
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/eicher-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 12571
            }
        ]
    },
    "elemental": {
        "name": "Elemental",
        "logotype": {
            "uri": "https://vl.imgix.net/img/elemental-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4773
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/elemental-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 16400
            }
        ]
    },
    "elfin": {
        "name": "Elfin",
        "logotype": {
            "uri": "https://vl.imgix.net/img/elfin-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14292
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/elfin-logo-640x330.jpg",
                "width": 640,
                "height": 330,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 31143
            }
        ]
    },
    "elva": {
        "name": "Elva",
        "logotype": {
            "uri": "https://vl.imgix.net/img/elva-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9630
        },
        "alternatives": []
    },
    "englon": {
        "name": "Englon",
        "logotype": {
            "uri": "https://vl.imgix.net/img/englon-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10092
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/englon-logo-1024x768.jpg",
                "width": 1027,
                "height": 768,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 56589
            }
        ]
    },
    "erf": {
        "name": "ERF",
        "logotype": {
            "uri": "https://vl.imgix.net/img/erf-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1798
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/erf-logo-2300x1500.png",
                "width": 2300,
                "height": 1500,
                "mime": "image/png",
                "transparent": true,
                "size": 17632
            }
        ]
    },
    "eterniti": {
        "name": "Eterniti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/eterniti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9327
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/eterniti-logo-640x408.jpg",
                "width": 640,
                "height": 408,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 15016
            }
        ]
    },
    "exeed": {
        "name": "EXEED",
        "logotype": {
            "uri": "https://vl.imgix.net/img/exeed-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8306
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/exeed-550x199.png",
                "width": 550,
                "height": 199,
                "mime": "image/png",
                "transparent": true,
                "size": 17510
            }
        ]
    },
    "facel-vega": {
        "name": "Facel Vega",
        "logotype": {
            "uri": "https://vl.imgix.net/img/facel-vega-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9132
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/facel-vega-logo-1024x768.png",
                "width": 1027,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 26798
            }
        ]
    },
    "faraday-future": {
        "name": "Faraday Future",
        "logotype": {
            "uri": "https://vl.imgix.net/img/faraday-future-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2116
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/faraday-future-logo-2000x1500.png",
                "width": 2000,
                "height": 1500,
                "mime": "image/png",
                "transparent": true,
                "size": 11386
            }
        ]
    },
    "faw": {
        "name": "FAW",
        "logotype": {
            "uri": "https://vl.imgix.net/img/faw-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11788
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/faw-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 202565
            }
        ]
    },
    "ferrari": {
        "name": "Ferrari",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ferrari-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4599
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ferrari-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 35621
            }
        ]
    },
    "fiat": {
        "name": "Fiat",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fiat-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 17102
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/fiat-logo-2006-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 400770
            }
        ]
    },
    "fioravanti": {
        "name": "Fioravanti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fioravanti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2049
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/fioravanti-logo-640x274.jpg",
                "width": 640,
                "height": 274,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 8704
            }
        ]
    },
    "fisker": {
        "name": "Fisker",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fisker-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11368
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/fisker-logo-2007-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 63562
            }
        ]
    },
    "foden": {
        "name": "Foden",
        "logotype": {
            "uri": "https://vl.imgix.net/img/foden-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7513
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/foden-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 22217
            }
        ]
    },
    "force-motors": {
        "name": "Force Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/force-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2867
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/force-motors-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 21263
            }
        ]
    },
    "ford": {
        "name": "Ford",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ford-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8723
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ford-logo-2003-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 39536
            }
        ]
    },
    "foton": {
        "name": "Foton",
        "logotype": {
            "uri": "https://vl.imgix.net/img/foton-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10479
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/foton-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 82542
            }
        ]
    },
    "fpv": {
        "name": "FPV",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fpv-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10230
        },
        "alternatives": []
    },
    "franklin": {
        "name": "Franklin",
        "logotype": {
            "uri": "https://vl.imgix.net/img/franklin-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 19606
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/franklin-logo-640x525.jpg",
                "width": 640,
                "height": 525,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 65296
            }
        ]
    },
    "freightliner": {
        "name": "Freightliner",
        "logotype": {
            "uri": "https://vl.imgix.net/img/freightliner-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6316
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/freightliner-logo-6000x2000.png",
                "width": 6000,
                "height": 2000,
                "mime": "image/png",
                "transparent": true,
                "size": 534829
            }
        ]
    },
    "fso": {
        "name": "FSO",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fso-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4093
        },
        "alternatives": []
    },
    "fuqi": {
        "name": "Fuqi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/fuqi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8804
        },
        "alternatives": []
    },
    "gac": {
        "name": "GAC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9859
        },
        "alternatives": []
    },
    "gardner-douglas": {
        "name": "Gardner Douglas",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gardner-douglas-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12920
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gardner-douglas-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 45635
            }
        ]
    },
    "gaz": {
        "name": "GAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8973
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gaz-logo-blue-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 36748
            }
        ]
    },
    "geely": {
        "name": "Geely",
        "logotype": {
            "uri": "https://vl.imgix.net/img/geely-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10342
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/geely-logo-2014-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 173637
            }
        ]
    },
    "general-motors": {
        "name": "General Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/general-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5312
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/general-motors-logo-2010-3300x3300.png",
                "width": 3300,
                "height": 3300,
                "mime": "image/png",
                "transparent": true,
                "size": 900892
            }
        ]
    },
    "genesis": {
        "name": "Genesis",
        "logotype": {
            "uri": "https://vl.imgix.net/img/genesis-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6639
        },
        "alternatives": []
    },
    "geo": {
        "name": "Geo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/geo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2529
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/geo-logo-2000x600.png",
                "width": 2048,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 19975
            }
        ]
    },
    "gilbern": {
        "name": "Gilbern",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gilbern-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6669
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gilbern-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 20833
            }
        ]
    },
    "gillet": {
        "name": "Gillet",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gillet-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11226
        },
        "alternatives": []
    },
    "ginetta": {
        "name": "Ginetta",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ginetta-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8152
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ginetta-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 88816
            }
        ]
    },
    "gmc": {
        "name": "GMC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gmc-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4865
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gmc-logo-3800x1000.png",
                "width": 3800,
                "height": 1000,
                "mime": "image/png",
                "transparent": true,
                "size": 550925
            }
        ]
    },
    "gonow": {
        "name": "Gonow",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gonow-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14628
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gonow-logo-2010-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 44675
            }
        ]
    },
    "gordon": {
        "name": "Gordon",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gordon-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15730
        },
        "alternatives": []
    },
    "great-wall": {
        "name": "Great Wall",
        "logotype": {
            "uri": "https://vl.imgix.net/img/great-wall-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12593
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/great-wall-logo-2007-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 178549
            }
        ]
    },
    "grinnall-cars": {
        "name": "Grinnall cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/grinnall-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5293
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/grinnall-cars-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 32050
            }
        ]
    },
    "gt-r": {
        "name": "GT R",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gt-r-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14984
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gt-r-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 122625
            }
        ]
    },
    "gta-motor": {
        "name": "GTA Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gta-motor-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8182
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gta-motor-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 175658
            }
        ]
    },
    "gumpert": {
        "name": "Gumpert",
        "logotype": {
            "uri": "https://vl.imgix.net/img/gumpert-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11173
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/gumpert-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 204051
            }
        ]
    },
    "hafei": {
        "name": "Hafei",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hafei-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7435
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hafei-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 98403
            }
        ]
    },
    "haima": {
        "name": "Haima",
        "logotype": {
            "uri": "https://vl.imgix.net/img/haima-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5889
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/haima-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 46103
            }
        ]
    },
    "hanomag": {
        "name": "Hanomag",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hanomag-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9684
        },
        "alternatives": []
    },
    "haval": {
        "name": "Haval",
        "logotype": {
            "uri": "https://vl.imgix.net/img/haval-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4985
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/haval-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 35288
            }
        ]
    },
    "hawtai": {
        "name": "Hawtai",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hawtai-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10401
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hawtai-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 127044
            }
        ]
    },
    "hennessey": {
        "name": "Hennessey",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hennessey-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15344
        },
        "alternatives": []
    },
    "hillman": {
        "name": "Hillman",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hillman-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5955
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hillman-logo-640x145.jpg",
                "width": 640,
                "height": 145,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 31553
            }
        ]
    },
    "hindustan-motors": {
        "name": "Hindustan Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hindustan-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1752
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hindustan-motors-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 19429
            }
        ]
    },
    "hino": {
        "name": "Hino",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hino-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12087
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hino-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 327934
            }
        ]
    },
    "hiphi": {
        "name": "HiPhi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hiphi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2450
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hiphi-640x453.png",
                "width": 640,
                "height": 453,
                "mime": "image/png",
                "transparent": true,
                "size": 6115
            }
        ]
    },
    "hispano-suiza": {
        "name": "Hispano Suiza",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hispano-suiza-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9260
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hispano-suiza-logo-640x183.jpg",
                "width": 640,
                "height": 183,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 31417
            }
        ]
    },
    "holden": {
        "name": "Holden",
        "logotype": {
            "uri": "https://vl.imgix.net/img/holden-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13724
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/holden-logo-2016-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 279494
            }
        ]
    },
    "hommell": {
        "name": "Hommell",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hommell-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 17357
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hommell-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 216581
            }
        ]
    },
    "honda": {
        "name": "Honda",
        "logotype": {
            "uri": "https://vl.imgix.net/img/honda-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11555
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/honda-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 146423
            }
        ]
    },
    "hongqi": {
        "name": "Hongqi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hongqi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 27368
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hongqi-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 152227
            }
        ]
    },
    "horch": {
        "name": "Horch",
        "logotype": {
            "uri": "https://vl.imgix.net/img/horch-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5090
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/horch-logo-black-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 38970
            }
        ]
    },
    "hsv": {
        "name": "HSV",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hsv-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10017
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hsv-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 149094
            }
        ]
    },
    "huanghai": {
        "name": "Huanghai",
        "logotype": {
            "uri": "https://vl.imgix.net/img/huanghai-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9841
        },
        "alternatives": []
    },
    "hudson": {
        "name": "Hudson",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hudson-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9429
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hudson-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 52033
            }
        ]
    },
    "hummer": {
        "name": "Hummer",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hummer-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1173
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hummer-logo-2000x205.png",
                "width": 2000,
                "height": 205,
                "mime": "image/png",
                "transparent": true,
                "size": 7281
            }
        ]
    },
    "hupmobile": {
        "name": "Hupmobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hupmobile-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 3923
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hupmobile-logo-640x138.jpg",
                "width": 640,
                "height": 138,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 27074
            }
        ]
    },
    "hyundai": {
        "name": "Hyundai",
        "logotype": {
            "uri": "https://vl.imgix.net/img/hyundai-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10203
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/hyundai-logo-silver-2560x1440.png",
                "width": 2650,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 95565
            }
        ]
    },
    "ic-bus": {
        "name": "IC Bus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ic-bus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11086
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ic-bus-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 362216
            }
        ]
    },
    "ifa": {
        "name": "IFA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ifa-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2780
        },
        "alternatives": []
    },
    "ika": {
        "name": "IKA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ika-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6786
        },
        "alternatives": []
    },
    "ikarus": {
        "name": "Ikarus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ikarus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2402
        },
        "alternatives": []
    },
    "infiniti": {
        "name": "Infiniti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/infiniti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10133
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/infiniti-logo-1989-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 151104
            }
        ]
    },
    "innocenti": {
        "name": "Innocenti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/innocenti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4481
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/innocenti-logo-310x310.png",
                "width": 310,
                "height": 310,
                "mime": "image/png",
                "transparent": true,
                "size": 11344
            }
        ]
    },
    "intermeccanica": {
        "name": "Intermeccanica",
        "logotype": {
            "uri": "https://vl.imgix.net/img/intermeccanica-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15495
        },
        "alternatives": []
    },
    "international-harvester": {
        "name": "International Harvester",
        "logotype": {
            "uri": "https://vl.imgix.net/img/international-harvester-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 612
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/international-harvester-logo-1000x1200.png",
                "width": 1000,
                "height": 1200,
                "mime": "image/png",
                "transparent": true,
                "size": 9785
            }
        ]
    },
    "international-trucks": {
        "name": "International Trucks",
        "logotype": {
            "uri": "https://vl.imgix.net/img/international-trucks-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8667
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/international-trucks-logo-1200x1200.png",
                "width": 1200,
                "height": 1200,
                "mime": "image/png",
                "transparent": true,
                "size": 169971
            }
        ]
    },
    "invicta": {
        "name": "Invicta",
        "logotype": {
            "uri": "https://vl.imgix.net/img/invicta-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7017
        },
        "alternatives": []
    },
    "iran-khodro": {
        "name": "Iran Khodro",
        "logotype": {
            "uri": "https://vl.imgix.net/img/iran-khodro-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8107
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/iran-khodro-logo-3000x3000.png",
                "width": 3000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 146643
            }
        ]
    },
    "irizar": {
        "name": "Irizar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/irizar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11601
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/irizar-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 98347
            }
        ]
    },
    "isdera": {
        "name": "Isdera",
        "logotype": {
            "uri": "https://vl.imgix.net/img/isdera-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9617
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/isdera-logo-640x413.jpg",
                "width": 640,
                "height": 413,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 18118
            }
        ]
    },
    "iso": {
        "name": "Iso",
        "logotype": {
            "uri": "https://vl.imgix.net/img/iso-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11452
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/iso-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 328944
            }
        ]
    },
    "isuzu": {
        "name": "Isuzu",
        "logotype": {
            "uri": "https://vl.imgix.net/img/isuzu-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1238
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/isuzu-logo-1974-3000x3000.png",
                "width": 3000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 38419
            }
        ]
    },
    "iveco": {
        "name": "Iveco",
        "logotype": {
            "uri": "https://vl.imgix.net/img/iveco-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5659
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/iveco-logo-silver-3840x2160.png",
                "width": 3840,
                "height": 2160,
                "mime": "image/png",
                "transparent": true,
                "size": 399631
            }
        ]
    },
    "izh": {
        "name": "IZH",
        "logotype": {
            "uri": "https://vl.imgix.net/img/izh-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3909
        },
        "alternatives": []
    },
    "jac-motors": {
        "name": "JAC Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jac-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9417
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jac-motors-logo-2016-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 135210
            }
        ]
    },
    "jaguar": {
        "name": "Jaguar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jaguar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6994
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jaguar-logo-2012-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 129611
            }
        ]
    },
    "jawa": {
        "name": "Jawa",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jawa-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13863
        },
        "alternatives": []
    },
    "jba-motors": {
        "name": "JBA Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jba-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7441
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jba-motors-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 42304
            }
        ]
    },
    "jeep": {
        "name": "Jeep",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jeep-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2065
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jeep-logo-3d-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 346849
            }
        ]
    },
    "jensen": {
        "name": "Jensen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jensen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 18404
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jensen-logo-640x556.jpg",
                "width": 640,
                "height": 556,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 62016
            }
        ]
    },
    "jetour": {
        "name": "Jetour",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jetour-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1617
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jetour-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 18761
            }
        ]
    },
    "jiangling": {
        "name": "Jiangling",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jiangling-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2776
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/jiangling-logo-1280x1024.png",
                "width": 1280,
                "height": 1024,
                "mime": "image/png",
                "transparent": true,
                "size": 22280
            }
        ]
    },
    "jinbei": {
        "name": "Jinbei",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jinbei-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8800
        },
        "alternatives": []
    },
    "jmc": {
        "name": "JMC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/jmc-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5205
        },
        "alternatives": []
    },
    "kaiser": {
        "name": "Kaiser",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kaiser-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15138
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/kaiser-logo-640x346.jpg",
                "width": 640,
                "height": 346,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 41568
            }
        ]
    },
    "kamaz": {
        "name": "Kamaz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kamaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5093
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/kamaz-logo-2000x2500.png",
                "width": 2000,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 109280
            }
        ]
    },
    "karma": {
        "name": "Karma",
        "logotype": {
            "uri": "https://vl.imgix.net/img/karma-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9297
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/karma-logo-2560x1440.png",
                "width": 2650,
                "height": 1400,
                "mime": "image/png",
                "transparent": true,
                "size": 77313
            }
        ]
    },
    "kavz": {
        "name": "KAvZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kavz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2468
        },
        "alternatives": []
    },
    "keating-supercars": {
        "name": "Keating Supercars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/keating-supercars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10945
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/keating-supercars-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 22891
            }
        ]
    },
    "kenworth": {
        "name": "Kenworth",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kenworth-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8619
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/kenworth-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 215305
            }
        ]
    },
    "kia": {
        "name": "Kia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7407
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/kia-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 167110
            }
        ]
    },
    "koenigsegg": {
        "name": "Koenigsegg",
        "logotype": {
            "uri": "https://vl.imgix.net/img/koenigsegg-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7510
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/koenigsegg-logo-1994-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 85352
            }
        ]
    },
    "kraz": {
        "name": "KrAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/kraz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4114
        },
        "alternatives": []
    },
    "ktm": {
        "name": "KTM",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ktm-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1661
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ktm-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 11911
            }
        ]
    },
    "lada": {
        "name": "Lada",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lada-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9999
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lada-logo-silver-1366x768.jpg",
                "width": 1366,
                "height": 768,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 32836
            }
        ]
    },
    "lagonda": {
        "name": "Lagonda",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lagonda-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3900
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lagonda-logo-2009-2560x1440.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": false,
                "size": 193324
            }
        ]
    },
    "lamborghini": {
        "name": "Lamborghini",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lamborghini-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11210
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lamborghini-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 157133
            }
        ]
    },
    "lancia": {
        "name": "Lancia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lancia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13485
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lancia-logo-2007-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 222074
            }
        ]
    },
    "land-rover": {
        "name": "Land Rover",
        "logotype": {
            "uri": "https://vl.imgix.net/img/land-rover-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13814
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/land-rover-logo-2011-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 293686
            }
        ]
    },
    "landwind": {
        "name": "Landwind",
        "logotype": {
            "uri": "https://vl.imgix.net/img/landwind-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12235
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/landwind-logo-2600x2400.png",
                "width": 2600,
                "height": 2400,
                "mime": "image/png",
                "transparent": true,
                "size": 281955
            }
        ]
    },
    "laraki": {
        "name": "Laraki",
        "logotype": {
            "uri": "https://vl.imgix.net/img/laraki-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12842
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/laraki-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 164888
            }
        ]
    },
    "laz": {
        "name": "LAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/laz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4314
        },
        "alternatives": []
    },
    "lexus": {
        "name": "Lexus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lexus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11426
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lexus-logo-1988-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 189885
            }
        ]
    },
    "leyland": {
        "name": "Leyland",
        "logotype": {
            "uri": "https://vl.imgix.net/img/leyland-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7431
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/leyland-logo-1024x768.png",
                "width": 1027,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 54118
            }
        ]
    },
    "liaz": {
        "name": "LiAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/liaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5297
        },
        "alternatives": []
    },
    "liebao-motor": {
        "name": "Liebao Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/liebao-motor-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8196
        },
        "alternatives": []
    },
    "lifan": {
        "name": "Lifan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lifan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2948
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lifan-logo-4000x1200.png",
                "width": 4000,
                "height": 1200,
                "mime": "image/png",
                "transparent": true,
                "size": 26626
            }
        ]
    },
    "ligier": {
        "name": "Ligier",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ligier-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5759
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ligier-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 37280
            }
        ]
    },
    "lincoln": {
        "name": "Lincoln",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lincoln-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2289
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lincoln-logo-1968-5120x2880.png",
                "width": 5120,
                "height": 2880,
                "mime": "image/png",
                "transparent": true,
                "size": 64556
            }
        ]
    },
    "lister-cars": {
        "name": "Lister Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lister-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12711
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lister-cars-logo-2900x2900.png",
                "width": 2900,
                "height": 2900,
                "mime": "image/png",
                "transparent": true,
                "size": 971982
            }
        ]
    },
    "lixiang": {
        "name": "LiXiang",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lixiang-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4024
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lixiang-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 10963
            }
        ]
    },
    "lloyd": {
        "name": "Lloyd",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lloyd-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4199
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lloyd-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 25307
            }
        ]
    },
    "lobini": {
        "name": "Lobini",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lobini-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14794
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lobini-logo-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 47949
            }
        ]
    },
    "london-ev-company": {
        "name": "London EV Company",
        "logotype": {
            "uri": "https://vl.imgix.net/img/london-ev-company-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3877
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/london-ev-company-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 25332
            }
        ]
    },
    "lotus": {
        "name": "Lotus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lotus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11436
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lotus-logo-3000x3000.png",
                "width": 3000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 621950
            }
        ]
    },
    "lti": {
        "name": "LTI",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8044
        },
        "alternatives": []
    },
    "luaz": {
        "name": "LuAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/luaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4138
        },
        "alternatives": []
    },
    "lucid-motors": {
        "name": "Lucid Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lucid-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 682
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lucid-motors-logo-1500x200.png",
                "width": 1500,
                "height": 200,
                "mime": "image/png",
                "transparent": true,
                "size": 1966
            }
        ]
    },
    "luxgen": {
        "name": "Luxgen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/luxgen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12300
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/luxgen-logo-2009-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 274322
            }
        ]
    },
    "lynk-and-co": {
        "name": "Lynk & Co",
        "logotype": {
            "uri": "https://vl.imgix.net/img/lynk-and-co-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3313
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/lynk-and-co-640x427.png",
                "width": 640,
                "height": 427,
                "mime": "image/png",
                "transparent": true,
                "size": 9108
            }
        ]
    },
    "mack": {
        "name": "Mack",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mack-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2506
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mack-logo-2014-6000x3000.png",
                "width": 6000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 89054
            }
        ]
    },
    "mahindra": {
        "name": "Mahindra",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mahindra-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3144
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mahindra-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 30493
            }
        ]
    },
    "man": {
        "name": "MAN",
        "logotype": {
            "uri": "https://vl.imgix.net/img/man-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7973
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/man-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 40103
            }
        ]
    },
    "mansory": {
        "name": "Mansory",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mansory-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1796
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mansory-logo-1600x400.png",
                "width": 1600,
                "height": 400,
                "mime": "image/png",
                "transparent": true,
                "size": 10088
            }
        ]
    },
    "marcos": {
        "name": "Marcos",
        "logotype": {
            "uri": "https://vl.imgix.net/img/marcos-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 14215
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/marcos-logo-640x460.jpg",
                "width": 640,
                "height": 460,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 17500
            }
        ]
    },
    "marlin-car": {
        "name": "Marlin car",
        "logotype": {
            "uri": "https://vl.imgix.net/img/marlin-car-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11710
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/marlin-car-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 27781
            }
        ]
    },
    "marussia": {
        "name": "Marussia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/marussia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5663
        },
        "alternatives": []
    },
    "maruti": {
        "name": "Maruti",
        "logotype": {
            "uri": "https://vl.imgix.net/img/maruti-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2667
        },
        "alternatives": []
    },
    "maserati": {
        "name": "Maserati",
        "logotype": {
            "uri": "https://vl.imgix.net/img/maserati-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7785
        },
        "alternatives": []
    },
    "mastretta": {
        "name": "Mastretta",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mastretta-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9297
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mastretta-logo-old-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 164210
            }
        ]
    },
    "matra": {
        "name": "Matra Sports",
        "logotype": {
            "uri": "https://vl.imgix.net/img/matra-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14370
        },
        "alternatives": []
    },
    "maxus": {
        "name": "Maxus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/maxus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13627
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/maxus-logo-2014-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 121045
            }
        ]
    },
    "maybach": {
        "name": "Maybach",
        "logotype": {
            "uri": "https://vl.imgix.net/img/maybach-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12063
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/maybach-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": false,
                "size": 114309
            }
        ]
    },
    "maz": {
        "name": "MAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/maz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2465
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/maz-logo-5000x3000.png",
                "width": 5000,
                "height": 3000,
                "mime": "image/png",
                "transparent": true,
                "size": 62764
            }
        ]
    },
    "mazda": {
        "name": "Mazda",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mazda-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9381
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mazda-logo-1997-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 65948
            }
        ]
    },
    "mazzanti-automobili": {
        "name": "Mazzanti Automobili",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mazzanti-automobili-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10082
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mazzanti-automobili-logo-2016-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 585432
            }
        ]
    },
    "mclaren": {
        "name": "McLaren",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mclaren-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2303
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mclaren-logo-2002-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 30854
            }
        ]
    },
    "melkus": {
        "name": "Melkus",
        "logotype": {
            "uri": "https://vl.imgix.net/img/melkus-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12734
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/melkus-logo-1600x1200.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 213897
            }
        ]
    },
    "mercedes-benz": {
        "name": "Mercedes Benz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mercedes-benz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9340
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mercedes-benz-logo-2011-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 52470
            }
        ]
    },
    "mercury": {
        "name": "Mercury",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mercury-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4468
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mercury-logo-1980-2500x2500.png",
                "width": 2500,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 67034
            }
        ]
    },
    "merkur": {
        "name": "Merkur",
        "logotype": {
            "uri": "https://vl.imgix.net/img/merkur-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4096
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/merkur-logo-black-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 16732
            }
        ]
    },
    "mg": {
        "name": "MG",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mg-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13535
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mg-logo-red-2010-1920x1080.png",
                "width": 2272,
                "height": 1704,
                "mime": "image/png",
                "transparent": true,
                "size": 226035
            }
        ]
    },
    "microcar": {
        "name": "Microcar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/microcar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10992
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/microcar-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 346299
            }
        ]
    },
    "mills-extreme-vehicles": {
        "name": "Mills Extreme Vehicles",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mills-extreme-vehicles-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10610
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mills-extreme-vehicles-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 13178
            }
        ]
    },
    "minelli": {
        "name": "Minelli",
        "logotype": {
            "uri": "https://vl.imgix.net/img/minelli-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3579
        },
        "alternatives": []
    },
    "mini": {
        "name": "Mini",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mini-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8837
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mini-logo-2001-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 132472
            }
        ]
    },
    "mitsubishi": {
        "name": "Mitsubishi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mitsubishi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1531
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mitsubishi-logo-2000x2500.png",
                "width": 2000,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 45273
            }
        ]
    },
    "mitsuoka": {
        "name": "Mitsuoka",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mitsuoka-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2871
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mitsuoka-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 19245
            }
        ]
    },
    "mk-sportscars": {
        "name": "MK Sportscars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mk-sportscars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6472
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mk-sportscars-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 7124
            }
        ]
    },
    "morgan": {
        "name": "Morgan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/morgan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7089
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/morgan-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": false,
                "size": 150915
            }
        ]
    },
    "morris": {
        "name": "Morris",
        "logotype": {
            "uri": "https://vl.imgix.net/img/morris-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16234
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/morris-logo-640x497.jpg",
                "width": 640,
                "height": 497,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 35483
            }
        ]
    },
    "moskvitch": {
        "name": "Moskvitch",
        "logotype": {
            "uri": "https://vl.imgix.net/img/moskvitch-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1328
        },
        "alternatives": []
    },
    "mosler": {
        "name": "Mosler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mosler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11455
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mosler-logo-640x457.png",
                "width": 640,
                "height": 457,
                "mime": "image/png",
                "transparent": true,
                "size": 73941
            }
        ]
    },
    "mustang": {
        "name": "Mustang",
        "logotype": {
            "uri": "https://vl.imgix.net/img/mustang-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7542
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/mustang-logo-2010-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": false,
                "size": 241701
            }
        ]
    },
    "nash": {
        "name": "Nash",
        "logotype": {
            "uri": "https://vl.imgix.net/img/nash-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11703
        },
        "alternatives": []
    },
    "navistar-international": {
        "name": "Navistar International",
        "logotype": {
            "uri": "https://vl.imgix.net/img/navistar-international-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2505
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/navistar-international-logo-2200x500.png",
                "width": 2200,
                "height": 500,
                "mime": "image/png",
                "transparent": true,
                "size": 20331
            }
        ]
    },
    "neoplan": {
        "name": "Neoplan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/neoplan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1663
        },
        "alternatives": []
    },
    "nio": {
        "name": "Nio",
        "logotype": {
            "uri": "https://vl.imgix.net/img/nio-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3361
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/nio-271x480.png",
                "width": 271,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 4986
            }
        ]
    },
    "nismo": {
        "name": "Nismo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/nismo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1819
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/nismo-logo-2000x450.png",
                "width": 2000,
                "height": 450,
                "mime": "image/png",
                "transparent": true,
                "size": 13219
            }
        ]
    },
    "nissan": {
        "name": "Nissan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/nissan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12402
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/nissan-logo-2013-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 98094
            }
        ]
    },
    "noble": {
        "name": "Noble",
        "logotype": {
            "uri": "https://vl.imgix.net/img/noble-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6220
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/noble-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 69321
            }
        ]
    },
    "oka": {
        "name": "OKA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/oka-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2174
        },
        "alternatives": []
    },
    "oldsmobile": {
        "name": "Oldsmobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/oldsmobile-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10424
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/oldsmobile-logo-1996-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": false,
                "size": 43368
            }
        ]
    },
    "oltcit": {
        "name": "Oltcit",
        "logotype": {
            "uri": "https://vl.imgix.net/img/oltcit-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5491
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/oltcit-logo-640x308.png",
                "width": 640,
                "height": 308,
                "mime": "image/png",
                "transparent": true,
                "size": 11616
            }
        ]
    },
    "omoda": {
        "name": "OMODA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/omoda-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2701
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/omoda-480x133.png",
                "width": 271,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 4633
            }
        ]
    },
    "opel": {
        "name": "Opel",
        "logotype": {
            "uri": "https://vl.imgix.net/img/opel-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9232
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/opel-logo-2009-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 73000
            }
        ]
    },
    "osca": {
        "name": "OSCA",
        "logotype": {
            "uri": "https://vl.imgix.net/img/osca-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 18822
        },
        "alternatives": []
    },
    "oshan": {
        "name": "oshan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/oshan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7695
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/oshan-384x274.png",
                "width": 384,
                "height": 274,
                "mime": "image/png",
                "transparent": true,
                "size": 14757
            }
        ]
    },
    "paccar": {
        "name": "Paccar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/paccar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1841
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/paccar-logo-2200x500.png",
                "width": 2200,
                "height": 500,
                "mime": "image/png",
                "transparent": true,
                "size": 15745
            }
        ]
    },
    "packard": {
        "name": "Packard",
        "logotype": {
            "uri": "https://vl.imgix.net/img/packard-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12553
        },
        "alternatives": []
    },
    "pagani": {
        "name": "Pagani",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pagani-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16625
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/pagani-logo-1992-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 172459
            }
        ]
    },
    "panhard": {
        "name": "Panhard",
        "logotype": {
            "uri": "https://vl.imgix.net/img/panhard-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13169
        },
        "alternatives": []
    },
    "panoz": {
        "name": "Panoz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/panoz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8880
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/panoz-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 105687
            }
        ]
    },
    "paz": {
        "name": "PAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/paz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6708
        },
        "alternatives": []
    },
    "pegaso": {
        "name": "Pegaso",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pegaso-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3173
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/pegaso-logo-black-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 21603
            }
        ]
    },
    "perodua": {
        "name": "Perodua",
        "logotype": {
            "uri": "https://vl.imgix.net/img/perodua-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12005
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/perodua-logo-2008-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 217516
            }
        ]
    },
    "peterbilt": {
        "name": "Peterbilt",
        "logotype": {
            "uri": "https://vl.imgix.net/img/peterbilt-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10168
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/peterbilt-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 306870
            }
        ]
    },
    "peugeot": {
        "name": "Peugeot",
        "logotype": {
            "uri": "https://vl.imgix.net/img/peugeot-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11231
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/peugeot-logo-2010-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 60167
            }
        ]
    },
    "pgo": {
        "name": "PGO",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pgo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7593
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/pgo-logo-1920x1080.jpg",
                "width": 1920,
                "height": 1080,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 38779
            }
        ]
    },
    "piaggio": {
        "name": "Piaggio",
        "logotype": {
            "uri": "https://vl.imgix.net/img/piaggio-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4848
        },
        "alternatives": []
    },
    "pierce-arrow": {
        "name": "Pierce Arrow",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pierce-arrow-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 9255
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/pierce-arrow-logo-640x416.jpg",
                "width": 640,
                "height": 416,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 36288
            }
        ]
    },
    "pininfarina": {
        "name": "Pininfarina",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pininfarina-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5107
        },
        "alternatives": []
    },
    "plymouth": {
        "name": "Plymouth",
        "logotype": {
            "uri": "https://vl.imgix.net/img/plymouth-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4860
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/plymouth-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 33991
            }
        ]
    },
    "polestar": {
        "name": "Polestar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/polestar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1141
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/polestar-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 4129
            }
        ]
    },
    "pontiac": {
        "name": "Pontiac",
        "logotype": {
            "uri": "https://vl.imgix.net/img/pontiac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5629
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/pontiac-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 77827
            }
        ]
    },
    "porsche": {
        "name": "Porsche",
        "logotype": {
            "uri": "https://vl.imgix.net/img/porsche-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14449
        },
        "alternatives": []
    },
    "praga": {
        "name": "Praga",
        "logotype": {
            "uri": "https://vl.imgix.net/img/praga-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3193
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/praga-logo-blue-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 15172
            }
        ]
    },
    "premier": {
        "name": "Premier",
        "logotype": {
            "uri": "https://vl.imgix.net/img/premier-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2599
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/premier-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 13181
            }
        ]
    },
    "prodrive": {
        "name": "Prodrive",
        "logotype": {
            "uri": "https://vl.imgix.net/img/prodrive-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1332
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/prodrive-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 11958
            }
        ]
    },
    "proton": {
        "name": "Proton",
        "logotype": {
            "uri": "https://vl.imgix.net/img/proton-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11927
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/proton-logo-2008-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 118914
            }
        ]
    },
    "puch": {
        "name": "Puch",
        "logotype": {
            "uri": "https://vl.imgix.net/img/puch-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4743
        },
        "alternatives": []
    },
    "qoros": {
        "name": "Qoros",
        "logotype": {
            "uri": "https://vl.imgix.net/img/qoros-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6487
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/qoros-logo-2007-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 28178
            }
        ]
    },
    "qvale": {
        "name": "Qvale",
        "logotype": {
            "uri": "https://vl.imgix.net/img/qvale-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13870
        },
        "alternatives": []
    },
    "radical-sportscars": {
        "name": "Radical Sportscars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/radical-sportscars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5276
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/radical-sportscars-logo-2000x800.png",
                "width": 2000,
                "height": 800,
                "mime": "image/png",
                "transparent": true,
                "size": 47675
            }
        ]
    },
    "ram": {
        "name": "Ram",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ram-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14329
        },
        "alternatives": []
    },
    "rambler": {
        "name": "Rambler",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rambler-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6030
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rambler-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 30475
            }
        ]
    },
    "ranz": {
        "name": "Ranz",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ranz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8903
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ranz-logo-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 27111
            }
        ]
    },
    "ravon": {
        "name": "Ravon",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ravon-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11697
        },
        "alternatives": []
    },
    "renault": {
        "name": "Renault",
        "logotype": {
            "uri": "https://vl.imgix.net/img/renault-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7371
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/renault-logo-2015-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 181799
            }
        ]
    },
    "renault-samsung-motors": {
        "name": "Renault Samsung Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/renault-samsung-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6837
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/renault-samsung-motors-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 108849
            }
        ]
    },
    "rezvani": {
        "name": "Rezvani",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rezvani-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1826
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rezvani-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 5304
            }
        ]
    },
    "riley": {
        "name": "Riley",
        "logotype": {
            "uri": "https://vl.imgix.net/img/riley-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7722
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/riley-logo-640x389.png",
                "width": 640,
                "height": 389,
                "mime": "image/png",
                "transparent": true,
                "size": 30900
            }
        ]
    },
    "rimac": {
        "name": "Rimac",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rimac-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15787
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rimac-logo-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 46671
            }
        ]
    },
    "rinspeed": {
        "name": "Rinspeed",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rinspeed-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3913
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rinspeed-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 41595
            }
        ]
    },
    "rivian": {
        "name": "Rivian",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rivian-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4719
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rivian-640x373.png",
                "width": 640,
                "height": 373,
                "mime": "image/png",
                "transparent": true,
                "size": 10266
            }
        ]
    },
    "roewe": {
        "name": "Roewe",
        "logotype": {
            "uri": "https://vl.imgix.net/img/roewe-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11725
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/roewe-logo-2006-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 160469
            }
        ]
    },
    "rolls-royce": {
        "name": "Rolls Royce",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rolls-royce-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8757
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rolls-royce-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 397353
            }
        ]
    },
    "ronart-cars": {
        "name": "Ronart Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ronart-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7058
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ronart-cars-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 21637
            }
        ]
    },
    "rossion": {
        "name": "Rossion",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rossion-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11228
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rossion-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 119699
            }
        ]
    },
    "rover": {
        "name": "Rover",
        "logotype": {
            "uri": "https://vl.imgix.net/img/rover-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10704
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/rover-logo-2003-3840x2160.png",
                "width": 3840,
                "height": 2160,
                "mime": "image/png",
                "transparent": true,
                "size": 408167
            }
        ]
    },
    "ruf": {
        "name": "Ruf",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ruf-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1931
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ruf-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 9830
            }
        ]
    },
    "saab": {
        "name": "Saab",
        "logotype": {
            "uri": "https://vl.imgix.net/img/saab-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12214
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/saab-logo-2002-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 148424
            }
        ]
    },
    "saic-motor": {
        "name": "SAIC Motor",
        "logotype": {
            "uri": "https://vl.imgix.net/img/saic-motor-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10844
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/saic-motor-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 115905
            }
        ]
    },
    "saipa": {
        "name": "Saipa",
        "logotype": {
            "uri": "https://vl.imgix.net/img/saipa-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1958
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/saipa-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 19045
            }
        ]
    },
    "saleen": {
        "name": "Saleen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/saleen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8594
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/saleen-logo-640x456.jpg",
                "width": 640,
                "height": 456,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 19533
            }
        ]
    },
    "santana": {
        "name": "Santana",
        "logotype": {
            "uri": "https://vl.imgix.net/img/santana-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2936
        },
        "alternatives": []
    },
    "saturn": {
        "name": "Saturn",
        "logotype": {
            "uri": "https://vl.imgix.net/img/saturn-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": false,
            "size": 9883
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/saturn-logo-1985-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": false,
                "size": 268511
            }
        ]
    },
    "scania": {
        "name": "Scania",
        "logotype": {
            "uri": "https://vl.imgix.net/img/scania-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10177
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/scania-logo-3000x3000.png",
                "width": 2500,
                "height": 1500,
                "mime": "image/png",
                "transparent": true,
                "size": 126613
            }
        ]
    },
    "scion": {
        "name": "Scion",
        "logotype": {
            "uri": "https://vl.imgix.net/img/scion-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8352
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/scion-logo-2003-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 45929
            }
        ]
    },
    "seat": {
        "name": "SEAT",
        "logotype": {
            "uri": "https://vl.imgix.net/img/seat-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8988
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/seat-logo-2012-6000x5000.png",
                "width": 6000,
                "height": 5000,
                "mime": "image/png",
                "transparent": true,
                "size": 383814
            }
        ]
    },
    "seaz": {
        "name": "SeAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/seaz-logo.jpg",
            "width": 240,
            "height": 180,
            "mime": "image/jpeg",
            "transparent": false,
            "size": 6190
        },
        "alternatives": []
    },
    "setra": {
        "name": "Setra",
        "logotype": {
            "uri": "https://vl.imgix.net/img/setra-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3275
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/setra-logo-3000x1000.png",
                "width": 3000,
                "height": 1000,
                "mime": "image/png",
                "transparent": true,
                "size": 49804
            }
        ]
    },
    "shanghai-maple": {
        "name": "Shanghai Maple",
        "logotype": {
            "uri": "https://vl.imgix.net/img/shanghai-maple-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16183
        },
        "alternatives": []
    },
    "shelby": {
        "name": "Shelby",
        "logotype": {
            "uri": "https://vl.imgix.net/img/shelby-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10976
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/shelby-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 239847
            }
        ]
    },
    "shuanghuan": {
        "name": "Shuanghuan",
        "logotype": {
            "uri": "https://vl.imgix.net/img/shuanghuan-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7930
        },
        "alternatives": []
    },
    "simca": {
        "name": "Simca",
        "logotype": {
            "uri": "https://vl.imgix.net/img/simca-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4297
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/simca-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 41066
            }
        ]
    },
    "singer": {
        "name": "Singer",
        "logotype": {
            "uri": "https://vl.imgix.net/img/singer-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12476
        },
        "alternatives": []
    },
    "sisu": {
        "name": "Sisu",
        "logotype": {
            "uri": "https://vl.imgix.net/img/sisu-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2662
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/sisu-logo-2048x2000.png",
                "width": 2048,
                "height": 2000,
                "mime": "image/png",
                "transparent": true,
                "size": 25639
            }
        ]
    },
    "skoda": {
        "name": "Skoda",
        "logotype": {
            "uri": "https://vl.imgix.net/img/skoda-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8969
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/skoda-logo-1999-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 233589
            }
        ]
    },
    "smart": {
        "name": "Smart",
        "logotype": {
            "uri": "https://vl.imgix.net/img/smart-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10208
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/smart-logo-1994-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 85243
            }
        ]
    },
    "smz": {
        "name": "SMZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/smz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5553
        },
        "alternatives": []
    },
    "soueast": {
        "name": "Soueast",
        "logotype": {
            "uri": "https://vl.imgix.net/img/soueast-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8460
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/soueast-logo-1995-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 43194
            }
        ]
    },
    "spectre": {
        "name": "Spectre",
        "logotype": {
            "uri": "https://vl.imgix.net/img/spectre-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14182
        },
        "alternatives": []
    },
    "spirra": {
        "name": "Spirra",
        "logotype": {
            "uri": "https://vl.imgix.net/img/spirra-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5324
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/spirra-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 21096
            }
        ]
    },
    "spyker": {
        "name": "Spyker",
        "logotype": {
            "uri": "https://vl.imgix.net/img/spyker-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6834
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/spyker-logo-black-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 53766
            }
        ]
    },
    "srt": {
        "name": "SRT",
        "logotype": {
            "uri": "https://vl.imgix.net/img/srt-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1001
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/srt-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 11056
            }
        ]
    },
    "ssangyong": {
        "name": "SsangYong",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ssangyong-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6585
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ssangyong-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 54405
            }
        ]
    },
    "ssc": {
        "name": "SSC",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ssc-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7768
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ssc-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 282144
            }
        ]
    },
    "sterling": {
        "name": "Sterling",
        "logotype": {
            "uri": "https://vl.imgix.net/img/sterling-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6661
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/sterling-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 20784
            }
        ]
    },
    "steyr": {
        "name": "Steyr",
        "logotype": {
            "uri": "https://vl.imgix.net/img/steyr-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8520
        },
        "alternatives": []
    },
    "studebaker": {
        "name": "Studebaker",
        "logotype": {
            "uri": "https://vl.imgix.net/img/studebaker-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6965
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/studebaker-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 128968
            }
        ]
    },
    "subaru": {
        "name": "Subaru",
        "logotype": {
            "uri": "https://vl.imgix.net/img/subaru-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 13057
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/subaru-logo-2003-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 286937
            }
        ]
    },
    "suffolk-sportscars": {
        "name": "Suffolk Sportscars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/suffolk-sportscars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4442
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/suffolk-sportscars-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 60627
            }
        ]
    },
    "suzuki": {
        "name": "Suzuki",
        "logotype": {
            "uri": "https://vl.imgix.net/img/suzuki-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11576
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/suzuki-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 77861
            }
        ]
    },
    "tagaz": {
        "name": "TagAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tagaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6685
        },
        "alternatives": []
    },
    "talbot": {
        "name": "Talbot",
        "logotype": {
            "uri": "https://vl.imgix.net/img/talbot-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6228
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/talbot-logo-1440x900.png",
                "width": 1440,
                "height": 900,
                "mime": "image/png",
                "transparent": true,
                "size": 51223
            }
        ]
    },
    "tank": {
        "name": "Tank",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tank-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 18891
        },
        "alternatives": []
    },
    "tata": {
        "name": "Tata",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tata-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3277
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tata-logo-2000-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 19473
            }
        ]
    },
    "tatra": {
        "name": "Tatra",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tatra-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11770
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tatra-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 145831
            }
        ]
    },
    "tauro-sport-auto": {
        "name": "Tauro Sport Auto",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tauro-sport-auto-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12988
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tauro-sport-auto-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 198751
            }
        ]
    },
    "tazzari": {
        "name": "Tazzari",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tazzari-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3340
        },
        "alternatives": []
    },
    "techart": {
        "name": "TechArt",
        "logotype": {
            "uri": "https://vl.imgix.net/img/techart-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11802
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/techart-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 377443
            }
        ]
    },
    "tesla": {
        "name": "Tesla",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tesla-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2035
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tesla-logo-2003-2500x2500.png",
                "width": 2500,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 27480
            }
        ]
    },
    "think": {
        "name": "Think",
        "logotype": {
            "uri": "https://vl.imgix.net/img/think-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2251
        },
        "alternatives": []
    },
    "tianma": {
        "name": "Tianma",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tianma-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1532
        },
        "alternatives": []
    },
    "tianye": {
        "name": "Tianye",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tianye-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6953
        },
        "alternatives": []
    },
    "tofas": {
        "name": "Tofas",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tofas-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2934
        },
        "alternatives": []
    },
    "toyota": {
        "name": "Toyota",
        "logotype": {
            "uri": "https://vl.imgix.net/img/toyota-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12387
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/toyota-logo-1989-2560x1440.png",
                "width": 2560,
                "height": 1400,
                "mime": "image/png",
                "transparent": true,
                "size": 150561
            }
        ]
    },
    "toyota-crown": {
        "name": "Toyota Crown",
        "logotype": {
            "uri": "https://vl.imgix.net/img/toyota-crown-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11771
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/toyota-crown-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 165887
            }
        ]
    },
    "trabant": {
        "name": "Trabant",
        "logotype": {
            "uri": "https://vl.imgix.net/img/trabant-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5461
        },
        "alternatives": []
    },
    "tramontana": {
        "name": "Tramontana",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tramontana-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2885
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tramontana-logo-black-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 7983
            }
        ]
    },
    "trion": {
        "name": "Trion",
        "logotype": {
            "uri": "https://vl.imgix.net/img/trion-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6457
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/trion-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 76502
            }
        ]
    },
    "triumph": {
        "name": "Triumph",
        "logotype": {
            "uri": "https://vl.imgix.net/img/triumph-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4785
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/triumph-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 33285
            }
        ]
    },
    "troller": {
        "name": "Troller",
        "logotype": {
            "uri": "https://vl.imgix.net/img/troller-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9039
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/troller-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 46474
            }
        ]
    },
    "trumpchi": {
        "name": "Trumpchi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/trumpchi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 16886
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/trumpchi-866x866.png",
                "width": 866,
                "height": 866,
                "mime": "image/png",
                "transparent": true,
                "size": 123664
            }
        ]
    },
    "tvr": {
        "name": "TVR",
        "logotype": {
            "uri": "https://vl.imgix.net/img/tvr-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1484
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/tvr-logo-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 4180
            }
        ]
    },
    "uaz": {
        "name": "UAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/uaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6217
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/uaz-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 37035
            }
        ]
    },
    "ud-trucks": {
        "name": "UD Trucks",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ud-trucks-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10502
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ud-trucks-logo-3000x2500.png",
                "width": 3000,
                "height": 2500,
                "mime": "image/png",
                "transparent": true,
                "size": 359601
            }
        ]
    },
    "ultima-sports": {
        "name": "Ultima Sports",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ultima-sports-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7247
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/ultima-sports-logo-640x480.png",
                "width": 640,
                "height": 480,
                "mime": "image/png",
                "transparent": true,
                "size": 6055
            }
        ]
    },
    "ural": {
        "name": "URAL",
        "logotype": {
            "uri": "https://vl.imgix.net/img/ural-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2282
        },
        "alternatives": []
    },
    "vandenbrink": {
        "name": "Vandenbrink",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vandenbrink-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10376
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/vandenbrink-logo-640x265.jpg",
                "width": 640,
                "height": 265,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 16436
            }
        ]
    },
    "vauxhall": {
        "name": "Vauxhall",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vauxhall-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 14323
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/vauxhall-logo-2008-red-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 249282
            }
        ]
    },
    "vazinterservice": {
        "name": "VAZINTERSERVICE",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vazinterservice-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3511
        },
        "alternatives": []
    },
    "vector-motors": {
        "name": "Vector Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vector-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8733
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/vector-motors-logo-1366x768.png",
                "width": 1366,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 62515
            }
        ]
    },
    "vencer": {
        "name": "Vencer",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vencer-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 17244
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/vencer-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 117270
            }
        ]
    },
    "venturi": {
        "name": "Venturi",
        "logotype": {
            "uri": "https://vl.imgix.net/img/venturi-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3139
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/venturi-logo-640x151.png",
                "width": 640,
                "height": 151,
                "mime": "image/png",
                "transparent": true,
                "size": 3298
            }
        ]
    },
    "venucia": {
        "name": "Venucia",
        "logotype": {
            "uri": "https://vl.imgix.net/img/venucia-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15930
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/venucia-logo-2017-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 184414
            }
        ]
    },
    "viper": {
        "name": "Viper",
        "logotype": {
            "uri": "https://vl.imgix.net/img/viper-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7645
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/viper-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 52075
            }
        ]
    },
    "volkswagen": {
        "name": "Volkswagen",
        "logotype": {
            "uri": "https://vl.imgix.net/img/volkswagen-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12471
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/volkswagen-logo-2015-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 109378
            }
        ]
    },
    "volvo": {
        "name": "Volvo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/volvo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8444
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/volvo-logo-2014-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 77682
            }
        ]
    },
    "vortex": {
        "name": "Vortex",
        "logotype": {
            "uri": "https://vl.imgix.net/img/vortex-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4664
        },
        "alternatives": []
    },
    "voyah": {
        "name": "Voyah",
        "logotype": {
            "uri": "https://vl.imgix.net/img/voyah-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15654
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/voyah-1262x431.png",
                "width": 1262,
                "height": 431,
                "mime": "image/png",
                "transparent": true,
                "size": 48805
            }
        ]
    },
    "w-motors": {
        "name": "W Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/w-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10329
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/w-motors-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 161393
            }
        ]
    },
    "wanderer": {
        "name": "Wanderer",
        "logotype": {
            "uri": "https://vl.imgix.net/img/wanderer-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4497
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/wanderer-logo-black-2560x1440.jpg",
                "width": 2560,
                "height": 1440,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 91567
            }
        ]
    },
    "wartburg": {
        "name": "Wartburg",
        "logotype": {
            "uri": "https://vl.imgix.net/img/wartburg-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5408
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/wartburg-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 61268
            }
        ]
    },
    "western-star": {
        "name": "Western Star",
        "logotype": {
            "uri": "https://vl.imgix.net/img/western-star-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6710
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/western-star-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 101676
            }
        ]
    },
    "westfield": {
        "name": "Westfield",
        "logotype": {
            "uri": "https://vl.imgix.net/img/westfield-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 8813
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/westfield-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 36457
            }
        ]
    },
    "wiesmann": {
        "name": "Wiesmann",
        "logotype": {
            "uri": "https://vl.imgix.net/img/wiesmann-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9374
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/wiesmann-logo-2048x2048.png",
                "width": 2048,
                "height": 2048,
                "mime": "image/png",
                "transparent": true,
                "size": 466344
            }
        ]
    },
    "willys-knight": {
        "name": "Willys Knight",
        "logotype": {
            "uri": "https://vl.imgix.net/img/willys-knight-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5775
        },
        "alternatives": []
    },
    "willys-overland": {
        "name": "Willys Overland",
        "logotype": {
            "uri": "https://vl.imgix.net/img/willys-overland-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7934
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/willys-overland-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 128837
            }
        ]
    },
    "wuling": {
        "name": "Wuling",
        "logotype": {
            "uri": "https://vl.imgix.net/img/wuling-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6894
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/wuling-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 127048
            }
        ]
    },
    "xin-kai": {
        "name": "Xin kai",
        "logotype": {
            "uri": "https://vl.imgix.net/img/xin-kai-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 11728
        },
        "alternatives": []
    },
    "xpeng": {
        "name": "Xpeng",
        "logotype": {
            "uri": "https://vl.imgix.net/img/xpeng-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 3677
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/xpeng-640x427.png",
                "width": 640,
                "height": 427,
                "mime": "image/png",
                "transparent": true,
                "size": 9587
            }
        ]
    },
    "yamal": {
        "name": "YAMAL",
        "logotype": {
            "uri": "https://vl.imgix.net/img/yamal-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9197
        },
        "alternatives": []
    },
    "yo-mobile": {
        "name": "E Mobile",
        "logotype": {
            "uri": "https://vl.imgix.net/img/yo-mobile-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 4495
        },
        "alternatives": []
    },
    "yulon": {
        "name": "Yulon",
        "logotype": {
            "uri": "https://vl.imgix.net/img/yulon-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2951
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/yulon-logo-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": true,
                "size": 12863
            }
        ]
    },
    "yutong": {
        "name": "Yutong",
        "logotype": {
            "uri": "https://vl.imgix.net/img/yutong-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2971
        },
        "alternatives": []
    },
    "zarooq-motors": {
        "name": "Zarooq Motors",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zarooq-motors-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 17533
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zarooq-motors-logo-1024x768.png",
                "width": 1024,
                "height": 768,
                "mime": "image/png",
                "transparent": true,
                "size": 126877
            }
        ]
    },
    "zastava": {
        "name": "Zastava",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zastava-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5057
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zastava-logo-640x274.jpg",
                "width": 640,
                "height": 274,
                "mime": "image/jpeg",
                "transparent": false,
                "size": 28851
            }
        ]
    },
    "zaz": {
        "name": "ZAZ",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zaz-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 15491
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zaz-logo-800x600.png",
                "width": 800,
                "height": 600,
                "mime": "image/png",
                "transparent": true,
                "size": 31970
            }
        ]
    },
    "zeekr": {
        "name": "Zeekr",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zeekr-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 1251
        },
        "alternatives": []
    },
    "zenos-cars": {
        "name": "Zenos Cars",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zenos-cars-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 10846
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zenos-cars-logo-1920x1080.png",
                "width": 1920,
                "height": 1080,
                "mime": "image/png",
                "transparent": true,
                "size": 121180
            }
        ]
    },
    "zenvo": {
        "name": "Zenvo",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zenvo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 12475
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zenvo-logo-2009-2560x1440.png",
                "width": 2560,
                "height": 1440,
                "mime": "image/png",
                "transparent": false,
                "size": 254239
            }
        ]
    },
    "zibar": {
        "name": "Zibar",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zibar-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 5073
        },
        "alternatives": []
    },
    "zil": {
        "name": "ZiL",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zil-logo-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 2041
        },
        "alternatives": []
    },
    "zis": {
        "name": "ZIS",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zis-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 9539
        },
        "alternatives": []
    },
    "zotye": {
        "name": "Zotye",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zotye-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 7403
        },
        "alternatives": [
            {
                "uri": "https://vl.imgix.net/img/zotye-logo-1500x1500.png",
                "width": 1500,
                "height": 1500,
                "mime": "image/png",
                "transparent": true,
                "size": 75701
            }
        ]
    },
    "zx-auto": {
        "name": "Zx Auto",
        "logotype": {
            "uri": "https://vl.imgix.net/img/zx-auto-logo.png",
            "width": 240,
            "height": 180,
            "mime": "image/png",
            "transparent": true,
            "size": 6953
        },
        "alternatives": []
    }
}