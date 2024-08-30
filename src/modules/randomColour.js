const colours = [
     ["#C40D0D","#00D916","#0052CE"],
     ["#C40D0D", "#0052CE","#00D916"],
     ["#0052CE", "#C40D0D", "#00D916"],
     ["#0052CE", "#00D916", "#C40D0D"],
     ["#00D916", "#C40D0D", "#0052CE"],
     ["#00D916", "#0052CE", "#C40D0D"],
]

const randomColour = () => {
     const no = ((Math.floor(Math.random() * colours.length))) % colours.length;
     return colours[no]
}

export default randomColour