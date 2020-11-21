const nameInput = document.querySelector('input#name');
nameInput.focus();


const validateJobTitle = () => {
    const titleInput = document.querySelector('#title');
    const otherJobInput = document.querySelector('#other-job-role');
    const otherOption = titleInput[6];

    otherJobInput.style.display = "none";
    console.log(otherOption);

    if(titleInput.value == "other") {
        alert("Please select a card type");
        otherJobInput.style.display = "inline-block";
    }

}

validateJobTitle();

