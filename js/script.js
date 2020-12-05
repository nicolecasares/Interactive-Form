const nameInput = document.querySelector('input#name');
nameInput.focus();

//this fuction validates the job title drop down menu. If a user selects other then they will be given the option to type one in
const validateJobTitle = () => {
    const titleInput = document.querySelector('#title');
    const otherJobInput = document.querySelector('#other-job-role');
    const otherOption = document.querySelector('option[value="other"]').value;

    otherJobInput.style.display = "none";

    titleInput.addEventListener('change', function(e) { 

        if(e.target.value === 'other') {
            otherJobInput.style.display = "inline-block";
        } else {
            otherJobInput.style.display = "none";
        }
    }); 
    

}

//this fuction will make it so that the user cannot pick a color until the pick a t-shirt design
const validateColor = () => {
    const designLable = document.querySelector('select#design');
    const colorLable = document.querySelector('select#color');

    designLable.addEventListener('change', function(e) {
        colorLable.removeAttribute('disabled');

        //selected color options
        const jsPunsOptions = document.querySelectorAll('#color option[data-theme = "js puns"]');

        console.log(jsPunsOptions);
        const heartJsOptions = document.querySelectorAll('#color option[data-theme = "heart js"]');  
        

        if(designLable.value === 'js puns') {
            heartJsOptions.forEach(function(color){
                color.style.display = 'none';
                jsPunsOptions.forEach(function(color){
                    color.style.display = 'block'; 
                });
            });
        }
        
        if(designLable.value === 'heart js') {
            jsPunsOptions.forEach(function(color){
                color.style.display = 'none'; 
            });
            heartJsOptions.forEach(function(color){
                color.style.display = 'block';
            });
        }
    });

};

validateJobTitle();
validateColor();

