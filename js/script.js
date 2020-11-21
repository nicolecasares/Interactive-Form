const nameInput = document.querySelector('input#name');
nameInput.focus();

//this fuction validates the job title drop down menu. If a user selects other then they will be given the option to type one in
const validateJobTitle = () => {
    const titleInput = document.querySelector('#title');
    const titleInputeValue = titleInput.value;

    const otherJobInput = document.querySelector('#other-job-role');

    const otherOption = document.querySelector('option[value="other"]').value;

    otherJobInput.style.display = "none";

    titleInput.addEventListener('change', function(e) { 
        console.log(e.target.value);

        if(e.target.value === 'other') {
            otherJobInput.style.display = "inline-block";
        }
    }); 
    

}

validateJobTitle();

