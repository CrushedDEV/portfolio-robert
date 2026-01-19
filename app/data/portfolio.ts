export const portfolioData = {
    // =========================================================================================
    //  INFORMACIÓN PERSONAL
    // =========================================================================================
    personal: {
        name: "Robert",
        surname: "Martí",
        title:"Hola, mi nombre és",
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
            company: 'TechPole Solutions',
            role: 'Asistente de Contenidos Web & SEO',
            period: 'Octubre 2025 - Presente',
            location: 'Les Franqueses del Vallés, España',
            description: [
                '– Gestión y actualización del catálogo digital mediante Prestashop, asegurando la correcta publicación de productos, atributos y recursos multimedia.',
                '– Redacción y optimización de contenido para blog y fichas de producto con enfoque en SEO on-page y mejora del posicionamiento orgánico.'
            ]
        },
        {
            company: 'Asialink',
            role: 'Administrador de Sistemas [Prácticas]',
            period: 'Septiembre 2025 - Marzos 2026',
            location: 'La Roca del Vallés, España',
            description: [
                'Gestión y administración de sistemas en entornos Linux/Windows',
                'Uso de AWS (EC2, S3, IAM) para despliegue y mantenimiento de servicios',
                'Soporte en el desarrollo y mantenimiento de aplicaciones web'
            ]
        },
    ],

    // =========================================================================================
    //  PROYECTOS
    // =========================================================================================

    projects: [
        {
            title: 'Configuración de Firewall i Monotoreo de un servidor en Linux',
            description: 'Una guía completa sobre cómo configurar un firewall efectivo y monitorear un servidor Linux para garantizar su seguridad y rendimiento óptimo.',
            tags: ['Linux', 'Firewall', 'Seguridad'],
            links: {
                caseStudy: '/blog/configuracion-firewall-linux'
            },
            image: '../../public/assets/images/projects/firewall-linux.png',
            featured: true
        },
        {
            title: 'Gestor de usuarios con Bash',
            description: 'Un script en Bash que permite gestionar usuarios en sistemas Linux de manera sencilla y eficiente, facilitando tareas administrativas comunes.',
            tags: ['Bash', 'Linux', 'Scripting'],
            links: { 
                github: '#', demo: '#'
            },
            image: '../../public/assets/images/projects/gestor-usuarios-bash.png',
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
                { name: "Ubuntu", icon: "ubuntu" },            ]
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
