// donate form
document.getElementById("btn-donation")
    .addEventListener('click', function(){
        console.log("show btn clicked");
        showSectionById("donation-form")
        showButtonById("btn-donation")
    })

// history form
document.getElementById("btn-history")
    .addEventListener('click', function(){
        console.log("history clicked");
        showSectionById("history-form")
        showButtonById("btn-history")
    })
