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
    // hide all the section
    document.getElementById("donation-form").classList.add('hidden')
    document.getElementById("history-form").classList.add('hidden')
    
    // show the section with provide id as parameter
    document.getElementById(id).classList.remove('hidden')
    
}
function showButtonById(button){
    // hide all the background color
    document.getElementById("btn-donation").classList.remove('bg-[#B4F461]')
    document.getElementById("btn-history").classList.remove('bg-[#B4F461]')
    // add background to the active button
    document.getElementById(button).classList.add('bg-[#B4F461]')
}
