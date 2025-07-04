//generating forms

function generateForm(formName) {
    output = '';
    switch (formName) {
        case 'login':
            output = `
                <form id="loginForm">`
                output += getEmailInput();
                output += getPasswordInput("password", 'Password');
                output += getSubmitButton('Login');
            output +=`</form>`;
        case 'registration':
            output = `
                <form id="registrationForm">`
            output += getTextInput('firstName', 'First Name');
            output += getTextInput('lastName', 'Last Name');
            output += getEmailInput();
            output += getPasswordInput("password", 'Password');
            output += getPasswordInput("confirmPassword", 'Confirm Password');
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
        ${getPasswordInput("password", 'Password')}
        ${getPasswordInput("confirmPassword", 'Confirm Password')}
        ${getNumberInput('age', 'Age')}
        ${getSelectInput('select', 'Select Option', [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }])}
        ${getDateInput('date', 'Date')}
        ${getRadioInput('radio', 'Choose an option', [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }])}
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

function getSelectInput(name, label, options) {
    let optionsHtml = options.map(option => `<option value="${option.value}">${option.label}</option>`).join('');
    return `
        <div class="form-group">
            <label for="${name}">${label}</label>
            <select id="${name}" name="${name}" class="form-control" required>
                ${optionsHtml}
            </select>
        </div>`;
}

function getDateInput(name, label) {
    return `
        <div class="form-group">
            <label for="${name}">${label}</label>
            <input type="date" id="${name}" name="${name}" class="form-control" required>
        </div>`;
}

function getRadioInput(name, label, options) {
    let optionsHtml = options.map(option => `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="${name}" id="${option.value}" value="${option.value}" required>
            <label class="form-check-label" for="${option.value}">${option.label}</label>
        </div>`).join('');
    return `
        <div class="form-group">
            <label>${label}</label>
            ${optionsHtml}
        </div>`;
}

function getSubmitButton(value) {
    return `
        <div class="form-group">
            <button type="submit" class="btn btn-primary">${value}</button>
        </div>`;
}

