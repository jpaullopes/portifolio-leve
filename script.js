document.addEventListener('DOMContentLoaded', () => {
    // Botão de voltar ao topo
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Mostra ou esconde o botão de voltar ao topo baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Rolagem suave para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para as boxes da equipe
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Função para verificar se um elemento está visível na viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        // Consideramos um elemento visível se pelo menos uma parte dele estiver na viewport
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    };
    
    // Função para animar elementos quando entrarem na viewport
    const animateOnScroll = () => {
        teamMembers.forEach(member => {
            if (isElementInViewport(member)) {
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configuração inicial dos elementos com CSS em vez de JavaScript
    // para evitar flickering e garantir que apareçam sempre
    teamMembers.forEach(member => {
        // Aplicamos a transição, mas mantemos os elementos visíveis por padrão
        member.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Dispara a animação imediatamente para os elementos visíveis
    // Isso garante que mesmo que a página carregue com os elementos já visíveis,
    // a animação ainda ocorrerá
    setTimeout(animateOnScroll, 100);
    
    // Verificar a posição dos elementos no scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar hover effect nas skills
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            const skillLevel = this.querySelector('.skill-level');
            skillLevel.style.opacity = '0.8';
        });
        
        skill.addEventListener('mouseleave', function() {
            const skillLevel = this.querySelector('.skill-level');
            skillLevel.style.opacity = '1';
        });
    });
});