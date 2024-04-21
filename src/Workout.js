const code = `
<style>
h1{
  font-size: 50px;
  text-align: center;
}
h2{
  font-size: 40px;
  font-weight: normal; 
  color: black;
}
h3{
  font-size: 20px;
}
p{
  font-size: 16px;
  color: black; 
}
#gifs{
  width: 300px;
  height: 300px;
}

.container{
  display: flex;
  border-color:#008080; 
}

.exercise{
  text-align: center;
}

.exercise img{
  width: 300px;
  height: 300px;
  display: block; 
  margin: 0 auto;
}

.title{
  margin-bottom: 5px;
  font-weight: bold;
}

.description {
  margin-top: 5px; 
  font-size: 16x; 
  color: black; 
}
</style>
    <h1> Exercises </h1>
<h2>Chest</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Pushup</div>
    <img src="gifs/pushup.gif" alt="Pushup">
    <div class="description">The pushup is a classic bodyweight exercise that targets the chest, shoulders, and triceps.</div>
  </div>
  <div class="exercise">
    <div class="title">Barbell Press</div>
    <img src="gifs/barbell-press.gif" alt="Barbell Press">
    <div class="description">The barbell press, also known as the overhead press, is a compound exercise that targets the shoulders and triceps.</div>
  </div>
  <div class="exercise">
    <div class="title">Cable Flies</div>
    <img src="gifs/cable-flies.gif" alt="Cable Flies">
    <div class="description">Cable flies are a great isolation exercise for the chest, focusing on stretching and contracting the pectoral muscles.</div>
  </div>
</div>

<h2>Back</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Pull Ups</div>
    <img src="gifs/pull-ups.gif" alt="Pull Ups">
    <div class="description">Pull-ups are a compound exercise that targets the upper back, arms, and shoulders.</div>
  </div>
  <div class="exercise">
    <div class="title">Lat Pulldown</div>
    <img src="gifs/lat-pulldown.gif" alt="Lat Pulldown">
    <div class="description">The lat pulldown is a machine exercise that primarily targets the latissimus dorsi muscles of the back.</div>
  </div>
  <div class="exercise">
    <div class="title">Cable Rows</div>
    <img src="gifs/seated-rows.gif" alt="Cable Rows">
    <div class="description">Cable rows are a great exercise for building back strength and muscle mass.</div>
  </div>
</div>

<h2>Arms</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Lateral Raises</div>
    <img src="gifs/lateral-raises.gif" alt="Lateral Raises">
    <div class="description">Lateral raises target the deltoid muscles of the shoulders and are great for building shoulder width.</div>
  </div>
  <div class="exercise">
    <div class="title">Military Press</div>
    <img src="gifs/military-press.gif" alt="Military Press">
    <div class="description">The military press is a compound exercise that primarily targets the shoulders and triceps.</div>
  </div>
  <div class="exercise">
    <div class="title">Tricep Pulldown</div>
    <img src="gifs/tricep-pushdown.gif" alt="Tricep Pulldown">
    <div class="description">Tricep pulldowns isolate and target the triceps muscles for strength and definition.</div>
  </div>
  <div class="exercise">
    <div class="title">Bicep Curls</div>
    <img src="gifs/bicep-curls.gif" alt="Bicep Curls">
    <div class="description">Bicep curls are an essential exercise for building and strengthening the biceps muscles.</div>
  </div>
</div>

<h2>Quadriceps</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Barbell Squat</div>
    <img src="gifs/barbell-squat.gif" alt="Barbell Squat">
    <div class="description">Barbell squats are a compound exercise that targets the quadriceps, glutes, and hamstrings.</div>
  </div>
  <div class="exercise">
    <div class="title">Lunges</div>
    <img src="gifs/lunges.gif" alt="Lunges">
    <div class="description">Lunges are a unilateral leg exercise that strengthens the quadriceps, hamstrings, and glutes.</div>
  </div>
  <div class="exercise">
    <div class="title">Leg Extension</div>
    <img src="gifs/leg-extension.gif" alt="Leg Extension">
    <div class="description">Leg extensions target the quadriceps muscles and are commonly used in leg workouts.</div>
  </div>
</div>

<h2>Hamstrings</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Deadlift</div>
    <img src="gifs/deadlift.gif" alt="Deadlift">
    <div class="description">The deadlift is a compound exercise that targets the posterior chain, including the hamstrings, glutes, and lower back.</div>
  </div>
  <div class="exercise">
    <div class="title">Good Mornings</div>
    <img src="gifs/good-mornings.gif" alt="Good Mornings">
    <div class="description">Good mornings are a compound exercise that primarily targets the lower back and hamstrings.</div>
  </div>
  <div class="exercise">
    <div class="title">Leg Curls</div>
    <img src="gifs/leg-curls.gif" alt="Leg Curls">
    <div class="description">Leg curls isolate and target the hamstrings, helping to develop strength and definition in the back of the thigh.</div>
  </div>
</div>

<h2>Hips</h2>
<div class="container">
  <div class="exercise">
    <div class="title">Split Squats</div>
    <img src="gifs/split-squats.gif" alt="Split Squats">
    <div class="description">Split squats are a unilateral leg exercise that targets the quadriceps, hamstrings, and glutes.</div>
  </div>
  <div class="exercise">
    <div class="title">Hip Thrust</div>
    <img src="gifs/hip-thrust.gif" alt="Hip Thrust">
    <div class="description">Hip thrusts target the glutes and hamstrings and are great for building strength and power in the hips.</div>
  </div>
  <div class="exercise">
    <div class="title">Hip Abduction (Bands)</div>
    <img src="gifs/hip-abduction-band.gif" alt="Hip Abduction (Bands)">
    <div class="description">Hip abductions with bands target the outer thighs and hips, helping to strengthen and tone the hip muscles.</div>
  </div>
  <div class="exercise">
    <div class="title">Hip Abduction (Machine)</div>
    <img src="gifs/hip-abduction.gif" alt="Hip Abduction (Machine)">
    <div class="description">Hip abductions using a machine isolate and target the outer thighs and hips, aiding in hip stability and strength.</div>
  </div>
</div>
`;

function Workout () {
  return (<div dangerouslySetInnerHTML={{__html: code}}></div>
  )
}

export default Workout;