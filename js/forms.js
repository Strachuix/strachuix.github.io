//generating forms

function generateForm(formName) {
    output = '';
    switch (formName) {
        case 'login':
            output = `
                <form id="loginForm">`
                output += getEmailInput();
                output += getPasswordInput("Password", 'password');
                output += getSubmitButton('Login');
            output +=`</form>`;
        case 'registration':
            output = `
                <form id="registrationForm">`
            output += getTextInput('firstName', 'First Name');
            output += getTextInput('lastName', 'Last Name');
            output += getEmailInput();
            output += getPasswordInput("Password", 'password');
            output += getPasswordInput("Confirm Password", 'confirmPassword');
            output += getSubmitButton('Register');
            output +=`</form>`;
        case 'debug':
            output = `
                <form id="debugForm">`
            output += getAllInputs();
            output +=`</form>`;
        default:
            output = '<p>Form not found.</p>';
    }
    return output;
}

function getAllInputs() {
    return `
        ${getTextInput('name', 'Name')}
        ${getEmailInput()}
        ${getPasswordInput("Password", 'password')}
        ${getPasswordInput("Confirm Password", 'confirmPassword')}
        ${getNumberInput('age', 'Age')}
        ${getSubmitButton('Submit')}`;
}

function getTextInput(name, label) {
    return `
        <div class="form-group">
            <label for="${name}">${label}</label>
            <input type="text" id="${name}" name="${name}" class="form-control" required>
        </div>`;
}

function getEmailInput() {
    return `
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control" required>
        </div>`;
}

function getPasswordInput(label, name) {
    return `
        <div class="form-group">
            <label for="${name}">${label}</label>
            <input type="password" id="${name}" name="${name}" class="form-control" required>
        </div>`;
}

function getNumberInput(name, label) {
    return `
        <div class="form-group">
            <label for="${name}">${label}</label>
            <input type="number" id="${name}" name="${name}" class="form-control" required>
        </div>`;
}

function getSubmitButton(value) {
    return `
        <div class="form-group">
            <button type="submit" class="btn btn-primary">${value}</button>
        </div>`;
}

