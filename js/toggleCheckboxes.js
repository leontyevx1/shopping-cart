function toggleCheckboxes () {
    const masterCheckbox = document.getElementById('masterCheckbox');
    const masterCheckboxMobile = document.getElementById('masterCheckboxMobile')
    const checkbox1 = document.getElementById('checkbox111');
    const checkbox2 = document.getElementById('checkbox222');
    const checkbox3 = document.getElementById('checkbox333');
    const checkboxMobile1 = document.getElementById('mobileCheckbox1');
    const checkboxMobile2 = document.getElementById('mobileCheckbox2');
    const checkboxMobile3 = document.getElementById('mobileCheckbox3');

    if (masterCheckbox.checked || masterCheckboxMobile.checked) {
        checkbox1.checked = true;
        checkboxMobile1.checked = true;
        checkbox2.checked = true;
        checkboxMobile2.checked = true;
        checkbox3.checked = true;
        checkboxMobile3.checked = true;
    } else {
        checkbox1.checked = false;
        checkboxMobile1.checked = false;
        checkbox2.checked = false;
        checkboxMobile2.checked = false;
        checkbox3.checked = false;
        checkboxMobile3.checked = false;
    }
}
