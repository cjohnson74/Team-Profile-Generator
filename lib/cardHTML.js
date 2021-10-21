const cardHTML = {
    managerCardHTML: ({name, id, email, officeNumber}) => { 
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Document</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <div class="wrapper">
            <div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role"><i class="fas fa-mug-hot white"></i> Manager</h3>
    </section>
    <section class="body">
        <p class="id">ID: ${id}</p>
        <p class="email">Email: <a href="mailto:${email}"> ${email}</a></p>
        <p class="other">Office Number: ${officeNumber}</p>
    </section>
    </div>`
    },
    engineerCardHTML: ({name, id, email, github}) => { 
        return `<div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role"><i class="fas fa-glasses white"></i> Engineer</h3>
    </section>
    <section class="body">
        <p class="id">ID: ${id}</p>
        <p class="email">Email: <a href="mailto:${email}"> ${email}</a></p>
        <p class="other">GitHub: <a href="http://github.com/${github}">${github}</a></p>
    </section>
    </div>`
    },
    internCardHTML: ({name, id, email, school}) => {
        return `<div class="card">
    <section class="header">
        <h2 class="name">${name}</h2>
        <h3 class="role"><i class="fas fa-user-graduate white"></i> Intern</h3>
    </section>
    <section class="body">
        <p class="id">ID: ${id}</p>
        <p class="email">Email: <a href="mailto:${email}"> ${email}</a></p>
        <p class="other">School: ${school}</p>
    </section>
    </div>`
    },
    endHTML: `</div>
    </body>
    </html>`
} 

module.exports = cardHTML;