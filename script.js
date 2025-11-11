document.addEventListener("DOMContentLoaded", () => {
  // 🌙☀️ 다크모드 (localStorage 저장 기능 추가)
  const toggleBtn = document.getElementById('theme-toggle');
  
  // ✅ 저장된 테마 불러오기
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
      
      // ✅ 테마 저장
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ✅ 스크롤 시 섹션 등장 애니메이션 (main 안의 section만)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  // ✅ main 안의 section만 관찰 (Hero 제외)
  document.querySelectorAll('main section').forEach(sec => observer.observe(sec));
  
  // ✅ 첫 번째 섹션(#home)은 바로 표시
  const firstSection = document.querySelector('main section');
  if (firstSection) {
    firstSection.classList.add('show');
  }
});