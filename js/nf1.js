// Toggle Tab Item wil change Color White to Red
document.getElementById('tab-Item1').addEventListener('click', function () {
    document.getElementById('tab-Item2').classList.remove('text-red-500'); // Remove red text from Tab Item 2
    document.getElementById('tab-Item3').classList.remove('text-red-500'); // Remove red text from Tab Item 3
    this.classList.toggle('text-red-500'); // Toggle red text on Tab Item 1
});

document.getElementById('tab-Item2').addEventListener('click', function () {
    document.getElementById('tab-Item1').classList.remove('text-red-500'); // Remove red text from Tab Item 1
    document.getElementById('tab-Item3').classList.remove('text-red-500'); // Remove red text from Tab Item 3
    this.classList.toggle('text-red-500'); // Toggle red text on Tab Item 2
});

document.getElementById('tab-Item3').addEventListener('click', function () {
    document.getElementById('tab-Item2').classList.remove('text-red-500'); // Remove red text from Tab Item 2
    document.getElementById('tab-Item1').classList.remove('text-red-500'); // Remove red text from Tab Item 1
    this.classList.toggle('text-red-500'); // Toggle red text on Tab Item 3
});

// Toggle tab-item1 will remove hidden adn add hidden to content2-3
document.getElementById('tab-Item1').addEventListener('click', function () {
    const tabItem1 = document.getElementById('tab-content-item1');
    const tabItem2 = document.getElementById('tab-content-item2');
    const tabItem3 = document.getElementById('tab-content-item3');

    tabItem1.classList.remove('hidden');
    tabItem2.classList.add('hidden');
    tabItem3.classList.add('hidden');
});

// Toggle tab-item2 will remove hidden adn add hidden to content1-3
document.getElementById('tab-Item2').addEventListener('click', function () {
    const tabItem1 = document.getElementById('tab-content-item1');
    const tabItem2 = document.getElementById('tab-content-item2');
    const tabItem3 = document.getElementById('tab-content-item3');

    tabItem1.classList.add('hidden');
    tabItem2.classList.remove('hidden');
    tabItem3.classList.add('hidden');
});

// Toggle tab-item3 will remove hidden adn add hidden to content2-1
document.getElementById('tab-Item3').addEventListener('click', function () {
    const tabItem1 = document.getElementById('tab-content-item1');
    const tabItem2 = document.getElementById('tab-content-item2');
    const tabItem3 = document.getElementById('tab-content-item3');

    tabItem1.classList.add('hidden');
    tabItem2.classList.add('hidden');
    tabItem3.classList.remove('hidden');
});