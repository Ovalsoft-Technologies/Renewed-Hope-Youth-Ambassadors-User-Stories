// Application State
let currentFilter = 'all';
let currentPriority = 'all';
let searchQuery = '';

// DOM Elements
const storiesGrid = document.getElementById('storiesGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const storyModal = document.getElementById('storyModal');
const modalBody = document.getElementById('modalBody');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderStories();
    attachEventListeners();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Filter Functions
function filterStories() {
    let filtered = userStories;
    
    // Filter by user type
    if (currentFilter !== 'all') {
        filtered = filtered.filter(story => story.userType === currentFilter);
    }
    
    // Filter by priority
    if (currentPriority !== 'all') {
        filtered = filtered.filter(story => story.priority === currentPriority);
    }
    
    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(story => 
            story.id.toLowerCase().includes(query) ||
            story.title.toLowerCase().includes(query) ||
            story.asA.toLowerCase().includes(query) ||
            story.iWant.toLowerCase().includes(query) ||
            story.soThat.toLowerCase().includes(query) ||
            story.epic.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

// Render Functions
function renderStories() {
    const filtered = filterStories();
    
    if (filtered.length === 0) {
        storiesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    storiesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    storiesGrid.innerHTML = filtered.map(story => `
        <div class="story-card" onclick="openStoryModal('${story.id}')">
            <div class="story-header">
                <div class="story-id">${story.id}</div>
                <div class="story-meta">
                    <span class="priority-badge priority-${story.priority}">${story.priority}</span>
                    <span class="points-badge">${story.points} pts</span>
                </div>
            </div>
            <h3 class="story-title">${story.title}</h3>
            <p class="story-user-type">As a <strong>${story.asA}</strong></p>
            <p class="story-description">
                I want ${story.iWant} so that ${story.soThat}
            </p>
            <div class="story-footer">
                <span class="story-epic">${story.epic}</span>
                <span class="read-more">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </div>
    `).join('');
}

function openStoryModal(storyId) {
    const story = userStories.find(s => s.id === storyId);
    if (!story) return;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${story.title}</h2>
            <div class="modal-meta">
                <span class="priority-badge priority-${story.priority}">${story.priority}</span>
                <span class="points-badge">${story.points} Story Points</span>
                <span class="story-id">${story.id}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Epic</h3>
            <p>${story.epic}</p>
        </div>
        
        <div class="modal-section">
            <h3>User Story</h3>
            <p><strong>As a</strong> ${story.asA}</p>
            <p><strong>I want</strong> ${story.iWant}</p>
            <p><strong>So that</strong> ${story.soThat}</p>
        </div>
        
        <div class="modal-section">
            <h3>Acceptance Criteria</h3>
            <ul>
                ${story.acceptanceCriteria.map(criteria => `<li>${criteria}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Metadata</h3>
            <p><strong>User Type:</strong> ${capitalizeFirst(story.userType)}</p>
            <p><strong>Priority:</strong> ${story.priority}</p>
            <p><strong>Story Points:</strong> ${story.points}</p>
        </div>
    `;
    
    storyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStoryModal() {
    storyModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
function attachEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderStories();
        });
    });
    
    // Priority buttons
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentPriority = e.target.dataset.priority;
            renderStories();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderStories();
    });
    
    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeStoryModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeStoryModal);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && storyModal.classList.contains('active')) {
            closeStoryModal();
        }
    });
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterStories,
        renderStories,
        openStoryModal,
        closeStoryModal
    };
}
