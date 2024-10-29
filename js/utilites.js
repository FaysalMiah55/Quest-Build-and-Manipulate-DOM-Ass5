// get input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

// get text value
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber
}

// toggle feature section
function showSectionById(id){
    // hidden all the section
    document.getElementById("donation-form").classList.add("hidden")
    document.getElementById("history-form").classList.add("hidden")
    // show the section
    document.getElementById(id).remove("hidden")
}