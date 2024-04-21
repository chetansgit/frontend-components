const toggleBtn = document.querySelector('.toggle-btn');
const showSidebarBtn = document.querySelector('.show-sidebar-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    sidebar.classList.toggle('collapsed');
});

showSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('expanded');
    sidebar.classList.remove('collapsed');
});