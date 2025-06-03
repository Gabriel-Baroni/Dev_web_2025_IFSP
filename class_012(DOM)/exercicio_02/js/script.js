let Cores = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'cyan',
    'lime',
    'brown',
    'teal',
    'indigo',
    'violet',
    'gold',
    'silver',
    'maroon',
    'navy',
    'olive',
    'coral',
]


Array.from(document.querySelectorAll('button')).forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = Cores[Math.floor(Math.random() * Cores.length)];
        button.style.borderColor = Cores[Math.floor(Math.random() * Cores.length)];
        button.style.color = Cores[Math.floor(Math.random() * Cores.length)];
  
    });
})

