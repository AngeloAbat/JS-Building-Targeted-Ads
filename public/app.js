// get user's data
// get user's coordinates
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve,reject)
    })
    return [pos.coords.latitude, pos.coords.longtitude]
}
console.log(getCoords())
// get user's time
function userTime(){
    const now = new Date()
    return now.getHours()
}
userTime()

// Get the user's time:                                                              
function getMealTime(){
    const tod = userTime()
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}
console.log(getMealTime())                


// helper functions
// check time of day


// build ads
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span> ${mealTime} </span>in town`
    content.append(inner)
}

function buildAd2(){
    const coords = getCoords()
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// event listeners
// on load, build ads
window.onload = async() => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
                                                    

