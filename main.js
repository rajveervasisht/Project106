function start_classification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/U2dCQ8dCf/model.json",model_ready)
}

function model_ready(){
classifier.classify(got_results)
}

function got_results(error,results){
    console.log(results)
    if(error){
        console.log(error)
    }
    else{
        document.getElementById("result_label").innerHTML="I can hear "+results[0].label
        document.getElementById("result_accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%";

        img=document.getElementById("img");
        
        if(results[0].label=="Meowing"){
            img.src="Cat.png";
        }
        else if(results[0].label=="Mooing"){
            img.src="cow.png";
        }
        else if(results[0].label=="Barking"){
            img.src="Dog.png";
        }
        else if(results[0].label=="Roar"){
            img.src="Lion.png";
        }
    }
}
