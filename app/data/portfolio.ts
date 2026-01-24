export const portfolioData = {
    // =========================================================================================
    //  INFORMACIÓN PERSONAL
    // =========================================================================================
    personal: {
        name: "Robert",
        surname: "Martí",
        title: "Hola, mi nombre és",
        location: "Granollers,Catalunya",
        // Tu biografía corta
        bio: ""
    },

    // =========================================================================================
    //  REDES SOCIALES
    // =========================================================================================

    socials: [
        {
            label: 'Instagram',
            href: 'https://github.com',
            icon: 'Instagram'
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: 'Linkedin'
        },
        {
            label: 'Twitter',
            href: 'https://twitter.com',
            icon: 'Twitter'
        },
        {
            label: 'Email',
            href: 'mailto:contacto@ejemplo.com',
            icon: 'Mail'
        },
    ],

    // =========================================================================================
    //  EXPERIENCIA
    // =========================================================================================

    experience: [
        {
            title: 'Administrador de Sistemas en Techpole Solutions',
            role: 'Administrador de Sistemas en Techpole Solutions', // Añadimos esto
            period: 'Actualidad',                                  // Añadimos esto
            description: 'Responsable de la infraestructura crítica...',
            tags: ['Windows Server', 'Linux', 'VMware', 'Cybersecurity', 'Active Directory'],
            links: { github: '#', demo: '#' },
            image: './tu-imagen-techpole.webp',
            featured: true
        },
        {
            title: 'Infraestructura Web & Backend en Asialink',
            role: 'Infraestructura Web & Backend en Asialink',   // Añadimos esto
            period: 'Anterior',                                    // Añadimos esto
            description: 'Gestión integral del entorno web...',
            tags: ['Backend', 'SQL', 'WordPress', 'SEO Técnico', 'Web Infrastructure'],
            links: { github: '#', demo: '#' },
            image: './tu-imagen-asialink.webp',
            featured: false
        },
    ],

    // =========================================================================================
    //  PROYECTOS
    // =========================================================================================

    projects: [

        {
            title: 'SysAdmin Tools con Bash',
            description: 'Un script en Bash que permite gestionar usuarios en sistemas Linux de manera sencilla y eficiente, facilitando tareas administrativas comunes.',
            tags: ['Bash', 'Linux', 'Shell', 'scripting'],
            links: {
                github: 'https://github.com/RobertMartiB/sysadmin-tools-bash', demo: '#'
            },
            image: './Adobe Express - file.webp',
            featured: true
        },

        {
            title: 'Fast Fuel ',
            description: 'Este es el proyecto de mi equipo para el proyecto final del ciclo de administración de sistemas. Consiste en una página web para realizar los pedido y pagos en tiempo real a demas implementamos circuito para simualñr el sistema de repostaje de una gasoliuenra normal i corinete',
            tags: ['Windows Server', 'Linux', 'Scripting', 'Arduino', 'HTML', 'CSS', 'SQL'],
            links: {
                github: 'https://publuu.com/flip-book/1048400/2324769/page/2', demo: '#'
            },
            image: './22579.webp',
            featured: true
        },
    ],

    // =========================================================================================
    //  TECNOLOGÍAS
    // =========================================================================================
    /*
     *  Las tecnologías que usas.
     */
    technologies: [
        {
            category: "Sistemas",
            items: [
                { name: "Linux", icon: "linux" },
                { name: "Windows Server", icon: "windows" },
                { name: "Ubuntu", icon: "ubuntu" },]
        },
        {
            category: "Redes & Cloud",
            items: [
                { name: "Cisco", icon: "cisco" },
                { name: "AWS", icon: "amazonaws" },
                { name: "Azure", icon: "microsoftazure" },
                { name: "VMware", icon: "vmware" },
            ]
        },
        {
            category: "Scripting & Tools",
            items: [
                { name: "Bash", icon: "gnubash" },
                { name: "PowerShell", icon: "powershell" },
                { name: "Git", icon: "git" },
            ]
        }
    ],

    // =========================================================================================
    //  CONTACTO
    // =========================================================================================
    contact: {
        heading: "Trabajemos juntos.",
        description: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible para responderte!",
        email: "martibadiarobert@gmail.com",
        cta: "Saludar"
    },

    // =========================================================================================
    //  BLOG / GUÍAS
    // =========================================================================================

}
