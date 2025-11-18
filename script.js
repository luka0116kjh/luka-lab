document.addEventListener("DOMContentLoaded", () => {
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