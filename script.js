function search() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const coursesSection = document.getElementById('courses');

    let colors = ['#ffeeba', '#d4edda', '#cce5ff', '#f8d7da'];
    let courses = document.querySelectorAll('.course');
    courses.forEach((course, index) => {
        course.style.backgroundColor = colors[index % colors.length];
    });

    let offset = 0;
    function animateCourses() {
        offset += 1;
        coursesSection.style.backgroundPosition = `${offset}px ${offset}px`;
        requestAnimationFrame(animateCourses);
    }
    animateCourses();

    const roadmaps = document.querySelectorAll('.roadmap');
    roadmaps.forEach((roadmap) => {
        roadmap.addEventListener('mouseover', () => {
            roadmap.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        roadmap.addEventListener('mouseout', () => {
            roadmap.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll to Playlists Section
    const playlistLink = document.querySelector('nav a[href="#playlists"]');
    playlistLink?.addEventListener('click', () => {
        document.querySelector('.playlists').scrollIntoView({ behavior: 'smooth' });
    });
});
function handleSearch() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    const courses = document.querySelectorAll(".course");
    const playlists = document.querySelectorAll(".playlist");
    let found = false;

    // Filter Courses
    courses.forEach(course => {
        const title = course.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            course.style.display = "block";
            found = true;
        } else {
            course.style.display = "none";
        }
    });

    // Filter Playlists
    playlists.forEach(playlist => {
        const title = playlist.getAttribute("data-title").toLowerCase();
        if (title.includes(query)) {
            playlist.style.display = "block";
            found = true;
        } else {
            playlist.style.display = "none";
        }
    });

    if (!found) alert("No results found!");
}


