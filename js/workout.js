var presets = [
	{
		"name":"Dirty Dozen",
		"steps": [
			{"name":"Bicycle Kicks", "time":60},
			{"name":"Push Up Side Plank", "reps":20},
			{"name":"Back Bridge", "reps":15},
			{"name":"Ab Scissors", "reps":30},
			{"name":"Plank", "time":60},
			{"name":"Fire Hydrant", "reps":"15 each side"},
			{"name":"Side Plank Left", "time":30},
			{"name":"Side Plank Right", "time":30},
			{"name":"Donkey Extension", "reps":"15 each side"},
			{"name":"V-Ups", "reps":15},
			{"name":"Prone Knee Thrust", "reps":"5 each side"},
			{"name":"Standing Glute-Iso's", "reps":"5 front, side, rear; each side"},
			{"name":"Push Up", "reps":55}
		]
	},
	{
		"name":"Alec's Fun Workout",
		"steps": [
			{"name":"Russian Twist", "time":120, "special":30},
			{"name":"Bicycle Kicks", "time":120},
			{"name":"Dumbbell Squats", "reps":"4x25 reps"},
			{"name":"Plank", "time":120},
			{"name":"Side Plank Left", "time":60, "special":15},
			{"name":"Side Plank Right", "time":60, "special":15},
			{"name":"Standing Glute-Iso's", "reps":"5 front, side, rear; each side"},
			{"name":"Ab Scissors", "reps":100},
			{"name":"Pushups", "reps":55},
			{"name":"Situps", "reps":"10x10 reps"},
			{"name":"Leg Push Downs", "reps":"2x25 reps"}
		]
	}
]

function createDiv(text, divClass, parentElement, editable=false) {
	var newDiv = document.createElement("div");
	newDiv.innerHTML = text;
	newDiv.classList.add(divClass);
	if (editable) {
		newDiv.contentEditable = true;
	}
	parentElement.appendChild(newDiv);
}

function createDelButton(parentElement) {
	var newButton = document.createElement("button");
	newButton.classList.add("delButton");
	newButton.innerHTML = "Delete";
	newButton.onclick = function() {
		parentElement.remove();
	}
	parentElement.appendChild(newButton);
}

function renderWorkout(steps, wkElement, builder=false) {
	var x;
	for (x of steps) {
		var newStep = document.createElement("div");
		newStep.classList.add("stepContainer");
		createDiv(x.name, "step", newStep);

		var wkdesc;
		if (x.hasOwnProperty("time")) {
			if (builder) {
				wkdesc = x.time;
			} else {
				wkdesc = x.time + " seconds"
			}
		} else {
			if (typeof(x.reps) === "number") {
				wkdesc = x.reps + " reps";
			} else {
				wkdesc = x.reps;
			}
		}
		createDiv(wkdesc, "reps", newStep);

		if (builder) {
			createDelButton(newStep)
		}
		wkElement.appendChild(newStep);
	}
}