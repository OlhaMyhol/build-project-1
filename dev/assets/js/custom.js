const builds = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-value');
const stagesValue = document.querySelector('#stages-value');
const flatsValue = document.querySelector('#flats-value');
const buildDescriptions = document.querySelector('.build-info__descriptions');
const buildLinks = document.querySelectorAll('.build-link') 
 
builds.forEach(build => {
    build.addEventListener('mouseover', function() {
        const dataBuildNumber = build.getAttribute('data-build-number')
        const dataStagesNumber = build.getAttribute('data-stages-number')
        const dataFlatsNumber =  build.getAttribute('data-flats-number')
        const dataDescriptions =  build.getAttribute('data-descriptions')
        
        
        buildValue.innerHTML = dataBuildNumber
        stagesValue.innerHTML = dataStagesNumber
        flatsValue.innerHTML = dataFlatsNumber
        buildDescriptions.innerHTML = dataDescriptions
 
    })
})