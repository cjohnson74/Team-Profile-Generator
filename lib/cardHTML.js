const cardHTML = {
    managerCardHTML: ({name, id, email, officeNumber}) => { 
        return `<div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role">Manager</h3>
    </section>
    <section class="body">
        <p class="id">${id}</p>
        <p class="email">${email}</p>
        <p class="other">${officeNumber}</p>
    </section>
    </div>`
    },
    engineerCardHTML: ({name, id, email, github}) => { 
        return `<div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role">Engineer</h3>
    </section>
    <section class="body">
        <p class="id">${id}</p>
        <p class="email">${email}</p>
        <p class="other">${github}</p>
    </section>
    </div>`
    },
    internCardHTML: ({name, id, email, officeNumber}) => {
        return `<div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role">Intern</h3>
    </section>
    <section class="body">
        <p class="id">${id}</p>
        <p class="email">${email}</p>
        <p class="other">${officeNumber}</p>
    </section>
    </div>`
    }
} 

module.exports = cardHTML;