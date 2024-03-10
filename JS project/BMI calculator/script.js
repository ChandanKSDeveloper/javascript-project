const button = document.querySelector('#calculate');
button.addEventListener('click',function(event){
    event.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    if(height=='' || weight ==''){
        alert('Please fill out the input field');
        return;
    } else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        document.querySelector('#result').innerHTML=bmi;
        let status ='';
        if(bmi<18.6){
            status="Underwight";
        } else if(bmi >= 18.5 && bmi < 24){
            status="Healthy";
        } else if(bmi>=25 && bmi<30){
            status='Overweight';
        } else if(bmi>30){
            status="Obese";
        }
        document.querySelector('.comment').innerHTML =`You are <span id="comment"> ${status}</span>`
    }

   

})
