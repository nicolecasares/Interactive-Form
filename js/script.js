const nameInput = document.querySelector('input#name');
nameInput.focus();

// future nicole, wrap this in an event listener

// .addEventListener('click', function(event) { 
//     console.log(event.target.value) 
const validateJobTitle = () => {
    const titleInput = document.querySelector('#title');
    const titleInputeValue = titleInput.value;

    const otherJobInput = document.querySelector('#other-job-role');

    const otherOption = document.querySelector('option[value="other"]').value;

    otherJobInput.style.display = "none";
    console.log(otherOption, titleInput);

    titleInput.addEventListener('click', function(e) { 
        console.log(e.target.value);

        if(titleInput === otherOption) {
            alert("Please select a card type");
            otherJobInput.style.display = "inline-block";
        }
    }); 
    

}

validateJobTitle();

