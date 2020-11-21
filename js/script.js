const nameInput = document.querySelector('input#name');
nameInput.focus();


const validateJobTitle = () => {
    const titleInput = document.querySelector('#title').value;
    const otherJobInput = document.querySelector('#other-job-role');
    const otherOption = document.querySelector('option[value="other"]').value;

    otherJobInput.style.display = "none";
    console.log(otherOption, titleInput);

    if(titleInput === otherOption) {
        alert("Please select a card type");
        otherJobInput.style.display = "inline-block";
    }

}

validateJobTitle();

