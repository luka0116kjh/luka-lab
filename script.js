document.addEventListener("DOMContentLoaded", () => {
  // 🌙☀️ 다크모드 
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      toggleBtn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    });
  }

  // 스크롤 시 섹션 등장 애니메이션
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});
