// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ------------------- */
    // 부드러운 스크롤 구현   */
    // ------------------- */
    const navLinks = document.querySelectorAll('.nav-links a,.hero a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // 기본 앵커 동작 방지

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 나머지 JS 코드는 여기에 추가됩니다.
    // script.js (기존 코드 아래에 추가)

document.addEventListener('DOMContentLoaded', () => {
    //... (부드러운 스크롤 코드)...

    // ------------------- */
    // 프로젝트 모달 구현    */
    // ------------------- */
    const projectGrid = document.querySelector('.project-grid');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (projectGrid) {
        projectGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (!card) return;

            // data-* 속성에서 정보 가져오기
            const imgSrc = card.dataset.imgSrc;
            const title = card.dataset.title;
            const description = card.dataset.description;

            // 모달에 정보 채우기
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // 모달 보이기
            modal.style.display = 'flex';
        });
    }

    // 모달 닫기 기능
    const closeModal = () => {
        modal.style.display = 'none';
    };

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            // 모달 배경 클릭 시 닫기
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
});