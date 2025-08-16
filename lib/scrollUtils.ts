// Smooth scrolling utilities for better UX

export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function scrollToContact() {
  scrollToElement('contact-form', 80);
}

export function scrollToServices() {
  scrollToElement('services', 80);
}