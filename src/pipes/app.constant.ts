export const ColorMapping = [
    {
        primary: 'rgba(255,139,46,1)',
        secondary: 'rgba(255,139,46,0.3)'
    },
    {
        primary: 'rgba(163,99,255,1)',
        secondary: 'rgba(163,99,255,0.3)'
    },
    {
        primary: 'rgba(34,139,255,1)',
        secondary: 'rgba(34,139,255,0.3)'
    },
    {
        primary: 'rgba(95,192,32,1)',
        secondary: 'rgba(95,192,32,0.3)'
    },
    {
        primary: 'rgba(255,128,47,1)',
        secondary: 'rgba(255,128,47,0.3)'
    },
    {
        primary: 'rgba(251,70,70,1)',
        secondary: 'rgba(251,70,70,0.3)'
    },
    {
        primary: 'rgba(83,109,252,1)',
        secondary: 'rgba(83,109,252,0.3)'
    },
    {
        primary: 'rgba(15,186,208,1)',
        secondary: 'rgba(15,186,208,0.3)'
    }
]

export const SubjectMapping = {
    english: {
        icon: 'assets/imgs/book_english.svg',
        theme: {
            iconBgColor: ColorMapping[0].primary,
            pillBgColor: ColorMapping[0].secondary
        }
    },
    mathematics: {
        icon: 'assets/imgs/calculator.svg',
        theme: {
            iconBgColor: ColorMapping[1].primary,
            pillBgColor: ColorMapping[1].secondary
        }
    },
    science: {
        icon: 'assets/imgs/globe.svg',
        theme: {
            iconBgColor: ColorMapping[2].primary,
            pillBgColor: ColorMapping[2].secondary
        }
    },
    default: {
        icon: 'assets/imgs/book_default.svg',
        theme: null
    }
}

export const PrimaryCaregoryMapping = {
    "digital textbooks": {
        icon: 'assets/imgs/textbook.svg'
    },
    "courses": {
        icon: 'assets/imgs/course.svg'
    },
    "tv programs": {
        icon: 'assets/imgs/tv.svg'
    },
    "documents": {
        icon: 'assets/imgs/documents.svg'
    },
    "videos": {
        icon: 'assets/imgs/videos.svg'
    },
    "default": {
        icon: 'assets/imgs/all_content.svg'
    }
}

