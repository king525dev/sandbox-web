const colours = [
     "#C40D0D",
     "#00D916",
     "#0052CE"
]

const randomColour = (seed) => {
     const no = ((Math.floor(Math.random() * colours.length)) + seed) % colours.length;
     return colours[no]
}

export default randomColour