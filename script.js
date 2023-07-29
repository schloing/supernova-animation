var target = document.getElementsByClassName("target")[0];
var narrationText = document.getElementById("narrationText");
var sol = document.getElementById("sol");

document.body.style.transition = "1s";

function start() {
    target.style.transition = "2s";
    setTimeout(() => {
        target.style.animation = "shake 0.5s infinite";
        target.style.animation = "startScaling 5s cubic-bezier(1,.01,.74,1.27) forwards";
        document.getElementById("supernova").style.display = "block";
        narrationText.innerHTML = "Oh wait. Somethings happening. These are usually very quick. There's really not enough time to speak!"
        document.body.style.transform = "scale(0.8)";
        setTimeout(() => {
            document.getElementById("supernova").style.animation = "startSupernova 5s cubic-bezier(0,2.04,0,1.03) forwards";
            narrationText.innerHTML = "No way! It just went supernova! I wonder what the chances were that we got to witness this!"
            document.body.style.transform = "scale(0.75)";
            setTimeout(() => {
                document.getElementById("supernova1").style.display = "block";
                document.getElementById("supernova1").style.animation = "wave2 5s cubic-bezier(0,2.04,0,1.03) forwards";
                document.body.style.transform = "scale(0.8)";
                sol.style.display = "block";
                narrationText.innerHTML = "To be honest, it would be a good idea to get out of here, quick. Look at the size of that supernova compared to the red giant sun (approx. 100 R☉). At least the neutron star is going to be only around 20km wide (scale is exaggerated in animation, it's about 34785000 times larger than it is supposed to be, which is too small to be shown with a pixel)."
                setTimeout(() => {
                    document.body.style.transform = "scale(0.5)";
                    document.getElementById("supernova2").style.display = "block";
                    document.getElementById("supernova2").style.animation = "wave3 10s cubic-bezier(0,2.04,0,1.03) forwards";
                    setTimeout(() => {
                        document.body.style.transform = "scale(2)";
                    }, 5000);
                }, 2500);
            }, 2000);
            target.style.animation = "shrinkToNeutronStar 2s cubic-bezier(1,.01,.74,1.27) forwards";
        }, 4500);
    }, 5000);
}

start();

// list jokes
// var jokes = [
//     "What do you call a fake noodle? An Impasta.",
//     "What do you call a pile of cats? A meowntain.",
//     "What do you call a pile of kittens? A meowntain.",
//     "What do you call a pile of rabbits? A meowntain.",
//     "What do you call a pile of spiders? A meowntain.",
//     "What do you call a pile of bears? A meowntain.",
// the day copilot had a seizure