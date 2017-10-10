var quotes = ["If it is right it happens—the main thing is not to hurry Nothing good gets away", "You don't love because: you love despite not for the virtues, but despite the faults", "In love there are two things—bodies and words", "It doesn’t matter who you are or what you look like, so long as somebody loves you", "The desire to get married is a basic and primal instinct in women. It’s followed by another basic and primal instinct the desire to be single again", "I have learned not to worry about love; but to honor its coming with all my heart", "Love consists of this: two solitudes that meet, protect and greet each other.", "Love is like the wind, you can’t see it but you can feel it", "We love the things we love for what they are", "The one thing we can never get enough of is love. And the one thing we never give enough is love"];

var author = ["John Steinbeck", "William Faulkner", "Joyce Carol Oates", "Roald Dahl", "Nora Ephron", "Alice Walker", "Maria Rilke", "Nicholas Sparks", "Robert Frost", "Henry Miller"];

var color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


var i=0;
function change(){
    var p =Math.floor(Math.random()*color.length);
    if(i<quotes.length){
        i=i+1;
    }else{
        i=0;
    }
    document.getElementById("quote").innerHTML=quotes[i];
    document.getElementById("author").innerHTML=author[i];

    document.getElementById("main").style.backgroundColor=color[i];
    
    document.getElementById("box").style.background=color[p];
}







